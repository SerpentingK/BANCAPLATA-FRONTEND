import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, 
  StyleSheet, Keyboard, TouchableWithoutFeedback, Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, VALUES } from '../assets/theme';
import { format } from 'date-fns';

let DatePicker;
if (Platform.OS === 'web') {
  DatePicker = require('react-datepicker').default;
  require('react-datepicker/dist/react-datepicker.css');
}

export default function SignUpUserData({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    if (Platform.OS !== 'web') {
      setShowDatePicker(false);
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
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
        <Text style={styles.title}>Datos del usuario</Text>

        <TextInput style={styles.input} placeholder="Nombre Completo" placeholderTextColor={COLORS.gray50} />
        <TouchableOpacity style={styles.input} onPress={() => { /* Lógica de carga de imagen */ }}>
          <Text style={styles.placeholderText}>Foto Frontal Documento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input} onPress={() => { /* Lógica de carga de imagen */ }}>
          <Text style={styles.placeholderText}>Foto Posterior Documento</Text>
        </TouchableOpacity>
        <View style={styles.dateInputView}>
            <Text style={styles.dateInputText}>Fecha de expedicion:</Text>
            <DateTimePicker
            style={styles.dateInput}
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
        />
        </View>
        
        <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" placeholderTextColor={COLORS.gray50} />
        <TextInput style={styles.input} placeholder="Dirección" placeholderTextColor={COLORS.gray50} />
        <TextInput style={styles.input} placeholder="Correo Electrónico" keyboardType="email-address" placeholderTextColor={COLORS.gray50} />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpPhoneConfirm')}>
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
  dateInputView: {
    marginBottom: 12,
    width: '70%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: COLORS.gray100,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    gap: 1
  },
  dateInputText: {
    color: COLORS.gray50,
  },
  dateInput: {
    flex: 2,
    fontWeight: 'bold',
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    alignSelf: 'flex-start',
    marginLeft: 8,
    marginTop: 0,
    marginBottom: 0,
  }
});
