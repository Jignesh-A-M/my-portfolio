"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function OrbitalNetwork() {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Setup scene
    const scene = new THREE.Scene();
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    // Position camera so the plane fills the screen and we look down at it slightly
    camera.position.set(0, 30, 80);
    camera.lookAt(0, -10, 0);
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // Cap DPR at 2
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const container = mountRef.current;
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    
    // Group to hold our topology
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);
    
    // Colors updated for dark theme
    const charcoalColor = new THREE.Color('#6C757D'); // Lighter gray for visibility on dark background
    const accentColor = new THREE.Color('#E63946');
    
    // ── Topology Plane ──────────────────────────────────────────────
    // A large plane with many segments to create a smooth wave
    const planeWidth = 300;
    const planeHeight = 150;
    const widthSegments = 60;
    const heightSegments = 30;
    
    const planeGeo = new THREE.PlaneGeometry(planeWidth, planeHeight, widthSegments, heightSegments);
    
    // We rotate the plane so it lays flat along the XZ axis
    planeGeo.rotateX(-Math.PI / 2);
    
    // Material for the grid (wireframe)
    const planeMat = new THREE.MeshBasicMaterial({
      color: charcoalColor,
      wireframe: true,
      transparent: true,
      opacity: 0.15, // keep it subtle so text remains readable
    });
    
    const planeMesh = new THREE.Mesh(planeGeo, planeMat);
    networkGroup.add(planeMesh);
    
    // Store original Y positions to calculate waves
    const positions = planeGeo.attributes.position;
    const originalY = new Float32Array(positions.count);
    for (let i = 0; i < positions.count; i++) {
      originalY[i] = positions.getY(i);
    }
    
    // ── Floating Accent Particles (Dust/Sparks) ──────────────────────
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * planeWidth;
      particlePositions[i * 3 + 1] = Math.random() * 20 - 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * planeHeight;
    }
    
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMat = new THREE.PointsMaterial({
      color: accentColor,
      size: 2,
      transparent: true,
      opacity: 0.25,
      sizeAttenuation: true
    });
    
    const particleMesh = new THREE.Points(particleGeo, particleMat);
    networkGroup.add(particleMesh);

    // Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      if (prefersReducedMotion) return;
      
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      
      const mouseX = (event.clientX - windowHalfX);
      const mouseY = (event.clientY - windowHalfY);
      
      // subtle tilt based on mouse
      targetRotationY = mouseX * 0.0002;
      targetRotationX = mouseY * 0.0002;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Intersection Observer to pause animation when scrolled away
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(container);
    
    // Tab active state
    let isTabActive = true;
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Animation loop
    let animationFrameId: number;
    let time = 0;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      if (!isVisible || !isTabActive) return;
      
      if (!prefersReducedMotion) {
        time += 0.015;
        
        // Easing parallax
        networkGroup.rotation.y += (targetRotationY - networkGroup.rotation.y) * 0.05;
        networkGroup.rotation.x += (targetRotationX - networkGroup.rotation.x) * 0.05;
        
        // Update Plane Vertices for Wave Effect
        const posAttribute = planeGeo.attributes.position;
        for (let i = 0; i < posAttribute.count; i++) {
          const x = posAttribute.getX(i);
          const z = posAttribute.getZ(i);
          
          // Complex wave function using sine and cosine
          const wave1 = Math.sin(x * 0.05 + time) * 3;
          const wave2 = Math.cos(z * 0.05 + time * 0.8) * 3;
          const wave3 = Math.sin((x + z) * 0.03 - time * 0.5) * 2;
          
          const newY = originalY[i] + wave1 + wave2 + wave3;
          posAttribute.setY(i, newY);
        }
        posAttribute.needsUpdate = true;
        
        // Slowly float particles upwards
        const pPosAttribute = particleGeo.attributes.position;
        for (let i = 0; i < particleCount; i++) {
          let py = pPosAttribute.getY(i);
          py += 0.05;
          if (py > 20) {
            py = -20;
          }
          pPosAttribute.setY(i, py);
        }
        pPosAttribute.needsUpdate = true;
      }
      
      renderer.render(scene, camera);
    };
    
    // Force one initial render if reduced motion
    if (prefersReducedMotion) {
      // Calculate one frame of waves so it's not totally flat
      const posAttribute = planeGeo.attributes.position;
      for (let i = 0; i < posAttribute.count; i++) {
        const x = posAttribute.getX(i);
        const z = posAttribute.getZ(i);
        const wave1 = Math.sin(x * 0.05) * 3;
        const wave2 = Math.cos(z * 0.05) * 3;
        posAttribute.setY(i, originalY[i] + wave1 + wave2);
      }
      posAttribute.needsUpdate = true;
      
      renderer.render(scene, camera);
    } else {
      animate();
    }
    
    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      
      if (prefersReducedMotion) {
         renderer.render(scene, camera);
      }
    };
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose Three.js resources
      planeGeo.dispose();
      planeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-100 z-0 hidden sm:block" 
      style={{ overflow: 'hidden' }}
      aria-hidden="true" 
    />
  );
}
