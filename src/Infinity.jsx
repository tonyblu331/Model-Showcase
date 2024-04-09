/* eslint-disable no-shadow-restricted-names */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Infinity(props) {
  const { nodes, materials } = useGLTF("/Infinity.glb");
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface2.geometry}
              material={materials.M_CarcasaLED1}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Columna.geometry}
            material={materials.M_Metal_Galvanized1}
          />
          <mesh
            geometry={nodes.Cristal.geometry}
            material={materials.M_Cristal1}
          />
          <mesh
            receiveShadow
            geometry={nodes.Logo_Decals.geometry}
            material={materials.M_Staria1}
          />
          <mesh
            receiveShadow
            geometry={nodes.Matiz_Luminaria.geometry}
            material={materials.M_Columna_03}
          />
          <group>
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface4.geometry}
                material={materials.M_Frame_Luminaria1}
              />
            </group>
            <mesh
              geometry={nodes.Panel_Solar001.geometry}
              material={materials.M_PanelSolar1}
            />
            <group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Eje_Rotador.geometry}
                material={materials.M_Columna_03}
              />
              <mesh
                receiveShadow
                geometry={nodes.Tornillos_Rot.geometry}
                material={materials.M_Tornillos1}
              />
            </group>
            <mesh
              receiveShadow
              geometry={nodes.Tornillos_Panel_Solar.geometry}
              material={materials.M_Tornillos1}
            />
          </group>
          <mesh
            receiveShadow
            geometry={nodes.Tornillos.geometry}
            material={materials.M_Tornillos1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Infinity.glb");
