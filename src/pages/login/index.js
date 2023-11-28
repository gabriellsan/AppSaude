import { useState } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView , Text, TextInput} from "react-native"
import styles from "./style"

export function Login(){

  const [textCpf, setTextCpf] = useState('');
  const [textPassword, setTextPassword] = useState('');

  const handleInputCpfChange = (inputText) => {
    setTextCpf(inputText);
  };
  
  const handleInputPasswordChange = (inputText) => {
    setTextPassword(inputText);
  };

    return (
      <KeyboardAvoidingView contentContainerStyle={styles.main} behavior="position" enabled>
          <View style={styles.back}>
            <Text>Voltar</Text>
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
              </View>
              <View style={styles.containerRememberPassword}>
                <Text style={styles.allTextPage}>Lembrar Senha</Text>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonLogar}>
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
      </KeyboardAvoidingView>
    )
}