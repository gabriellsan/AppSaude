import { useState } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView , Text, TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import styles from "./style";

export function Login({navigater}){

  const [textCpf, setTextCpf] = useState('');
  const [textPassword, setTextPassword] = useState('');

  const handleInputCpfChange = (inputText) => {
    setTextCpf(inputText);
  };

  const handleInputPasswordChange = (inputText) => {
    setTextPassword(inputText);
  };

  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  }

  const goToHomeScreen = () => {
    navigation.navigate('Home')
  } 

    return (
        <View style={styles.main}>
          <View style={styles.back}>
            <TouchableOpacity onPress={back}><Ionicons name="arrow-back" size={30} color="#FFF" /></TouchableOpacity>
          </View>
          <View style={styles.textMainContainer}>
            <Text style={styles.textMain}>Wellcome Again!</Text>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.containerForm}>
              <View style={styles.containerFormCpf}>
                <Text style={styles.formText}>CPF</Text>
                <TextInput style={styles.input}
                  onChangeText={handleInputCpfChange}
                  value={textCpf}
                  placeholder="CPF"/>
              </View>
              <View style={styles.containerFormPassword}>
                <Text style={styles.formText}>Senha</Text>
                <TextInput style={styles.input}
                  onChangeText={handleInputPasswordChange}
                  value={textPassword}
                  placeholder="Senha"
                />
                <Ionicons style={styles.eye} name="eye" size={26} color="#8D9199" />
                <View style={styles.containerRememberPassword}>
                  <Ionicons name="checkbox-sharp" size={15} color="#8D9199" />
                  <Text style={styles.allTextPage}>Lembrar Senha</Text>
                </View>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity onPress={goToHomeScreen} style={styles.buttonLogar}>
                  <Text style={styles.buttonLogarText}>
                    Entrar
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomContainerText}>
                <Text style={styles.allTextPage}>Ou <Text style={styles.signupText}>Cadastre-se</Text> aqui</Text>
                <Text style={styles.allTextPage}>Esqueceu sua Senha?</Text>
              </View>
            </View>
          </View>
        </View>
    )
}