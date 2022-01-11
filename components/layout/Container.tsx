import React, { Children } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

const Container: React.FC = ({children}) => {
    return (
        <LinearGradient colors={['#262626','#525252','#a3a3a3']}>
                <SafeAreaView>
                    {children}
                </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient:{
        flex:1
    },
    Container: {
        flex:1,
        marginHorizontal: 15,
    }
});
export default Container;