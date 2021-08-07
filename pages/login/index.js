import React from 'react';
import { 
  KeyboardView,
  Title,
  Container, 
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
            placeholder="E-mail"
          />
          <Input
            placeholder="Senha"
          />
          <ButtonSubmit>
            <TextSubmit>Entrar</TextSubmit>
          </ButtonSubmit>
        </Container>
    </KeyboardView>
  )
}
export default Login;