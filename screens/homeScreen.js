import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-web';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Image source={require('/assets/Menu.png')} style={styles.menuImage} />
        <View style={styles.searchContainer}>
          <Image source={require('/assets/Ellipse 1.png')} style={styles.searchImage} />
          <Image source={require('/assets/Search.png')} style={styles.searchIcon}/>
        </View>
      </View>
      <Text style={styles.heading1}>Hi Serge</Text>
      <Text style={styles.heading2}>Find your Favorite Restaurant</Text>
      <View style={styles.topCard}>
        <Image source={require('/assets/Hamburger.png')} style={styles.burger}/>
        <Image source={require('/assets/Pizza.png')} style={styles.italian} />
        <Image source={require('/assets/Sushi.png')} style={styles.sushi} />
        <Image source={require('/assets/Scorpion.png')} style={styles.seaFood}  /> 
      </View>
      <Text style={styles.heading3}>Popular</Text>
      <View style={styles.rowContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>Panaroties</Text>
          <Image source={require('/assets/Emoji.png')} style={styles.emoji}/> 
          <Text style={styles.topText}>44 calories</Text>
          <Image source={require('/assets/Pizza 4.png')} style={styles.cardImage} />
          <Text style={styles.priceText}>50.00</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>Durbonairs</Text>
          <Image source={require('/assets/Emoji.png')} style={styles.emoji}/> 
          <Text style={styles.topText}>44 calories</Text>
          <Image source={require('/assets/Pizza 4.png')} style={styles.cardImage} />
          <Text style={styles.priceText}>50.00</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={require('/assets/Ellipse 2.png')}  style={styles.button}/>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
  },
  menuImage: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  searchImage: {
    width: 47,
    height: 47,
    position: 'absolute',
    right: 5,
  },
  searchIcon: {},
  topText: {
    width: 62,
    height: 38,
    flexShrink: 0,
    color: '#EB5757',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 34.5,
    marginLeft: 50,
    marginTop: -25,
  },
  heading1: {
    color: '#EB5757',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 34.5
  },
  heading2: {
    color: '#4F4F4F',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 34.5,
  },
  heading3: {
    color: '#4F4F4F',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 34.5,
    top: 80,
    marginLeft: -250,
  },
  cardContainer: {
    width: 162,
    height: 272,
    borderRadius: 15,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2,
    bottom: 10,
    marginTop: 200,
    marginLeft: 20
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  cardText: {
    width: 111,
    height: 27,
    flexShrink: 0,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 34.5,
    marginLeft: 30,
  },
  emoji: {
    width: 12,
    height: 13,
    flexShrink: 0,
    marginLeft: 40,
  },
  cardImage: {
    width: 145,
    height: 142,
    borderRadius: 388,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
    marginLeft: 7,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  priceText: {
    width: 36,
    height: 37,
    flexShrink: 0,
    color: '#4F4F4F',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 34.5,
    marginLeft: 60,
    marginTop: 10,
  },
  plusImage: {
    width: 15,
    height: 14,
    flexShrink: 0,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  burger: {
    width: 44,
    height: 44,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: 'rgba(235, 87, 87, 0.75)',
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  italian: {
    width: 44,
    height: 44,
    borderRadius: 3,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  sushi: {
    width: 44,
    height: 44,
    borderRadius: 3,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  seaFood: {
    width: 41,
    height: 39,
    flexShrink: 0,
  },
  buttonContainer: {
    position: 'absolute',
    top: 70,
    right: 160,
  },
  button: {
    width: 78,
    height: 78,
  },
  buttonText: {
    position: 'absolute',
    bottom: 10,
    color: 'black',
    textAlign: 'center',
    width: '100%',
  },
});

export default HomeScreen;
