import { PowerGlitch } from 'powerglitch'
import { useEffect } from 'react';

const Glitch = () => {
    useEffect( () => {
        const applyGlitch = () => {
            PowerGlitch.glitch(
              '.glitch',
              {
                "playMode": "always",
                "createContainers": true,
                "hideOverflow": false,
                "timing": {
                  "duration": 3950,
                  "easing": "ease-in-out"
                },
                "glitchTimeSpan": {
                  "start": 0.5,
                  "end": 0.7
                },
                "shake": {
                  "velocity": 15,
                  "amplitudeX": 0.2,
                  "amplitudeY": 0.2
                },
                "slice": {
                  "count": 60,
                  "velocity": 60,
                  "minHeight": 0.01,
                  "maxHeight": 0.06,
                  "hueRotate": false
                },
                "pulse": false
              }
            )
          };
          const glitchTimeout = setTimeout(applyGlitch, 7000);
          return () => clearTimeout(glitchTimeout);
    })

    useEffect( () => {
      const applyGlitch2 = () => {
        PowerGlitch.glitch(
          '.glitch2',
          {
            "playMode": "always",
            "createContainers": true,
            "hideOverflow": true,
            "timing": {
              "duration": 3950,
            },
            "glitchTimeSpan": {
              "start": 0.21,
              "end": 0.59
            },
            "shake": {
              "velocity": 29,
              "amplitudeX": 0.2,
              "amplitudeY": 0.2
            },
            "slice": {
              "count": 13,
              "velocity": 18,
              "minHeight": 0.39,
              "maxHeight": 0.32,
              "hueRotate": true
            },
            "pulse": {
              "scale": 1
            }
          }
        )
      }
      const glitchTimeout = setTimeout(applyGlitch2, 9000);
      return () => clearTimeout(glitchTimeout);
    })

}

export default Glitch;