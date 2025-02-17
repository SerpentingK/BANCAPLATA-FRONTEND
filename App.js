import { useFonts, Aleo_700Bold } from "@expo-google-fonts/aleo";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AlertProvider } from "./context/AlertProvider"; // Importa el Provider

import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignUpUserData from "./screens/SignUpUserData";
import SignUpPhoneConfirm from "./screens/SignUpPhoneConfirm";
import SignUpProfileData from "./screens/SignUpProfileData"
import HomeScreen from "./screens/HomeScreen"

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Aleo: Aleo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AlertProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignUpUserData" component={SignUpUserData} />
          <Stack.Screen name="SignUpPhoneConfirm" component={SignUpPhoneConfirm} />
          <Stack.Screen name="SignUpProfileData" component={SignUpProfileData} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </AlertProvider>
    </NavigationContainer>
  );
}
