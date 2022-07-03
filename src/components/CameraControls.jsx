
import { useFrame } from 'react-three-fiber';
import state from '../state';
import * as THREE from 'three'
import { Vector3, VectorKeyframeTrack } from 'three';



const CameraControls = ({}) => {
  const vec = new THREE.Vector3()
  useFrame(({camera, scene})=>{
    camera.position.lerp(vec.set(...state.cameraPos), 0.1)
  })
  return (
    null
  )
}

export default CameraControls;