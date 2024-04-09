/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import "./App.css";
import {
  Autofocus,
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { Stage, PresentationControls, Environment } from "@react-three/drei";
import { BlendFunction } from "postprocessing";
import { Infinity } from "./Infinity";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 2, 5], fov: 19 }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#353535"]} />
        <fog attach="fog" args={["#d4c9bf", 0, 150]} />
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[2.5, 8, 5]}
          intensity={3.14}
          shadow-camera-far={20}
          castShadow
        />
        <PresentationControls
          global
          speed={0.8}
          zoom={0.8}
          polar={[0, Math.PI / 3]}
        >
          <Stage
            preset="soft"
            intensity={0.5}
            shadows={{
              type: "accumulative",
              color: "#353535",
              colorBlend: 2,
              opacity: 1,
            }}
          >
            <Environment files="/envmap.hdr" />
            <Infinity rotation={[0, Math.PI, 0]} castShadow receiveShadow />
          </Stage>
        </PresentationControls>
        <EffectComposer>
          <Autofocus />
          <Bloom
            blendFunction={BlendFunction.ADD}
            intensity={0.4}
            luminanceThreshold={0.07}
            luminanceSmoothing={0.2}
            height={480}
          />
          <ToneMapping
            blendFunction={BlendFunction.NORMAL}
            adaptive={true}
            resolution={256}
            middleGrey={0.7}
            maxLuminance={10.0}
            averageLuminance={1.0}
            adaptationRate={0.5}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;