import { useFonts, Aleo_700Bold } from '@expo-google-fonts/aleo';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignUpUserData from './screens/SignUpUserData';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Aleo: Aleo_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpUserData" component={SignUpUserData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
