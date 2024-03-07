import 'react-native-gesture-handler';
import { Text, View } from 'react-native'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigator';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';

//forma 1 de poder pasarle el theme al navigationcontainer
/* const AppNavigation = ({children}:PropsWithChildren) =>{
    const {isDark} = useContext(ThemeContext);
    return (
        
        <NavigationContainer theme={isDark? DarkTheme:DefaultTheme}>
           {children}
        </NavigationContainer>
    )
}

const AppTheme = ({children}:PropsWithChildren) =>{
    
    return(
        <ThemeProvider>
            <AppNavigation>{children}</AppNavigation>
        </ThemeProvider>
    )
}


export const ComponentsApp = () => {
return (
    <AppTheme>
        <Navigator/>
    </AppTheme>
)
} */


//forma 2 de pasarle el theme al navigation container

export const ComponentsApp = () => {
return (
    <ThemeProvider>
        <Navigator/>
    </ThemeProvider>
)
}