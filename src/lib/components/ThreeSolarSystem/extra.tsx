export {};
// const ParentObject = () => {
//     const blueRef = useRef();
//     const greenRef = useRef();
//     const redRef = useRef();
  
//     // Define orbit parameters for both the blue box and the green box
//     const blueCenter = new Vector3(0, 0, 0);
//     const blueRadius = 0;
//     const blueAngle = useRef(0);
//     const greenCenter = new Vector3(0, 0, 0); // Initial position of the green box
//     const greenRadius = 3;
//     const greenAngle = useRef(0);
//     const redCenter = new Vector3(1, 0, 0); // Initial position of the red box
//     const redRadius = 1;
//     const redAngle = useRef(0);
  
//     // Orbit both the blue box and the green box
//     useFrame(() => {
//       blueAngle.current += 0.002; // Blue box orbit speed
//       const bluePosition = new Vector3().copy(blueCenter).add(new Vector3(blueRadius, 0, 0).applyMatrix4(new Matrix4().makeRotationY(blueAngle.current)));
//       blueRef.current.position.copy(bluePosition);
  
//       greenAngle.current += 0.01; // Green box orbit speed
//       const greenPosition = new Vector3().copy(greenCenter).add(new Vector3(greenRadius, 0, 0).applyMatrix4(new Matrix4().makeRotationY(greenAngle.current)));
//       greenRef.current.position.copy(greenPosition);
  
//       redAngle.current += 0.03; // Red box orbit speed
//       const redPosition = new Vector3().copy(greenPosition).add(new Vector3(redRadius, 0, 0).applyMatrix4(new Matrix4().makeRotationY(redAngle.current)));
//       redRef.current.position.copy(redPosition);
//     });
  
//     return (
//       <>
//         {/* Blue box (center) */}
//         <mesh ref={blueRef} position={blueCenter}>
//           <boxGeometry args={[1, 1, 1]} />
//           <meshStandardMaterial color="blue" />
//         </mesh>
  
//         {/* Green box (orbits around blue box) */}
//         <mesh ref={greenRef}>
//           <boxGeometry args={[0.5, 0.5, 0.5]} />
//           <meshStandardMaterial color="green" />
//         </mesh>
  
//         {/* Red box (orbits around green box) */}
//         <mesh ref={redRef}>
//           <boxGeometry args={[0.3, 0.3, 0.3]} />
//           <meshStandardMaterial color="red" />
//         </mesh>
//       </>
//     );
//   };



//   <System distance={0} >
//     <Planet />
//     <System distance={3} >
//         <Planet />
//         <System distance={1} >
//             <Planet />
//         </System>
//     </System>
//   </System>


// // Orbit helper component
// const Orbit = ({ radius }) => {
// 	const { camera } = useThree();
// 	const [orbitRef] = useState(() => new THREE.Object3D());

// 	useMemo(() => {
// 		orbitRef.position.set(0, 0, 0);
// 		orbitRef.scale.set(radius, radius, radius);
// 		camera.add(orbitRef);

// 		return () => {
// 			camera.remove(orbitRef);
// 		};
// 	}, [camera, orbitRef, radius]);

// 	return (
// 		<group>
// 			<mesh rotation={[-Math.PI / 2, 0, 0]}>
// 				<torusGeometry args={[radius, 0.01, 16, 100]} />
// 				<meshBasicMaterial color="white" opacity={0.3} transparent />
// 			</mesh>
// 		</group>
// 	);
// };