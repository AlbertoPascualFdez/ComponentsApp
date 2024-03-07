import { Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, Text, View, useWindowDimensions } from 'react-native'
import {colors, globalStyles } from '../../../config/theme/theme'
import { FlatList } from 'react-native-gesture-handler'
import { Button } from '../../components/ui/Button'
import { useContext, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../../context/ThemeContext'


export const SlidesScreen = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const flatListRef = useRef<FlatList>(null)
    const navigation = useNavigation();

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>{

        const {contentOffset, layoutMeasurement} = event.nativeEvent; 
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width)

        console.log(currentIndex)
        setCurrentSlideIndex(currentIndex >0 ? currentIndex: 0)
    }

    const scrollToSlide = (index:number) =>{
        if(!flatListRef.current) return;

        flatListRef.current.scrollToIndex({
            index: index,
            animated:true
        })
    }

    

return (
    <View style={{
        flex:1,
        backgroundColor:colors.background
    }}>
        <FlatList
            ref={flatListRef}
            data={items}
            keyExtractor={(item) => item.title}
            renderItem={({item}) => <SlideItem item={item}/>}
            horizontal
            pagingEnabled
            decelerationRate="fast"
            scrollEnabled={false}
            onScroll={(ev) => onScroll(ev)}
        />	

        {
            currentSlideIndex === items.length -1 ? 
            <Button 
            text='Finalizar'
            onPress={() => navigation.goBack()}
            style={{position:"absolute", bottom:60, right:30, width:100}}
            
            />
            : <Button 
            text='Siguiente'
            onPress={() => scrollToSlide(currentSlideIndex +1)}
            style={{position:"absolute", bottom:60, right:30, width:100}}
            
            />
        }

       
    </View>
)
}


interface SlideItemProps {
    item:Slide

}

const SlideItem = ({item}:SlideItemProps) =>{
    const {width} = useWindowDimensions()

    const {colors} = useContext(ThemeContext);

    return(
        <View
            style={{
                flex:1,
                backgroundColor:colors.background,
                borderRadius: 5,
                padding:40,
                justifyContent:"center",
                width:width
            }}
            >
                <Image source={item.img} style={{
                    width: width *0.7,
                    height: width* 0.7,
                    resizeMode: "center",
                    alignSelf: "center"
                }}/>

            <Text style={[globalStyles.title, {color:colors.primary}]}>{item.title}</Text>
            <Text style={{color:colors.text, marginTop:20}}>{item.desc}</Text>
        </View>

    )
}


interface Slide{
    title:string,
    desc:string,
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title:"Titulo 1",
        desc:"Minim excepteur ut dolore quis ut amet laborum eu dolore sit nisi nisi sint dolor.",
        img: require("../../assets/slide-1.png")
    },
    {
        title:"Titulo 2",
        desc:"Dolore eiusmod duis esse ex ex ullamco consequat do adipisicing.",
        img: require("../../assets/slide-2.png")
    },
    {
        title:"Titulo 3",
        desc:"Incididunt fugiat mollit consequat occaecat ullamco nostrud.",
        img: require("../../assets/slide-3.png")
    }
]