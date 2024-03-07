import { ActivityIndicator, Image, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../../../config/theme/theme'
import { FadeInImage } from '../../components/ui/FadeInImage'


export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([1,2,3,4,5])

    const loadMore = () =>{
        console.log("load more")

        const newArray = Array.from({length:5}, (_,i) => numbers.length + i)

        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
            
        }, 3000);
    }


return (
    <View style={{backgroundColor:"black"}}>
        <FlatList
            data={numbers}
            renderItem={({item}) => <ListItem number={item}/>}
            onEndReachedThreshold={0.6}
            onEndReached={ loadMore}
            /* keyExtractor={(item) => item.toString()} */

            ListFooterComponent={ () =>(
                <View style={{height:150, justifyContent:"center"}}>
                    <ActivityIndicator size={40} color={colors.primary}/>
                </View>
            )}
        
        />
    </View>
)
}

interface ListItemProps{
    number:number
}

const ListItem = ({number}:ListItemProps) =>{

    return (
        <FadeInImage uri={`https://picsum.photos/id/${number}/500/400`} style={{
            height:400,
            width:"100%"
        }}/>
    )

     /* < Text
            style={{
                height:300,
                backgroundColor:colors.primary,
                color:"white", fontSize:50
            }}>{number}</Text> */
}