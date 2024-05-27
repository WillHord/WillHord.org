import {ConeGeometry, type InstancedMesh, MeshPhongMaterial, MeshToonMaterial} from "three";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import { DoubleSide } from 'three';

const InstancedMeshComponent = ({count = 100, pushRef=(ref:any)=>{}})=>{
    // const gltf = useLoader(GLTFLoader, '/Models/PaperPlane.glb')
    const model = useLoader(FBXLoader, '/Models/PaperPlane.fbx')

    const mesh = model.children[0]
    // console.log(gltf.scene.children)
    // console.log('Loaded mesh rotation:', mesh.rotation);
    mesh.rotation.set(Math.PI / 2, 0, 0)



    // const boxGeometry = new ConeGeometry( 0.5, 3, 4 );
    const meshPhongMaterial = new MeshToonMaterial({ side: DoubleSide })
    
    return (
        <instancedMesh 
            castShadow={true}
            ref={(ref:InstancedMesh)=>{
                if(ref){
                    pushRef(ref)
                }
            }} 
            // args={[mesh.geometry, meshPhongMaterial, count]}
            scale={[3,3,3]}
            rotation={[0, 0, 0]}
        />
    )
}

export default InstancedMeshComponent