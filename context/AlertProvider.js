import React, { createContext, useState, useContext, useRef } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../assets/theme";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ visible: false, type: "", message: "", navigateTo: null });
  const navigation = useNavigation();

  const showAlert = (type, message, navigateTo = null) => {
    setAlert({ visible: true, type, message, navigateTo });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <AlertPopup alert={alert} setAlert={setAlert} navigation={navigation} />
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);

const AlertPopup = ({ alert, setAlert, navigation }) => {
  const slideAnim = useRef(new Animated.Value(-200)).current;

  // Animación de entrada
  React.useEffect(() => {
    if (alert.visible) {
      Animated.timing(slideAnim, {
        toValue: 0, // Baja a su posición normal
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [alert.visible]);

  const hideAlert = () => {
    Animated.timing(slideAnim, {
      toValue: -500, // Sube antes de cerrar
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setAlert({ visible: false, type: "", message: "", navigateTo: null });
      if (alert.navigateTo) {
        navigation.navigate(alert.navigateTo);
      }
    });
  };

  if (!alert.visible) return null;

  const getAlertStyle = () => {
    switch (alert.type) {
      case "success":
        return { icon: <AntDesign name="checkcircle" size={50} color="#2ECC71" /> };
      case "warning":
        return { icon: <Feather name="alert-circle" size={50} color="#F1C40F" /> };
      case "error":
        return { icon: <Feather name="x-circle" size={50} color="#E74C3C" /> };
      default:
        return { icon: <Feather name="info" size={50} color="#3498DB" /> };
    }
  };

  const { icon } = getAlertStyle();

  return (
    <Modal transparent visible={alert.visible} animationType="none">
      <View style={styles.overlay}>
        <Animated.View style={[styles.alertBox, { transform: [{ translateY: slideAnim }] }]}>
          {icon}
          <Text style={styles.message}>{alert.message}</Text>
          <TouchableOpacity onPress={hideAlert} style={styles.closeButton}>
            <Text style={styles.buttonText}>CONTINUAR</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.53)",
  },
  alertBox: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    minWidth: 280,
    maxWidth: "80%",
    minHeight: 120,
    maxHeight: "50%",
    backgroundColor: "#0A0A0A",
    borderColor: COLORS.gold300,
    borderWidth: 2,
    transform: {translateY: -500}
  },
  message: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: COLORS.gold300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#0A0A0A",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AlertPopup;
