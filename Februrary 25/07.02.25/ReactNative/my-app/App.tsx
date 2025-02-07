import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./components/Login";
import LandingPage from "./components/LandingPage";

const Stack = createStackNavigator();

const App = () => {

  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        LandingPage: "landing",
        LoginPage: "login"
      }
    }
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="landing"  // screenOptions={{ headerShown: false }}  
      >
        <Stack.Screen name="landing" component={LandingPage} />
        <Stack.Screen options={{ title: 'My Custom Login Title' }}
          name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
