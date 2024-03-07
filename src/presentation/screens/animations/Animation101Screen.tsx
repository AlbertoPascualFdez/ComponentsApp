import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { useContext, useRef } from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import { CustomView } from '../../components/ui/CustomView';
import { ThemeContext } from '../../context/ThemeContext';


export const Animation101Screen = () => {

    const{animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition} = useAnimation();
    const {colors} = useContext(ThemeContext);

return (
    <CustomView style={styles.container}>
        <Animated.View style={[
            styles.purpleBox,
            {
                opacity:animatedOpacity,
                backgroundColor:colors.primary,
                transform:[{
                    translateY: animatedTop
                }]
            }
            ]}/>

        <Pressable onPress={() => {
            fadeIn({});
            startMovingTopPosition({initialPosition:-100, easing:Easing.elastic(1), duration:750});
        }} style={{marginTop:10}}>
            <Text style={{color:colors.text}}>Fade in</Text>
        </Pressable>	

        <Pressable onPress={() => fadeOut({})} style={{marginTop:10}}>
            <Text style={{color:colors.text}}>Fade out</Text>
        </Pressable>
    </CustomView>
)
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    purpleBox:{
        //backgroundColor: "#2b1cf7",//colors.primary,
        width:150,
        height:150
    }
});