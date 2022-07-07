import React, {useEffect, useState} from "react";
import { EffectComposer, DepthOfField, Bloom, Vignette, GodRays } from '@react-three/postprocessing'
import { useThree } from "react-three-fiber";


const Effects = () => {
  const [lights, setLights] = useState(null);
  const {scene} = useThree()

  useEffect(()=>{
    if(scene.lights && scene.lights.length === 3) setLights(scene.lights)
  }, [scene.lights])


  return (

      lights ?
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.12} bokehScale={2} height={480} />
        {
          lights.map((light, index)=> {
            return (
              <GodRays
                sun={light.current}
                key={index}
                density={0.96}
              />
            )
          })
        }
    </EffectComposer>
    :
        null


  )
}

export default Effects;