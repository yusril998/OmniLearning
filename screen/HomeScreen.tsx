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
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
export interface todoJson {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}





const HomeScreen = ({ }) => {


  const [data, setData] = React.useState<todoJson[]>([]);

  useEffect(() => {
    async function fetchMyAPI() {
      console.log("lalla");
      axios.get<todoJson[]>('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          setData(res.data);
          console.log(data);

        });
    }

    fetchMyAPI()
  }, [setData])







  return (

    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>{strings.WELCOME_TO_LOGIN}</Text>

      </View>
      <ScrollView>
        {data && data.map((repo) => {
          return (
            <Todo label={repo.title} isSelected={repo.completed} />
          );
        })}
      </ScrollView>
    </View>

  );
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
});

export default HomeScreen;
