import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { Points, PointsMaterial } from 'three/src/objects/Points';

extend({ Points });

const setBrightness = (geometry, count) => {
    let intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * count);
      const color = new THREE.Color().setHSL(Math.random(), 1, 0.5);
      geometry.attributes.color.setXYZ(randomIndex, color.r, color.g, color.b);
      geometry.attributes.color.needsUpdate = true;
    }, 100);
    return () => clearInterval(intervalId);
  };

const StarField = ({ count = 2000 }) => {
  const { scene, camera } = useThree();
  const points = useRef();

  useEffect(() => {
    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(count * 3);
    const starColors = new Float32Array(count * 3);
    // const colors = new THREE.Float32BufferAttribute(count * 3, 3);
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;
    //   colors.setXYZ(i, Math.random(), Math.random(), Math.random());
      const color = new THREE.Color();
      color.setHSL(Math.random(), 1, 0.5);
      starColors[i*3] = color.r;
      starColors[i*3+1] = color.g;
      starColors[i*3+2] = color.b;
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    // starsGeometry.setAttribute("color", colors);
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    points.current = new Points(starsGeometry, new THREE.PointsMaterial({ size: Math.random()+2, sizeAttenuation: false }));
    scene.add(points.current);

    // let intervalId = setInterval(() => {
    //     const randomIndex = Math.floor(Math.random() * count);
    //     points.current.geometry.colors[randomIndex] = new THREE.Color().setHSL(Math.random(), 1, 0.5);
    //     points.current.geometry.colorsNeedUpdate = true;
    //   }, 100);
    //   return () => clearInterval(intervalId);
  }, [count, scene]);

  useFrame(() => {
    if (points.current) {
      points.current.rotation.x += 0.00005;
    //   points.current.rotation.y += 0.001;
    }
  });
    // useFrame((state) => {
    //     const { time } = state;
    //     if (points.current) {
    //     points.current.geometry.attributes.color.needsUpdate = true;
    //     for (let i = 0; i < count; i++) {
    //         if (Math.random() < 0.01) {
    //         const color = points.current.geometry.attributes.color.array;
    //         color[i * 3] = Math.random();
    //         color[i * 3 + 1] = Math.random();
    //         color[i * 3 + 2] = Math.random();
    //         }
    //     }
    //     }
    // });

  return null;
};

export default StarField;
