import  {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler';
import StackNavigator from './src/stackNavigator';
import TabNavigator from './src/tabNavigator';

export default function App() {
    return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    );
}

export function Initial() {
    return (
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    );
}


