import React, { useEffect, useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import * as Yup from "yup";
import { Container, Header, Subtitle, Title, Content, Footer } from "./styles";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

export function SignIn() {
  const route = useRoute();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleCreateNavigation() {
    navigation.navigate("SignUpFirstStep");
  }

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email Obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().required("A senha é obrigatória"),
      });

      await schema.validate({ email, password });
      signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert("Erro na Autenticação", "Erro ao tentar logar");
      }
    }
  }

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
              Faça seu SignIn para começar{`\n`}uma experiência incrível.
            </Subtitle>
          </Header>

          <Content>
            <Input
              placeholder="Email"
              iconName={"mail"}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              placeholder="Senha"
              iconName={"lock"}
              onChangeText={setPassword}
              value={password}
            />
          </Content>

          <Footer>
            <Button
              title={"Login"}
              onPress={handleSignIn}
              disabled={false}
              loading={false}
            />
            <Button
              title={"Criar conta Gratuita"}
              onPress={handleCreateNavigation}
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
