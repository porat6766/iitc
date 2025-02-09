import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Recepies from "./pages/Recepies"
import Header from './Components/Header';
import { View } from 'react-native';
import tw from './utils/tailwind';
import { UserProvider } from './context/UserContext';

const Stack = createStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Home: '/',
        Login: 'login',
        Signup: 'signup',
      }
    }
  };

  return (
    <NavigationContainer linking={linking}>
      <View style={tw`w-full`}>
        <UserProvider>
          <Header />
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home">
              {props => <Home {...props} isLogin={isLogin} setIsLogin={setIsLogin} />}
            </Stack.Screen>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Recepies" component={Recepies} />
          </Stack.Navigator>
        </UserProvider >
      </View>
    </NavigationContainer>
  );
}
