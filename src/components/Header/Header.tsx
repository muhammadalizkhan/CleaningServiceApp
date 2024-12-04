import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Platform } from 'react-native';
import HeaderSlider from '../Slider/HeaderSlider';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.hi}>Hi, <Text style={styles.name}>Muhammad</Text></Text>
          <Text style={styles.subline}>Let's Search for your Best</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/Images/ProfileImage.jpg')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <TextInput
        placeholder="Search"
        style={styles.input}
      />
      <HeaderSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#143740',
    height: 300,
    borderBottomEndRadius: 65,
    borderBottomStartRadius: 65,
    elevation: 3,
    paddingBottom: 10,
    paddingTop: 10,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: '5%',
  },
  textContainer: {
    flex: 1,
  },
  hi: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
  },
  name: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  subline: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    width: '90%',
    height: 45,
    marginHorizontal: '5%',
    backgroundColor: '#979499',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    fontSize: 16,
    color: '#333',
  },
});
