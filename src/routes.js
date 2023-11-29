import {createStackNavigator} from '@react-navigation/stack'
import { Login } from './pages/login';
import { Cadastro } from './pages/cadastro'; 
import {InitialScreen} from './pages/initialScreen'
import { Home } from './pages/home';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='InitialScreen' component={InitialScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name='Login' component={Login}  options={{ headerShown: false }}/>
            <Stack.Screen name='Cadastro' component={Cadastro}  options={{ headerShown: false }}/>
            <Stack.Screen name='Home' component={Home}  options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
} 