import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import StarField from '../components/solarsystem/StarField'
import Planet from '../components/solarsystem/Planet'

export default function SolarSystemPage() {
    return (
        <>
        <div style={{'background-color': 'black'}}>
            <h1>Click on me - Hover me :)</h1>
            <Canvas camera={{ position: [0, 0, 35] }}
            style={{ height: '80vh', width: '80vw' }}>
                <ambientLight intensity={0.2} />
                <axesHelper args={[5]} />
                <gridHelper/>
                <StarField/>
                <Planet/>

                <OrbitControls />
            </Canvas>
        </div>
        </>
    )
    }
