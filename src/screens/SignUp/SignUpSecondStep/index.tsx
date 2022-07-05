import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { PasswordInput } from "../../../components/PasswordInput";

import {
  Container,
  Content,
  Description,
  Footer,
  HeaderLow,
  HeaderTop,
  Steps,
  Subtitle,
  Title,
} from "./styles";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme();
  const route = useRoute();

  const { user } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmação");
    }
    if (password != passwordConfirm) {
      return Alert.alert("A senhas não conferem");
    }
    navigation.navigate("Confirmation", {
      nextScreenRoute: "Login",
      title: "Conta Criada",
      message: "",
    });
  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <HeaderTop>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </HeaderTop>
          <HeaderLow>
            <Title>Crie sua{`\n`}conta</Title>
            <Subtitle>Faça seu cadastro de{`\n`}forma rápida e fácil.</Subtitle>
          </HeaderLow>

          <Content>
            <Description>2.Senha</Description>
            <PasswordInput
              placeholder="Senha"
              iconName={"lock"}
              onChangeText={setPassword}
              value={password}
            />

            <PasswordInput
              placeholder="Repetir a senha"
              iconName={"lock"}
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Content>

          <Footer>
            <Button
              title="Cadastrar"
              color={theme.colors.success}
              onPress={handleRegister}
              disabled={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
