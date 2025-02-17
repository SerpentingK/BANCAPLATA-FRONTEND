import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, 
  StyleSheet, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, VALUES } from '../assets/theme';
import { useAlert } from '../context/AlertProvider';

export default function SignUpUserData({ navigation }) {
  const { showAlert } = useAlert();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleContinue = () => {
    if (!username.trim()) {
      showAlert('error', 'El nombre de usuario es obligatorio.');
      return;
    }

    if (!password.trim()) {
      showAlert('error', 'La contraseña no puede estar vacía.');
      return;
    }

    if (password !== confirmPassword) {
      showAlert('warning', 'Las contraseñas no coinciden.');
      return;
    }

    showAlert('success', 'Usuario creado con exito.', 'HomeScreen' )
  };

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
        <Text style={styles.title}>Datos del perfil</Text>

        <TouchableOpacity style={styles.input} onPress={() => { /* Lógica de carga de imagen */ }}>
          <Text style={styles.placeholderText}>Foto de Perfil</Text>
        </TouchableOpacity>
        
        <TextInput 
          style={styles.input} 
          placeholder="Nombre de usuario"  
          placeholderTextColor={COLORS.gray50} 
          value={username}
          onChangeText={setUsername}
        />
        
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña" 
          placeholderTextColor={COLORS.gray50} 
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        <TextInput 
          style={styles.input} 
          placeholder="Confirmar contraseña" 
          placeholderTextColor={COLORS.gray50} 
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <LinearGradient colors={[COLORS.gold300, COLORS.gold100, COLORS.gold300]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.buttonGradient}>
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
    marginTop: 50,
    marginBottom: 30,
    fontFamily: 'AleoBold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 20,
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
  placeholderText: {
    color: COLORS.gray50,
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
