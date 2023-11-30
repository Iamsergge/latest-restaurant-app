import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PopUp from './components/popUp';

const LandingScreen = () => {
  const [visible, setVisible] = useState(false);
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [isSignupModalVisible, setSignupModalVisible] = useState(false);

  const openPopup = () => {
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };

  const showSignupModal = () => {
    setLoginModalVisible(false);
    setSignupModalVisible(true);
  };
  const showLoginModal = () => {
    setSignupModalVisible(false);
    setLoginModalVisible(true);
  };
  const showForgotPassModal = () => {
    setLoginModalVisible(false);
    setForgotPassModalVisible(true);
  };

   // Function to hide the confirmation modal
   const hideConfirmation = () => {
    setConfirmationVisible(false);
  };
  // Function to hide the Update/Edit modal
  const hideUpdateModal = () => {
    setUpdateModalVisible(false);
  };
  // Hide Login Modal
  const hideLoginModal = () => {
    setLoginModalVisible(false);
  };
  // Hide  Signin Modal
  const hideSignupModal = () => {
    setSignupModalVisible(false);
  };
  // Hide  Forgot/Reset Password  Modal
  const hideForgotPassModal = () => {
    setForgotPassModalVisible(false);
  };
  // Hide  Contact Modal
  const hideViewContactModal = () => {
    setIsViewContactModalVisible(false);
  };
  const showViewContactModal = (contact) => {
    setSelectedContact(contact);
    setUpdatedContactData({
      name: contact.name,
      phoneNumber: contact.phoneNumber,
      relationship: contact.relationship,
    });
    setIsViewContactModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('/assets/delivery-man 2.png')} style={styles.imageStyle} />
      </View>

      {/* Your other UI components can go here */}
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Quick Delivery at{'\n'}your Doorstep</Text>
        <Text style={styles.paragraph}>
          Home delivery and online reservation
          {'\n'}system for restaurants and cafes
        </Text>
        <TouchableOpacity style={styles.button} onPress={openPopup}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        
        {visible && <PopUp onClose={closePopup} />}
      </View>
    </View>
  );
};
export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 22,
    width: 414,
    height: 896,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F68989', // Pink-Red color
  },
  bottomContainer: {
    width: 344,
    height: 285,
    flexShrink: 0,
    borderRadius: 26,
    shadowColor: 'rgba(0, 0, 0, 0.34)',
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.34,
    shadowRadius: 17,
    elevation: 2,
    backgroundColor: '#FFF', // Background color for the bottom container
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  imageContainer: {
    width: 414,
    height: 595,
    flexShrink: 0,
    left: 50,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    right: 50,
    top: 5,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 31,
    fontWeight: '600',
    lineHeight: 34.5,
    color: '#4F4F4F',
  },
  paragraph: {
    width: 242,
    color: '#BDBDBD',
    fontFamily: 'Almarai',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 18.5,
    textAlign: 'center', // Center text within the container
  },
  button: {
    width: 210,
    height: 68,
    borderRadius: 40,
    backgroundColor: '#F68989', // Pink-Red color
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 0,
    elevation: 4,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    top: 5,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
  },
});