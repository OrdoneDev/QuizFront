import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function SingIn() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [errorLogin, setErrorLogin] = useState(null)
    const [errorSenha, setErrorSenha] = useState(null)
    const navigation = useNavigation()

    function validarInputLogin(text: string) {
        setLogin(text)
        exibeErrorLogin(text)
    }

    function validarInputSenha(text: string) {
        setSenha(text)
        exibeErrorSenha(text)
    }

    function exibeErrorLogin(text: string) {
        if(text === '')
            setErrorLogin('Preencha o campo de login')
        else
            setErrorLogin(null)
    }

    function exibeErrorSenha(text: string) {
        if(text === '')
            setErrorSenha('Preencha o campo de senha')
        else
            setErrorSenha(null)
    }

    function validarInputs() {
        exibeErrorLogin(login)
        exibeErrorSenha(senha)

        return (login !== '' && senha !== '')
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    placeholder="Digite o seu login..."
                    style={styles.input}
                    value={login}
                    onChangeText={validarInputLogin}
                />
                <Text style={styles.errorMessage}>{errorLogin}</Text>

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite a sua senha..."
                    secureTextEntry
                    style={styles.input}
                    value={senha}
                    onChangeText={validarInputSenha}
                />
                <Text style={styles.errorMessage}>{errorSenha}</Text>

                <TouchableOpacity style={styles.button} onPress={ () => {
                if(validarInputs())
                    navigation.navigate('Home')
                }}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
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
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 10,
    },
    errorMessage: {
      color: 'red',
      fontSize: 14
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        fontSize: 16
    },
    button: {
        backgroundColor: '#1E90FF',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    }
})