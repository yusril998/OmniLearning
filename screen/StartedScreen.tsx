/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Image,
  Platform,

  StatusBar,
  StyleSheet,
  Text,

  View,
} from 'react-native';
import Btn from '../component/btn';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import colors from '../cons/color';
import strings from '../cons/string';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParamList } from './Root';

type startedScreenProp = StackNavigationProp<RootStackParamList, 'startedScreen'>;
const StartedScreen = ({}) => {
 const navigation = useNavigation<startedScreenProp>();

  const mulai = () => {
    console.log("Login button pressed");
    navigation.navigate('loginScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
    
      <View style={styles.header}>
       
        <Image source={require('../assets/reading-book.png')} style={styles.image} />
        <Text style={styles.text_header}>{strings.WELCOME}</Text>
        <Text style={styles.text_a}>{strings.DESCSTARS}</Text>
       
      </View>
      <View style={styles.absolute}>
        <Btn label={strings.STARD} onPress={mulai} />
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  image:{
    height:150,
    width:150,
    marginVertical:20,
   
    tintColor:colors.white
  },
  absolute:{
   bottom:40,
  width:"90%",
  marginLeft:20,
    position:"absolute"
    
    
  },
  container: {
    width:"100%",
    height:"100%",
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
     paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    justifyContent: "center",
    paddingVertical: 50
  },
  text_header: {
    paddingTop:10,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 25
  },
  text_a: {
    marginTop: 10,
    textAlign: 'center',
    color: colors.white,
   
    fontSize: 15
  },

});

export default StartedScreen;
