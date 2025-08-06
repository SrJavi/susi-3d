import { OrbitControls, useGLTF } from '@react-three/drei';

useGLTF.preload('/src/assets/dormitorio.glb');

export default function Controls() {
	const gltf = useGLTF('/src/assets/dormitorio.glb');
	return (
		<>
			<ambientLight intensity={1} />
			<directionalLight position={[5, 10, 5]} intensity={1} />
			<OrbitControls />
			<primitive object={gltf.scene} position={[0, 0, 0]} />
		</>
	);
}
