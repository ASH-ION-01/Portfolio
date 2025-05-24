import React, { useEffect, useRef, useMemo } from 'react';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';

const Developer = ({ animationName = 'idle', ...props }) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/Humans/developer.glb');

    // Memoized animations
    const idle = useMemo(() => {
        const { animations } = useFBX('/models/Humans/idle.fbx');
        animations[0].name = 'idle';
        return animations[0];
    }, []);

    const salute = useMemo(() => {
        const { animations } = useFBX('/models/Humans/salute.fbx');
        animations[0].name = 'salute';
        return animations[0];
    }, []);

    const clapping = useMemo(() => {
        const { animations } = useFBX('/models/Humans/clapping.fbx');
        animations[0].name = 'clapping';
        return animations[0];
    }, []);

    const victory = useMemo(() => {
        const { animations } = useFBX('/models/Humans/victory.fbx');
        animations[0].name = 'victory';
        return animations[0];
    }, []);

    const { actions } = useAnimations([idle, salute, clapping, victory], group);

    useEffect(() => {
        const action = actions?.[animationName] || actions?.idle;
        if (action) {
            action.reset().fadeIn(0.5).play();
            return () => {
                action.fadeOut(0.5);
                action.stop();
            };
        }
    }, [actions, animationName]);

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Headwear.geometry}
                material={materials.Wolf3D_Headwear}
                skeleton={nodes.Wolf3D_Headwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
        </group>
    );
};

// Preload assets
useGLTF.preload('/models/Humans/developer.glb');
useFBX.preload('/models/Humans/idle.fbx');
useFBX.preload('/models/Humans/salute.fbx');
useFBX.preload('/models/Humans/clapping.fbx');
useFBX.preload('/models/Humans/victory.fbx');

export default Developer;
