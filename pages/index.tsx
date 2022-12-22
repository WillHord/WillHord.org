import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import * as THREE from "three";
// import { Points } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
// import { GUI } from "dat.gui";
import DatGui from "react-dat-gui";

// import Floor from '../components/Floor'
// import Box from '../components/Box's

const Cube = () => {
  const cube = useRef<three.Mesh>();

  useFrame(() => {
    cube.current!.rotation.x += 0.01;
    cube.current!.rotation.y += 0.01;
  });

  return (
    <mesh ref={cube}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0391BA" />
    </mesh>
  );
};

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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const gui = new GUI();
  useEffect(() => {
    // const folder = gui.addFolder('Galaxy');
    
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div className={styles.galaxy}>
          <Canvas
            // concurrent
            camera={{
              near: 0.001,
              far: 1000,
              zoom: 1,
            }}
            onCreated={({ gl }) => {
              gl.setClearColor("#252934");
            }}
          >
            {/* <DatGui data={{}} /> */}
            <Stats />
            <OrbitControls />
            {/* <Suspense fallback={null}>
              <Scene />
            </Suspense> */}
            <gridHelper />
            <axesHelper />
            <Galaxy />
          </Canvas>
        </div>
      <main className={styles.main}>
      </main>
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a> */}
        {/* </div>
      </main> */}
    </>
  )
}
