import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home} from './pages/home';
import { Unidades } from './pages/unidades';
import { Settings } from './pages/settings';
// Importe suas telas

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Unidades' component={Unidades} />
        <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
