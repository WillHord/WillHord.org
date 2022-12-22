// import * as THREE from 'three';
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Points } from "@react-three/drei";

import styles from '../styles/Home.module.css'

import * as THREE from "three";
import { Points } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";


function Galaxy() {
    // create a reference to the canvas
    const ref = useRef<THREE.Points>();
  
    const material = new THREE.PointsMaterial({
      color: "#6359ee",
      size: 0.0001,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });
  
    const radius = 3;
    const height = 0.5;
  
    const randomness = 1;
  
    const numPoints = 1000000; 
    // const branchProbability = 0.1;
    // const pitch = 10;
    const spin = 2 * Math.random();
  
    const numBranches = 8; 
  
    const color = new THREE.Color();
  
    // create a points geometry
    const points = [];
    const colors = [];
  
    // points.push(0, 0, 0);
    // let prevPoint = points[0];
    for (let i = 0; i < numPoints; i++) {
      const r = Math.random() * radius;
  
      // const mixedColor = new THREE.Color();
  
      const branchIndex = i % numBranches;
      const branchAngle = (branchIndex / numBranches) * Math.PI * 2;
      const spinAngle = r * spin;
  
      const x = Math.pow(Math.random(), randomness) * (Math.random() * 0.5) * r * randomness;
      const z = Math.pow(Math.random(), randomness) * (Math.random() * 0.5) * r * randomness;
      const y = Math.pow(Math.random(), randomness) * (Math.random() * 0.5) * r * randomness;
  
      points.push(
        Math.cos(branchAngle + spinAngle) * r + x,
        y * height,
        Math.sin(branchAngle + spinAngle) * r + z
      );
     
      color.setHSL(i / 1000, 1.0, 0.5);
      colors.push(color.r, color.g, color.b);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  
    // console.log(geometry)
    // define a render loop to update the canvas
    useFrame(() => {
      if(ref.current) {
        // ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.001;
      }
    });
  
    return (
      <>
        <points ref={ref} geometry={geometry} material={material} />
      </>
    );
  }
