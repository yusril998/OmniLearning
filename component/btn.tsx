
   
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../cons/color";

interface Props {
  label: string;
  onPress: () => void;
}

class Btn extends React.Component<Props> {
  render() {
    const { label, onPress } = this.props;
    return (
         <View style={styles.button}>
         <TouchableOpacity
          onPress={onPress}
           style={[styles.signIn, {
             borderColor: '#009387',
             borderWidth: 1,
             marginTop: 15
           }]}
         >
           <Text style={[styles.textSign, {
             color: '#009387'
           }]}>{label}</Text>
         </TouchableOpacity>
         </View>
    );
  }
}

const styles = StyleSheet.create({
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:colors.white,
      },
      button: {
        
        alignItems: 'center',
      },
    
      textSign: {
        fontSize: 18,
        fontWeight: 'bold'
      }
});

export default Btn;