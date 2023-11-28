import { useState } from "react";
import { View, TouchableOpacity , Text, TextInput, Tex} from "react-native"
import styles from "./style"

export function Login(){

  const [text, setText] = useState('');

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

    return (
      <View style={styles.main}>
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
                onChangeText={handleInputChange}
                value={text}
                placeholder="CPF"/>
            </View>
            <View style={styles.containerFormPassword}>
              <Text style={styles.formText}>Senha</Text>
              <TextInput style={styles.input}
                onChangeText={handleInputChange}
                value={text}
                placeholder="Senha"/>
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
      </View>
    )
}