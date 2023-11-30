import React from 'react';
import LandingScreen from '../landingScreen';
import {
  StyleSheet,
  View,
  Modal,
} from 'react-native';

const PopUp = ({ visible, dismiss, showSignupModal, showForgotPassModal }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={dismiss}
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalCard}>
        
          <LandingScreen
            modalVisible={visible}
            closeModal={dismiss}
            openRegister={showSignupModal}
            onForgotPass={showForgotPassModal}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  modalCard: {
    width: "100%", // Fill (393px)
    padding: 30,
    borderRadius: 20,
    backgroundColor: "#002E15",
    marginBottom: 20,
  },
  // Other styles...
});
