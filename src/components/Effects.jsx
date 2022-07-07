import React from "react";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'


const Effects = () => {

  return (
    <EffectComposer>
      <DepthOfField focusDistance={0} focalLength={0.12} bokehScale={2} height={480} />
      <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={300} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
   </EffectComposer>
  )
}

export default Effects;