import { createStackNavigator } from '@react-navigation/stack';
import { InitialScreen } from './pages/initialScreen';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { Cadastro } from './pages/cadastro';
// Importe suas telas

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='InitialScreen' component={InitialScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name='Login' component={Login}  options={{ headerShown: false }}/>
      <Stack.Screen name='Cadastro' component={Cadastro}  options={{ headerShown: false }}/>
      <Stack.Screen name='Home' component={Home}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
