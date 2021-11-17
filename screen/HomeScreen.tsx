/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { store } from "../redux/exportStore";
import { Provider } from 'react-redux';
import Todo from '../component/todo';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../cons/color';
import strings from '../cons/string';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchtodos } from '../redux/stateTodo';



const HomeScreen = () => {
 
  return (
    <Provider store={store}> 
      <HomeScreen/>
    </Provider>
  )
}


export const AppWrapper = ({ }) => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state: any) => state.todos)

  useEffect(() => {
    dispatch(fetchtodos());
  }, []);

  

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }else{
  return (
    
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>{strings.WELCOME_TO_LOGIN}</Text>

      </View>
      <ScrollView>
        {todos && todos.map((repo:any) => {
          return (
            <Todo label={repo.title} isSelected={repo.completed} />
          );
        })}
      </ScrollView>
    </View>

  );
  }



};

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
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
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
});

export default HomeScreen;
