

import * as React from "react";
//=import { StyleSheet, Text, View } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import colors from "../cons/color";

interface Props {
  label: string;
  isSelected: boolean;
}

class Todo extends React.Component<Props> {

 
  render() {
    const { label, isSelected } = this.props;
    this.state = {
      checked: isSelected,
    };
    return (
      <View style={styles.footer}>
<View style={styles.checkboxContainer}>
      <CheckBox
      
        value={isSelected}
        onValueChange={() => this.setState({ isSelected: !isSelected})}
        style={styles.checkbox}
      />
      <Text style={styles.label}>Do you like React Native?</Text>
    </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 30,
    justifyContent: "center",
    paddingVertical: 50
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  text_rebnder: {
    marginTop: 20,
    textAlign: 'center',
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 20
  },
});

export default Todo;