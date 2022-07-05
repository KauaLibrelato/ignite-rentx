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
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import {
  Container,
  Content,
  Description,
  Footer,
  Subtitle,
  Title,
  HeaderLow,
  HeaderTop,
  Steps,
} from "./styles";
import * as Yup from "yup";

export function SignUpFirstStep() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute();

  function handleBack() {
    navigation.goBack();
  }

  async function handleSecondStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatória"),
        email: Yup.string()
          .email("Email inválido")
          .required("Email é obrigatório"),
        name: Yup.string().required("Nome é obrigatório"),
      });
      const data = { name, email, driverLicense };
      await schema.validate(data);
      navigation.navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Opa", error.message);
      }
    }
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
              <Bullet active />
              <Bullet />
            </Steps>
          </HeaderTop>
          <HeaderLow>
            <Title>Crie sua{`\n`}conta</Title>
            <Subtitle>Faça seu cadastro de{`\n`}forma rápida e fácil.</Subtitle>
          </HeaderLow>

          <Content>
            <Description>1.Dados</Description>
            <Input
              placeholder="Nome"
              iconName={"user"}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setName}
              value={name}
            />

            <Input
              placeholder="Email"
              iconName={"mail"}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <Input
              placeholder="CNH"
              iconName={"credit-card"}
              keyboardType="numeric"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setDriverLicense}
              value={driverLicense}
            />
          </Content>

          <Footer>
            <Button
              title="Próximo"
              onPress={handleSecondStep}
              disabled={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
