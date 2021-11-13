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
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Btn from '../component/btn';
import Todo from '../component/todo';
import Txtfeld from '../component/txtfeld';
import colors from '../cons/color';
import strings from '../cons/string';

const HomeScreen = ({ }) => {

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
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={styles.header}>
          <Text style={styles.text_header}>{strings.WELCOME_TO_LOGIN}</Text>
       
      </View>
      <Todo label={strings.LOGIN} isSelected={false} />
    </View>

  );
};

const styles = StyleSheet.create({
 
  container: {
    flexDirection:'column',
    backgroundColor: colors.primary,
  },
  header: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  footer: {
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

export default HomeScreen;
