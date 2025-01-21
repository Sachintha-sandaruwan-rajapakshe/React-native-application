import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Login} from './components/Login';
import {Home} from './components/Home';
import {Register} from './components/Register';
import {CounterProvider} from './components/CounterProvider';
import {AddClient} from './components/AddClient';
const Tab = createBottomTabNavigator()


const Stack = createNativeStackNavigator();
const App=()=>{
  return(
    <CounterProvider>
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name='TabNav' component={TabNav} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </CounterProvider>
  )
}

export default App;


export function TabNav() {
  return (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="AddClient" component={AddClient} />
  </Tab.Navigator>
  );
}