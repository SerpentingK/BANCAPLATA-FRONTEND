import { 
  View, Text, TextInput, TouchableOpacity, 
  StyleSheet, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, VALUES } from '../assets/theme';

export default function SignUpScreen({ navigation }) {
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

        <Text style={styles.title}>Registro de Usuario</Text>
        <Text style={styles.subtitle}>Ingresa tu documento para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="Número de documento"
          placeholderTextColor={COLORS.gray100}
          keyboardType="numeric"
          accessibilityLabel="Número de documento"
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpUserData')}>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textPrimary,
    opacity: 0.5,
    marginBottom: 20,
  },
  input: {
    width: '80%',
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
    fontSize: 12,
    color: COLORS.textPrimary,
    opacity: 0.5,
    marginBottom: 20,
  },
});
