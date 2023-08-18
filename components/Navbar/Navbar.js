import React from 'react';
import {View, Text,ScrollView} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(9, 22, 33,0.99)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        
      }}>
      <View style={{margin: 10}}>
        <Icon name="menu" size={30} color="white" />
      </View>

      <View style={{margin: 10}}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            
            fontWeight: 'bold',
          }}>
          OneShot
        </Text>
      </View>
      <View style={{margin: 10}}>
      <Image
        style={{
          width: 45,
          height: 45,
          marginRight: 10,
          resizeMode: 'contain',
          borderRadius: 50,
        }}
        source={{
          uri: 'https://media.licdn.com/dms/image/D4D03AQHrd86zBw948Q/profile-displayphoto-shrink_800_800/0/1683811280261?e=2147483647&v=beta&t=-Svus01LxBuDecPvjvEKX5wnvG2u1vtN1Snt5lvNcGE',
        }}
      />
      </View>
    </View>
  );
};

export default Navbar;
