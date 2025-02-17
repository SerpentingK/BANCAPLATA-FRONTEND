import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import {useAlert} from '../context/AlertProvider'
import { COLORS, VALUES } from '../assets/theme';

export default function SignUpScreen({ navigation }) {
  const {showAlert} = useAlert();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={COLORS.primaryGradient}
        start={VALUES.backgroundStart}
        end={VALUES.backgroundEnd}
        locations={VALUES.locations}
        style={styles.container}
      >
        <TouchableOpacity style={styles.helpIcon} onPress={() => { }}>
          <Ionicons name="help-circle-outline" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>

        <Text style={styles.logo}>BANCAPLATA</Text>

        <Text style={styles.title}>Verificacion Telefono</Text>
        <Text style={styles.subtitle}>Hemos enviado un mensaje de texto al numero 333 333 3333</Text>
        <Text style={styles.subtitle}>Escribe el codigo para continuar:</Text>

        <TextInput
          style={styles.input}
          placeholder="Codigo"
          placeholderTextColor={COLORS.gray50}
          keyboardType="numeric"
          accessibilityLabel="Número de documento"
        />

        <TouchableOpacity style={styles.button} onPress={() => showAlert('success', 'Confirmacion completa', 'SignUpProfileData')}>
          <LinearGradient
            colors={[COLORS.gold300, COLORS.gold100, COLORS.gold300]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>CONTINUAR</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.registerText}>Volver a Iniciar Sesión</Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  helpIcon: {
    position: 'absolute',
    top: 60,
    left: 30,
    transform: [{ scale: 2 }],
    tintColor: COLORS.textPrimary,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.gold300,
    letterSpacing: 4,
    marginBottom: 70,
    fontFamily: 'AleoBold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 10,
    color: COLORS.textPrimary,
    opacity: 0.5,
    marginBottom: 20,
    textAlign: 'center',
    width: '70%'
  },
  input: {
    width: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 8,
    color: COLORS.textPrimary,
    marginBottom: 12,
    borderColor: COLORS.gray100,
    borderWidth: 2,
  },
  button: {
    margin: 20,
    width: '60%',
    alignSelf: 'center',
    minWidth: 200,
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonGradient: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.gray300,
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 10,
    fontSize: 10,
    color: COLORS.textPrimary,
    opacity: 0.5,
    marginBottom: 20,
  },
});
