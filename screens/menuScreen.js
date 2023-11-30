import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-web';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('/assets/Expand Arrow.png')} style={styles.arrow} />
      <View style={styles.heartContainer}>
        <Image source={require('/assets/Heart.png')} style={styles.heart} />
      </View>
      <Text style={styles.flavor}>Panaroties</Text>
      <Text style={styles.price}>5000</Text>
      <Image source={require('/assets/Pizza 4.png')} style={styles.pizza} />
      <View style={styles.extra}>
        <Image source={require('/assets/Subtract.png')} style={styles.subtract} />
        <Image source={require('/assets/Plus Math.png')} style={styles.plus} />
      </View>
      <Text style={styles.extraPrice}>5000</Text>
      <View style={styles.radioButtons}>
        <Image source={require('/assets/Radio Button.png')} style={styles.grayButton} />
        <Text>10</Text>
        <Image source={require('/assets/Pink Radio.png')} style={styles.pinkButton}/>
        <Text>10</Text>
        <Image source={require('/assets/Radio Button.png')}style={styles.grayButton}/>
        <Text>10</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Image source={require('/assets/Star.png')} style={styles.star}/>
        <Image source={require('/assets/Emoji.png')} style={styles.emoji}/>
        <Image source={require('/assets/Time.png')} style={styles.time}/>
      </View>
      <TouchableOpacity style={styles.button}>
       
        <Text style={styles.buttonText}>
        ADD to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    width: 414,
    height: 896,
    flexShrink: 0,
    backgroundColor: '#FFF',
  },
  arrow: {
    width: 42,
    height: 42,
    transform: [{ rotate: '360deg' }],
    flexShrink: 0,
    backgroundColor: '#FFF',
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 10,
  },
  heartContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  heart: {
    width: 33,
    height: 33,
    flexShrink: 0,
    backgroundColor: 'lightgray',
    resizeMode: 'contain',
    backgroundColor: '#FFF',
    marginTop: 5,
    marginRight: 5,
  },
  flavor: {
    width: 160,
    height: 28,
    flexShrink: 0,
    color: '#4F4F4F',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 34.5,
    paddingTop: 50,
    marginLeft: 130,
  },
  price: {
    width: 46,
    height: 37,
    flexShrink: 0,
    color: '#4F4F4F',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 34.5,
    paddingTop: 30,
    marginLeft: 185,
  },
  pizza: {
    width: 272,
    height: 268,
    flexShrink: 0,
    borderRadius: 388,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.40)',
    shadowOffset: { width: 0, height: 11 },
    shadowRadius: 50,
    shadowOpacity: 1,
    marginTop: 40,
    marginLeft: 80,
  },
  extra: {
    flexDirection: 'row',
    marginTop: 50, // Adjust this value as needed
    marginLeft: 185, // Adjust this value as needed
    

  },
  subtract: {
    width: 20,
    height: 20,
    flexShrink: 0,
    backgroundColor:'pink',
    
  },
  plus: {
    width: 20,
    height: 20,
    flexShrink: 0,
    marginLeft: 10, // Adjust this value as needed
    backgroundColor:'pink',
  
  },
extraPrice: {
  color: '#828282',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 34.5,
    paddingBottom:30,

},
radioButtons: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 20,
  marginLeft: 10,
  
    
  

},
grayButton: {
  width: 23,
  height: 23,
  flexShrink: 0,
  backgroundColor: 'lightgray',
  borderRadius: 50, 
},
pinkButton: {
  width: 23,
  height: 23,
  flexShrink: 0,
  backgroundColor: 'pink',
  borderRadius: 50,

},
bottomContainer:{
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 85,
  marginLeft: 10,
}
,
star: {
  width: 25,
  height: 25,
  flexShrink: 0,
  backgroundColor: '#FFF',
  resizeMode: 'contain',

},
emoji: {
  width: 25,
  height: 25,
  flexShrink: 0,
  resizeMode: 'contain',
},
time: {
  width: 26,
  height: 26,
  flexShrink: 0,
  backgroundColor: '#FFF',
},
image: {
  flex: 1,
  width: '100%',
  height: '100%',
  resizeMode: 'contain',
},
button: {
  width: 310,
  height: 53,
  borderRadius: 12,
  flexShrink: 0,
  backgroundColor: 'pink', // or '#FFC0CB'
  shadowColor: 'rgba(0, 0, 0, 0.23)',
  shadowOffset: { width: 0, height: 8 },
  shadowRadius: 23,
  shadowOpacity: 1,
  marginTop: 70,
  marginLeft: 50,

  },
  gradient: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',

},
buttonText: {
  width: 163,
    height: 33,
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 34.5,
    top:8 ,
    left: 60,
},

 
});
