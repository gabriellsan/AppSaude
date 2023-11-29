import { useState } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView , Text, TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import styles from "./style"

export function Cadastro(){
  
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
    return (
      <View style={styles.main}>
          <View style={styles.back}>
            <TouchableOpacity onPress={back}><Ionicons name="arrow-back" size={30} color="#6064C9" /></TouchableOpacity>
          </View>
          <View style={styles.textMainContainer}>
            <Text style={styles.textMain}>Cadastre-se</Text>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.containerForm}>
              <View style={styles.containerFormInput}>
                <Text style={styles.formText}>CPF</Text>
                <TextInput style={styles.input}
                  onChangeText={handleInputCpfChange}
                  value={textCpf}
                  placeholder="CPF"/>
              </View>
              <View style={styles.containerFormInput}>
                <Text style={styles.formText}>Celular/Email</Text>
                <TextInput style={styles.input}
                  onChangeText={handleInputCpfChange}
                  value={textCpf}
                  placeholder="Celular/Email"/>
              </View>
              <View style={styles.containerFormInput}>
                <Text style={styles.formText}>Crie uma Senha</Text>
                <TextInput style={styles.input}
                  onChangeText={handleInputPasswordChange}
                  value={textPassword}
                  placeholder="Crie uma Senha"
                />
                <Ionicons style={styles.eye} name="eye" size={26} color="#8D9199" />
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonSignup}>
                  <Text style={styles.buttonSignupText}>
                    Cadastre-se
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomContainerText}>
                <Text style={styles.allTextPage}>Ou <Text style={styles.signupText}>Entre</Text> aqui</Text>
              </View>
            </View>
          </View>
      </View>
    )
}