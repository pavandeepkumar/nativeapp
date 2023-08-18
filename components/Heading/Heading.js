import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

const Heading = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(9, 22, 33,0.99)',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            padding: 10,
            // paddingLeft:20,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Catogory
        </Text>
        <Text style={{color: 'white', marginTop: 25, paddingRight: 10}}>
          See all
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        style={{display: 'flex', flexDirection: 'row', padding: 10}}>
        <View>
          <View
            style={{
              
              color: 'white',
              
              // borderColor: 'black',
              borderWidth: 1,
              borderRadius: 30,
              backgroundColor: '#6C7A89',
              paddingRight: 30,
              marginRight: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 90,
                  borderColor: 'white',
                }}
                source={{
                  uri: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                }}
              />
            </View>
            <View style={{padding: 8, marginTop: 5}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Music</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              // padding: 3,
              color: 'white',
              fontWeight: 'bold',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 30,
              backgroundColor: '#6C7A89',
              paddingRight: 30,
              marginRight: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 90,
                  borderColor: 'white',
                }}
                source={{
                  uri: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                }}
              />
            </View>
            <View style={{padding: 8, marginTop: 5}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Music</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              // padding: 3,
              color: 'white',
              fontWeight: 'bold',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 30,
              backgroundColor: '#6C7A89',
              paddingRight: 30,
              marginRight: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 90,
                  borderColor: 'white',
                }}
                source={{
                  uri: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                }}
              />
            </View>
            <View style={{padding: 8, marginTop: 5}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Music</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              // padding: 3,
              color: 'white',
              fontWeight: 'bold',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 30,
              backgroundColor: '#6C7A89',
              paddingRight: 30,
              marginRight: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 90,
                  borderColor: 'white',
                }}
                source={{
                  uri: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                }}
              />
            </View>
            <View style={{padding: 8, marginTop: 5}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Music</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Heading;
