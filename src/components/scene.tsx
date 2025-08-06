import { Canvas } from '@react-three/fiber';
import Controls from './controls';

export default function Scene() {
	return (
		<Canvas camera={{ position: [8, 5, 8], fov: 45 }}>
			<Controls />
		</Canvas>
	);
}
