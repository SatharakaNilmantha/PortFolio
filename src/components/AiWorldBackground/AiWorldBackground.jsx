import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './AiWorldBackground.css';

export default function AiWorldBackground({ theme = 'dark' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 1, 3000);
    camera.position.set(0, 40, 480);

    // Renderer with full transparency
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ==========================================
    // 1. 3D AI GLOBE (Vanta-Style Neural Globe)
    // ==========================================
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const isMobile = width < 768;
    const globeRadius = isMobile ? 85 : 125;
    globeGroup.position.set(0, 10, 0);

    // Create particle points on the sphere surface (Fibonacci spiral)
    const globePointsCount = isMobile ? 380 : 540;
    const globePositions = new Float32Array(globePointsCount * 3);
    const globeColors = new Float32Array(globePointsCount * 3);
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < globePointsCount; i++) {
      const y = 1 - (i / (globePointsCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY * globeRadius;
      const currY = y * globeRadius;
      const z = Math.sin(theta) * radiusAtY * globeRadius;

      globePositions[i * 3] = x;
      globePositions[i * 3 + 1] = currY;
      globePositions[i * 3 + 2] = z;

      // Electric cyan to avidz-primary gradient
      const factor = (y + 1) / 2;
      globeColors[i * 3] = THREE.MathUtils.lerp(0.0, 0.05, factor);
      globeColors[i * 3 + 1] = THREE.MathUtils.lerp(0.94, 0.55, factor);
      globeColors[i * 3 + 2] = 1.0;
    }

    const globeGeo = new THREE.BufferGeometry();
    globeGeo.setAttribute('position', new THREE.BufferAttribute(globePositions, 3));
    globeGeo.setAttribute('color', new THREE.BufferAttribute(globeColors, 3));

    // Particle texture generator for soft glowing dots
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.35, 'rgba(0, 240, 255, 0.85)');
      grad.addColorStop(0.7, 'rgba(0, 122, 255, 0.35)');
      grad.addColorStop(1, 'rgba(0, 122, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const dotTexture = createCircleTexture();

    const globeMat = new THREE.PointsMaterial({
      size: isMobile ? 3.5 : 4.5,
      map: dotTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const globePoints = new THREE.Points(globeGeo, globeMat);
    globeGroup.add(globePoints);

    // Network lines connecting nearby vertices on the globe
    const linePositions = [];
    const lineColors = [];
    const maxDistance = isMobile ? 26 : 30;

    for (let i = 0; i < globePointsCount; i++) {
      for (let j = i + 1; j < globePointsCount; j++) {
        const dx = globePositions[i * 3] - globePositions[j * 3];
        const dy = globePositions[i * 3 + 1] - globePositions[j * 3 + 1];
        const dz = globePositions[i * 3 + 2] - globePositions[j * 3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (d < maxDistance) {
          linePositions.push(
            globePositions[i * 3],
            globePositions[i * 3 + 1],
            globePositions[i * 3 + 2],
            globePositions[j * 3],
            globePositions[j * 3 + 1],
            globePositions[j * 3 + 2]
          );

          lineColors.push(0.0, 0.85, 1.0, 0.0, 0.45, 1.0);
        }
      }
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const globeLines = new THREE.LineSegments(linesGeo, linesMat);
    globeGroup.add(globeLines);

    // Glowing orbital cyber rings
    const ringGroup = new THREE.Group();
    globeGroup.add(ringGroup);

    const createOrbitRing = (radius, tiltX, tiltZ) => {
      const ringPts = [];
      const segs = 96;
      for (let i = 0; i <= segs; i++) {
        const theta = (i / segs) * Math.PI * 2;
        ringPts.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      const rGeo = new THREE.BufferGeometry().setFromPoints(ringPts);
      const rMat = new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.LineLoop(rGeo, rMat);
      ring.rotation.x = tiltX;
      ring.rotation.z = tiltZ;
      return ring;
    };

    const ring1 = createOrbitRing(globeRadius * 1.35, 0.45, 0.3);
    const ring2 = createOrbitRing(globeRadius * 1.55, -0.6, -0.4);
    ringGroup.add(ring1);
    ringGroup.add(ring2);

    // Orbiting satellite data nodes
    const satCount = 4;
    const satPositions = new Float32Array(satCount * 3);
    const satGeo = new THREE.BufferGeometry();
    satGeo.setAttribute('position', new THREE.BufferAttribute(satPositions, 3));
    const satMat = new THREE.PointsMaterial({
      size: 8,
      map: dotTexture,
      color: 0x00f0ff,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const satellites = new THREE.Points(satGeo, satMat);
    ringGroup.add(satellites);

    // ==========================================
    // 2. 3D CYBER DOT-MATRIX WAVE (User Image)
    // ==========================================
    const cols = isMobile ? 36 : 60;
    const rows = isMobile ? 26 : 42;
    const waveCount = cols * rows;
    const wavePositions = new Float32Array(waveCount * 3);
    const waveColors = new Float32Array(waveCount * 3);
    const spacingX = isMobile ? 18 : 17;
    const spacingZ = isMobile ? 18 : 17;
    const startX = -((cols - 1) * spacingX) / 2;
    const startZ = -((rows - 1) * spacingZ) / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = (r * cols + c) * 3;
        wavePositions[idx] = startX + c * spacingX;
        wavePositions[idx + 1] = -140; // baseline y
        wavePositions[idx + 2] = startZ + r * spacingZ;

        // Diagonal cyber gradient as seen in user's image
        const diag = (c / cols + r / rows) / 2;
        waveColors[idx] = THREE.MathUtils.lerp(0.02, 0.1, diag);
        waveColors[idx + 1] = THREE.MathUtils.lerp(0.65, 0.95, diag);
        waveColors[idx + 2] = 1.0;
      }
    }

    const waveGeo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(wavePositions, 3);
    waveGeo.setAttribute('position', posAttr);
    waveGeo.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: isMobile ? 3.5 : 4.5,
      map: dotTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveMesh = new THREE.Points(waveGeo, waveMat);
    waveMesh.rotation.x = 0.32; // Perspective tilt
    waveMesh.position.y = -110;
    waveMesh.position.z = -30;
    scene.add(waveMesh);

    // ==========================================
    // 3. AMBIENT CYBER PARTICLES (AI Constellation)
    // ==========================================
    const dustCount = isMobile ? 40 : 80;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 800;
      dustPositions[i + 1] = (Math.random() - 0.5) * 600;
      dustPositions[i + 2] = (Math.random() - 0.5) * 400;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 2.5,
      map: dotTexture,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dustMesh = new THREE.Points(dustGeo, dustMat);
    scene.add(dustMesh);

    // ==========================================
    // 4. INTERACTION (Mouse Parallax & Scroll)
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = window.scrollY;

    const onMouseMove = (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetX = (e.clientX - halfW) / halfW;
      targetY = (e.clientY - halfH) / halfH;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Responsive resize handler
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      globeGroup.position.set(0, 10, 0);
    };

    window.addEventListener('resize', onResize);

    // ==========================================
    // 5. ANIMATION LOOP
    // ==========================================
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Rotate globe continuously
      globeGroup.rotation.y = elapsedTime * 0.12 + mouseX * 0.4;
      globeGroup.rotation.x = 0.2 + mouseY * 0.25;
      globeGroup.rotation.z = Math.sin(elapsedTime * 0.08) * 0.1;

      // Animate orbital rings
      ringGroup.rotation.y = elapsedTime * 0.2;

      // Animate orbiting satellites
      const satPosArr = satellites.geometry.attributes.position.array;
      for (let s = 0; s < satCount; s++) {
        const satAngle = elapsedTime * 0.8 + (s * Math.PI * 2) / satCount;
        const currentRadius = s % 2 === 0 ? globeRadius * 1.35 : globeRadius * 1.55;
        satPosArr[s * 3] = Math.cos(satAngle) * currentRadius;
        satPosArr[s * 3 + 1] = Math.sin(satAngle * 0.5) * (globeRadius * 0.2);
        satPosArr[s * 3 + 2] = Math.sin(satAngle) * currentRadius;
      }
      satellites.geometry.attributes.position.needsUpdate = true;

      // Animate 3D Dot-Matrix Wave (like the user's image)
      const positions = posAttr.array;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = (r * cols + c) * 3;
          // Dual sine-cosine wave propagating diagonally
          const wave1 = Math.sin(c * 0.22 + elapsedTime * 1.6) * 12;
          const wave2 = Math.cos(r * 0.22 + elapsedTime * 1.2) * 10;
          const wave3 = Math.sin((c + r) * 0.16 + elapsedTime * 1.8) * 8;
          positions[idx + 1] = -140 + wave1 + wave2 + wave3;
        }
      }
      posAttr.needsUpdate = true;

      // Shift wave tilt slightly with mouse and scroll
      waveMesh.rotation.z = mouseX * 0.08;
      waveMesh.position.y = -110 + Math.sin(elapsedTime * 0.5) * 5 - (scrollY * 0.04) % 60;

      // Gentle floating dust
      dustMesh.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // ==========================================
    // CLEANUP
    // ==========================================
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries and Materials
      globeGeo.dispose();
      globeMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      satGeo.dispose();
      satMat.dispose();
      dotTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className={`ai-world-watermark ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}
      ref={mountRef}
      aria-hidden="true"
    />
  );
}
