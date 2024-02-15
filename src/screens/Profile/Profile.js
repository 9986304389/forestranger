import React, { useLayoutEffect } from 'react';
import { View } from 'react-native'
import MenuImage from "../../components/MenuImage/MenuImage";
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button as GaButton } from 'galio-framework';

// import { Button } from './components/Button';
import { Images, nowTheme } from './constants';
import { HeaderHeight } from './constants/utils';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

export default function Profile(props) {
  const { navigation } = props;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <Block style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }} >
          <Block flex={0.6} >
            <View
              source={Images.ProfileBackground}
              style={styles.profileContainer}
              imageStyle={styles.profileBackground}
            >
              <Block flex style={styles.profileCard}>
                <Block style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 20 }}>
                  <Block middle style={{ top: height * 0.10 }}>
                    <Image source={require("./assets/imgs/kavitha.png")} style={styles.avatar} />
                  </Block>
                  <Block style={{ top: height * 0.12 }}>
                    <Block middle >
                      <Text
                        style={{

                          marginBottom: theme.SIZES.BASE / 2,
                          fontWeight: '900',
                          fontSize: 26
                        }}
                        color='#ffffff'
                      >
                        Kavitha Velpula
                      </Text>

                      <Text
                        size={16}
                        color="white"
                        style={{
                          marginTop: 5,

                          lineHeight: 20,
                          fontWeight: 'bold',
                          fontSize: 18,
                          opacity: .8
                        }}
                      >
                        Ranger
                      </Text>
                    </Block>
                    <Block style={styles.info}>
                      <Block col space="around" flex>

                        <Block row middle style={styles.containercard}>
                          <Text
                            size={20}
                            color="black"
                            style={{ marginRight: 8, marginBottom: 4, fontFamily: 'montserrat-bold' }}
                          >
                            Employee Code :
                          </Text>
                          <Text style={{ fontFamily: 'montserrat-regular' }} size={24} color="black">
                            TW200
                          </Text>
                        </Block>

                        <Block row middle style={styles.containercard}>
                          <Text
                            size={20}
                            color="black"
                            style={{ marginRight: 8, marginBottom: 4, fontFamily: 'montserrat-bold' }}
                          >
                            Employee Code :
                          </Text>
                          <Text style={{ fontFamily: 'montserrat-regular' }} size={24} color="black">
                            TW200
                          </Text>
                        </Block>
                        <Block row middle style={styles.containercard}>
                          <Text
                            size={20}
                            color="black"
                            style={{ marginRight: 8, marginBottom: 4, fontFamily: 'montserrat-bold' }}
                          >
                            Employee Code:
                          </Text>
                          <Text style={{ fontFamily: 'montserrat-regular' }} size={24} color="black">
                            TW200
                          </Text>
                        </Block>
                        <Block row middle style={styles.containercard}>
                          <Text
                            size={20}
                            color="black"
                            style={{ marginRight: 8, marginBottom: 4, fontFamily: 'montserrat-bold' }}
                          >
                            Name :
                          </Text>
                          <Text style={{ fontFamily: 'montserrat-regular' }} size={24} color="black">
                            Kavitha Velpula kavitha kavitha
                          </Text>
                        </Block>
                        <Block row middle style={styles.containercard}>
                          <Text
                            size={20}
                            color="black"
                            style={{ marginRight: 8, marginBottom: 4, fontFamily: 'montserrat-bold' }}
                          >
                            Employee Code :
                          </Text>
                          <Text style={{ fontFamily: 'montserrat-regular' }} size={24} color="black">
                            TW200
                          </Text>
                        </Block>

                      </Block>
                    </Block>

                  </Block>

                </Block>



              </Block>
            </View>


          </Block>
          <Block />

        </Block>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containercard: {
    backgroundColor: 'white',
    minHeight: 50,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 10,
    flexWrap: "wrap",

  },
  profileContainer: {
    width,
    height,
    padding: 0,
    zIndex: 1,
    backgroundColor: "gray"

  },
  profileBackground: {
    width,
    height: height * 0.6
  },

  info: {
    paddingTop: 20

  },

  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  avatar: {
    width: thumbMeasure,
    height: thumbMeasure,
    borderRadius: 50,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  social: {
    width: nowTheme.SIZES.BASE * 3,
    height: nowTheme.SIZES.BASE * 3,
    borderRadius: nowTheme.SIZES.BASE * 1.5,
    justifyContent: 'center',
    zIndex: 99,
    marginHorizontal: 5
  }
});


