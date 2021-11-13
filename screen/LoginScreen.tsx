/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {
  Image,
  Platform,

  StatusBar,
  StyleSheet,
  Text,

  View,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Btn from '../component/btn';
import Txtfeld from '../component/txtfeld';
import colors from '../cons/color';
import strings from '../cons/string';
import { RootStackParamList } from './Root';
type loginScreenProp = StackNavigationProp<RootStackParamList, 'loginScreen'>;

const LoginScreen = ({ }) => {
  const navigation = useNavigation<loginScreenProp>();
  const [data, setData] = React.useState({
    email: "",
    password: "",
    kondisi: ""
  });



  const emailChange = (email: string) => {
    setData({
      ...data,
      email: email
    });

  };

  const passChange = (password: string) => {
    setData({
      ...data,
      password: password
    });

  };

  const loginChange = () => {
    console.log("Login button pressed");
    if (data.email == "conditionalrendering" && data.password == "abc123") {
      setData({
        ...data,
        kondisi: "coba condiitonal rendering"
      });
    } else {
      setData({
        ...data,
        kondisi: "tidak berhasil"
      });
      navigation.navigate('homeScreen');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.absolute}>
          <Image source={require('../assets/reading-book.png')} style={styles.image} />
          <Text style={styles.text_header}>{strings.WELCOME_TO_LOGIN}</Text>
        </View>

      </View>
      <View style={styles.footer}>
        <Txtfeld
          value={data.email}
          onChangeText={emailChange}
          placeholder={strings.EMAIL_PLACEHOLDER}
        />
        <Txtfeld
          value={data.password}
          onChangeText={passChange}
          placeholder={strings.PASSWORD_PLACEHOLDER}
        />
        <Btn label={strings.LOGIN} onPress={loginChange} />
        <Text style={styles.text_rebnder}>{data.kondisi}</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    tintColor: colors.white
  },
  absolute: {
    top: 40,
    left: 20,
    right: 0,
    alignContent: "center",
    position: "absolute"


  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
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
    paddingTop: 10,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 25
  },
  text_rebnder: {
    marginTop: 20,
    textAlign: 'center',
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 20
  },

});

export default LoginScreen;
