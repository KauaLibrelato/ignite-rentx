import React from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "styled-components";
// import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
// import { PasswordInput } from "../../components/PasswordInput";

import { Container, Header, Subtitle, Title, Content, Footer } from "./styles";

export function Login() {
  const theme = useTheme();
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Header>
            <Title>Estamos{`\n`}quase lá.</Title>
            <Subtitle>
              Faça seu login para começar{`\n`}uma experiência incrível.
            </Subtitle>
          </Header>

          <Content>
            <Input
              placeholder="Email"
              iconName={"mail"}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <PasswordInput placeholder="Senha" iconName={"lock"} />
          </Content>

          <Footer>
            <Button
              title={"Login"}
              onPress={() => {}}
              disabled={false}
              loading={false}
            />
            <Button
              title={"Criar conta Gratuita"}
              onPress={() => {}}
              disabled={false}
              loading={false}
              light
              color={theme.colors.background_secondary}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
