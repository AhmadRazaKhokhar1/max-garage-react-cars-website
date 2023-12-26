import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Loader = () => {
  const containerAnimated = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cubeRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer's canvas to the specified div
    containerAnimated.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

    // Create two materials with different colors
    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x2004b,
      flatShading: false,
      side: THREE.DoubleSide,
      shadowSide: true,
    });
    const navyMaterial = new THREE.MeshStandardMaterial({
      color: 0x0000ff,
      flatShading: false,
      side: THREE.DoubleSide,
      clipShadows: true,
    });

    // Apply materials to the corresponding faces of the cube
    const materials = [
      blueMaterial,
      blueMaterial,
      blueMaterial,
      blueMaterial, // Faces on one side (e.g., left side)
      navyMaterial,
      navyMaterial,
      navyMaterial,
      navyMaterial, // Faces on the other side (e.g., right side)
    ];

    // Use the materials for all sides of the cube
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cubeRef.current = cube;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.05;
      cube.rotation.z += 0.01;

      renderer.render(scene, camera);
    }

    animate();

    // Cleanup function to handle component unmounting
    return () => {
      // Dispose of materials
      materials.forEach((material) => {
        material.dispose();
      });

      // Dispose of geometry
      geometry.dispose();

      // Remove the cube from the scene to avoid memory leaks
      if (cubeRef.current) {
        scene.remove(cubeRef.current);
      }

      // Dispose of the renderer's domElement
      if (rendererRef.current && containerAnimated.current) {
        containerAnimated.current.removeChild(rendererRef.current.domElement);
      }

      // Dispose of the renderer to avoid memory leaks
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div style={{}}>
      {/* This div will contain the Three.js animation */}
      <div ref={containerAnimated}></div>
    </div>
  );
};

export default Loader;
