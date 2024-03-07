import prompt from "react-native-prompt-android"



interface Options{
    title:string,
    subtitle?:string,
    actions?: Action[],
    type?: 'default'|    'plain-text'|    'secure-text',
    cancelable?:boolean,
    deafaultValue?:string,
    placeholder?: string
}

interface Action{
    text:string,
    onPress: () => void,
    style?: "default" | "cancel" | "destructive"
}

 //no funciona en android
export const showPromt = ({title, subtitle="", actions = [], type="plain-text", cancelable=false, deafaultValue="", placeholder=""}:Options) =>{
    prompt(
      title,
      subtitle,
      actions,
     /*  [
        //actions.map((action) => {return {text:action.actionName, onPress: action.action}})),
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ] */
      {
          type: type,
          cancelable: cancelable,
          defaultValue: deafaultValue,
          placeholder: placeholder
      }
  )
}