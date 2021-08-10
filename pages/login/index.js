import React from 'react';
import { 
  KeyboardView,
  Container, 
  Title,
  Input, 
  ButtonSubmit,
  TextSubmit, 
} from './styles';
import Header from '../../components/Header';
 

function Login(){
  return(
    <KeyboardView>
      <Header/>
      <Container>
        <Title>Login</Title>
        <Input 
        placeholderTextColor="#fff" 
        placeholder="E-mail"
        />
        <Input 
        placeholderTextColor="#fff" 
        placeholder="Senha" 
        secureTextEntry={true}
        />
        <ButtonSubmit>
          <TextSubmit>Entrar</TextSubmit>
        </ButtonSubmit>
      </Container>
   </KeyboardView>
  )
}
export default Login;