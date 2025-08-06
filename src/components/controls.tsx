import { OrbitControls, useGLTF } from '@react-three/drei';

// Preload fuera del componente
useGLTF.preload('/susi-3d/dormitorio.glb');

export default function Controls() {
	const gltf = useGLTF('/susi-3d/dormitorio.glb');
	return (
		<>
			<ambientLight intensity={1} />
			<directionalLight position={[5, 10, 5]} intensity={1} />
			<OrbitControls />
			<primitive object={gltf.scene} position={[0, 0, 0]} />
		</>
	);
}
