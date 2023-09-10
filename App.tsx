import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

interface Usuario {
  login: string
  senha: string
}

class ContaUsuario {
  login: string
  senha: string

  constructor(login: string, senha: string) {
    this.login = login
    this.senha = senha
  }

  validarLogin(login: string, senha: string): boolean {
    return (this.login === login && this.senha === senha)
  }
}

const conta_admin: Usuario = new ContaUsuario("admin", "1234")

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1E90FF" barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}