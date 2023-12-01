import { View, TouchableOpacity , Text} from "react-native"
import styles from './style'
import { useNavigation } from '@react-navigation/native';

export function Unidades(){

  const navigation = useNavigation();

    const goHome = () => {
        navigation.navigate('Home')
    }

    const goUnidades = () => {
        navigation.navigate('Unidades')
    }

    const goSettings = () => {
        navigation.navigate('Settings')
    }


    return (
      <View style={styles.all}>
        <View>
            <Text>wellcome!</Text>
        </View>
        <View style={styles.bottomNavigation}>
            <View style={styles.cardIconsBottom}>
                <TouchableOpacity onPress={goHome} style={styles.buttonsBottom}>
                    <Ionicons  name="home" size={26} color="#411D6F" />
                    <Text style={styles.textButtonsBottom}>
                        Inicio
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardIconsBottom}>
                <TouchableOpacity onPress={goUnidades} style={styles.buttonsBottom}>
                    <Ionicons  name="location" size={26} color="#411D6F" />
                    <Text style={styles.textButtonsBottom}>    
                        Unidades
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardIconsBottom}>
                <TouchableOpacity onPress={goSettings} style={styles.buttonsBottom}>
                    <Ionicons  name="settings" size={26} color="#411D6F" />
                    <Text style={styles.textButtonsBottom}>    
                        Settings
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
}