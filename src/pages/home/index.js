import { View, TouchableOpacity , Text} from "react-native"
import styles from "./style"
import { Image } from 'expo-image';

export function Home(){

    return (
      <View style={styles.all}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Inicio</Text>
        </View>
        <View style={styles.main}>
            <View style={styles.containerCards}>
                <View style={styles.card}>
                    <View style={styles.mainCard1}>
                        <Image
                          style={styles.imageCard}
                          source={require('../../imgs/maki_doctor.png')}
                        />
                    </View>
                    <View style={styles.bottomCard1}>
                        <Text style={styles.bottomMainText}>Marcar Consulta</Text>
                        <Text style={styles.bottomSecondaryText}>Marque uma nova consulta</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.mainCard2}>
                        <Image
                          style={styles.imageCard}
                          source={require('../../imgs/doctor-regular.png')}
                        />
                    </View>
                    <View style={styles.bottomCard1}>
                        <Text style={styles.bottomMainText}>Marcar Exame</Text>
                        <Text style={styles.bottomSecondaryText}>Marque um novo exame</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerCards}>
                <View style={styles.card}>
                    <View style={styles.mainCard2}>
                        <Image
                          style={styles.imageCard}
                          source={require('../../imgs/calendar-outline.png')}
                        />
                    </View>
                    <View style={styles.bottomCard1}>
                        <Text style={styles.bottomMainText}>Agendamentos</Text>
                        <Text style={styles.bottomSecondaryText}>Seus atendimentos futuros</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.mainCard3}>
                        <Image
                          style={styles.imageCard}
                          source={require('../../imgs/outline-history.png')}
                        />
                    </View>
                    <View style={styles.bottomCard1}>
                        <Text style={styles.bottomMainText}>Histórico</Text>
                        <Text style={styles.bottomSecondaryText}>Histórico de atendimentos</Text>
                    </View>
                </View>
            </View>
        </View>
      </View>
    )
}