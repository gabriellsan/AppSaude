import { View, TouchableOpacity , Text} from "react-native"
import styles from "./style"

export function InitialScreen({navigation}){
    
    const goToLoginScreen = () => {
        navigation.navigate('Login')
    }

    const goToCadastroScreen = () => {
        navigation.navigate('Cadastro')
    }

    return (
      <View style={styles.main}>
        <View>
          <View style={styles.appName}>
            <Text style={styles.nameApp}>App Saúde</Text>
          </View>
        </View>
        <View style={styles.containerMain}>
          <View style={styles.textContainerMain}>
            <Text style={styles.textHello}>
              Olá!
            </Text>
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.loginButton} onPress={goToLoginScreen}><Text style={styles.textButtonLogin}>Login</Text></TouchableOpacity>
            <View style={styles.borderView}>
              <TouchableOpacity style={styles.signupButton} onPress={goToCadastroScreen}><Text style={styles.textButtonSignup}>Cadastrar-se</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
}