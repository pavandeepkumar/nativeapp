import React from 'react';
import {View, Text, ScrollView,Image} from 'react-native';

const Trending = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(9, 22, 33,0.99)',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            padding: 10,
            paddingLeft: 20,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
           
          }}>
          Recently Viewed
        </Text>
        <Text style={{color: 'white', marginTop: 25, paddingRight: 10}}>See all</Text>
      </View>
      <ScrollView
        horizontal={true}
        style={{display: 'flex', flexDirection: 'row', padding: 10}}>
        <View>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'rgba(60, 64, 63,0.7)',
              width: 300,
              height: 350,
              display: 'flex',
              flexDirection: 'column',
              margin: 20,
            }}>
            <View
              style={{
                height: '70%',
                width: '100%',
                backgroundColor: 'green',
                borderTopEndRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View>
                {/* <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}> */}
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}
                  source={{
                    uri: 'https://media.licdn.com/dms/image/D4D03AQHrd86zBw948Q/profile-displayphoto-shrink_800_800/0/1683811280261?e=2147483647&v=beta&t=-Svus01LxBuDecPvjvEKX5wnvG2u1vtN1Snt5lvNcGE',
                  }}></Image>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View>
                {/* <Text style={{color: 'black',fontSize:18,fontWeight:'bold',padding:2}}>Event is here</Text> */}

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginTop: 0,
                        fontSize: 19,
                      }}>
                      Pvandeep
                    </Text>
                    <Text style={{color: 'white'}}>pavandeep is Live</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'rgba(233, 5, 237,0.9)',
                        fontSize: 20,
                        fontWeight: '900',
                      }}>
                      $2000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'rgba(60, 64, 63,0.7)',
              width: 300,
              height: 350,
              display: 'flex',
              flexDirection: 'column',
              margin: 20,
            }}>
            <View
              style={{
                height: '70%',
                width: '100%',
                backgroundColor: 'green',
                borderTopEndRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View>
                {/* <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}> */}
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}
                  source={{
                    uri: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  }}></Image>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View>
                {/* <Text style={{color: 'black',fontSize:18,fontWeight:'bold',padding:2}}>Event is here</Text> */}

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginTop: 0,
                        fontSize: 19,
                      }}>
                      Pvandeep
                    </Text>
                    <Text style={{color: 'white'}}>pavandeep is the</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'rgba(233, 5, 237,0.9)',
                        fontSize: 20,
                        fontWeight: '900',
                      }}>
                      $2000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'rgba(60, 64, 63,0.7)',
              width: 300,
              height: 350,
              display: 'flex',
              flexDirection: 'column',
              margin: 20,
            }}>
            <View
              style={{
                height: '70%',
                width: '100%',
                backgroundColor: 'green',
                borderTopEndRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View>
                {/* <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}> */}
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}
                  source={{
                    uri: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  }}></Image>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View>
                {/* <Text style={{color: 'black',fontSize:18,fontWeight:'bold',padding:2}}>Event is here</Text> */}

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginTop: 0,
                        fontSize: 19,
                      }}>
                      Pvandeep
                    </Text>
                    <Text style={{color: 'white'}}>pavandeep is the</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'rgba(233, 5, 237,0.9)',
                        fontSize: 20,
                        fontWeight: '900',
                      }}>
                      $2000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'rgba(60, 64, 63,0.7)',
              width: 300,
              height: 350,
              display: 'flex',
              flexDirection: 'column',
              margin: 20,
            }}>
            <View
              style={{
                height: '70%',
                width: '100%',
                backgroundColor: 'green',
                borderTopEndRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <View>
                {/* <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}> */}
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}
                  source={{
                    uri: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  }}></Image>
              </View>
            </View>
            <View style={{padding: 10}}>
              <View>
                {/* <Text style={{color: 'black',fontSize:18,fontWeight:'bold',padding:2}}>Event is here</Text> */}

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginTop: 0,
                        fontSize: 19,
                      }}>
                      Pvandeep
                    </Text>
                    <Text style={{color: 'white'}}>pavandeep </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'rgba(233, 5, 237,0.9)',
                        fontSize: 20,
                        fontWeight: '900',
                      }}>
                      $2000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
       
        
        
      </ScrollView>
    </View>
  );
};

export default Trending;
