import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/AntDesign';

const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <Icon name="home" size={30} color="white" />
          <Icon name="search" size={30} color="white" />
          <Icon name="add-circle-outline" size={30} color="white" />
          <Icon name="settings-outline" size={30} color="white" />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    footerContainer: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      marginBottom:100
    },
    footer: {
      backgroundColor: 'black',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 10,
      height: 50, // Add a fixed height to the footer to prevent it from overlapping with the content above it
    },
  });
  
  export default Footer;
  


