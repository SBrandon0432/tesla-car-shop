import React, {useEffect, useState} from "react";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, GodRays } from '@react-three/postprocessing'
import { useThree } from "react-three-fiber";


const Effects = () => {
  const [lights, setLights] = useState(null);
  const {scene} = useThree()

  useEffect(()=>{
    setLights(scene.lights && scene.lights.length === 3)
  }, [scene.lights])

  return (
    lights ?
    <EffectComposer>

      <DepthOfField focusDistance={0} focalLength={0.12} bokehScale={2} height={480} />
      <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={300} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />

   </EffectComposer> :
    null
  )
}

export default Effects;