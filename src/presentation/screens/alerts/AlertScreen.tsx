import { Alert, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/ui/Button'
import prompt from 'react-native-prompt-android';
import { showPromt } from '../../../config/adapters/prompt.adapter'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const AlertScreen = () => {
  const {currentTheme} = useContext(ThemeContext);

    const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: "destructive"

      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {
        userInterfaceStyle:currentTheme ==="dark"? "dark" :"light"
    }
    );

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
     
    ],
    {
        cancelable:true,
        onDismiss(){
            console.log("Cerrado por pulsar fuera")
        }
    }
    );


    
     const onShowPromt = () =>{
        showPromt({
          title:"Introduce contraseña",
          subtitle:"Que sea segura por favor",
          actions:[
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text:"Aceptar",onPress:()=> console.log("Aceptado")}
          ],
          placeholder:"Contraseña"
        })
      /*prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        ],
        {
            type: 'secure-text',
            cancelable: false,
            defaultValue: 'test',
            placeholder: 'placeholder'
        }
    )
    //no funciona en android
      Alert.prompt(
        "Correo electronico",
        "eerf sffds fg dsfe fdg hgfg",
        (valor:string) => console.log({valor})
        
      ) */
    } 

    


return (
    <CustomView style={globalStyles.globalMargin}>
        <Title safe text='Alertas'/>		
        <Button text='Alerta - 2 Botones' onPress={() => createTwoButtonAlert()}/>
        <View style={{height:10}}/>
        <Button text='Alerta - 3 Botones' onPress={() => createThreeButtonAlert()}/>
        <View style={{height:10}}/>
        <Button text='Prompt - Input' onPress={() => onShowPromt()}/>
    </CustomView>
)
}