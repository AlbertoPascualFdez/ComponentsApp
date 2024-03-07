import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Card } from '../../components/ui/Card'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name:"",
        email:"",
        phone:""
    })

    const {colors} = useContext(ThemeContext);

return (
    <KeyboardAvoidingView
        behavior={Platform.OS==="ios" ? "padding":undefined}
        style={{backgroundColor:colors.background, height:"100%"}}
    >

        <ScrollView >

            <CustomView margin>
            
            <Title text='Text inputs' safe/>

            <Card>
                <TextInput
                    style={[globalStyles.input, {color:colors.text, borderColor:colors.primary}]}
                    placeholder='Nombre completo'
                    placeholderTextColor={colors.text}
                    autoCapitalize='words'
                    autoCorrect={false}
                    onChangeText={(value) => setForm({...form, name:value})}
                    />


                <TextInput
                    style={[globalStyles.input,{color:colors.text, borderColor:colors.primary}]}
                    placeholder='Correo'
                    placeholderTextColor={colors.text}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(value) => setForm({...form, email:value})}
                />

                <TextInput
                    style={[globalStyles.input,{color:colors.text, borderColor:colors.primary}]}
                    placeholderTextColor={colors.text}
                    placeholder='Telefono'
                    keyboardType='phone-pad'
                    onChangeText={(value) => setForm({...form, phone:value})}
                    />
            </Card>

                <View style={{height:10}}/>
                <Card>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
                    <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>


                </Card>

                <View style={{height:10}}/>


                <Card>
                    <TextInput
                       style={[globalStyles.input,{color:colors.text, borderColor:colors.primary}]}
                       placeholderTextColor={colors.text}
                        placeholder='Telefono'
                        keyboardType='phone-pad'
                        onChangeText={(value) => setForm({...form, phone:value})}
                        />
            </Card>


            </CustomView>

            <View style={{height:20, backgroundColor:colors.background}}/>
        </ScrollView>
    </KeyboardAvoidingView>
)
}