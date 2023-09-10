import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '80%' }}
                    resizeMode='contain'
                />
                <Text style={styles.appName}>EXAME PEDAGOGO</Text>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Preparação é o caminho para a aprovação, e o nosso aplicativo é a chave do seu sucesso!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1E90FF'
    },
    containerLogo:{
        flex: 3,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    appName:{
        fontSize: 12,
        fontWeight: 'bold',
        bottom: '47%',
        color: '#fff'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#1E90FF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})