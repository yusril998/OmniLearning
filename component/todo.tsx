

import * as React from "react";
//=import { StyleSheet, Text, View } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import colors from "../cons/color";

interface Props {
  label: string;
  isSelected: boolean;
}
interface iState {
 
  checked: boolean;
}
class Todo extends React.Component<Props,iState> {
  constructor(props:any) {
    super(props);
    this.state = {
     checked: this.props.isSelected
    };
    
  }
  render() {
   
    return (
      <View style={styles.footer}>
        <Text style={styles.label}>{this.props.label}</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={this.state.checked}
            //onValueChange={() => this.setState({ checked: !checked})}
            onChange={() => this.setState({ checked: !this.state.checked })}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Complited</Text>
        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  footer: {

    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginTop: 15,
    justifyContent: "center",
    paddingVertical: 10
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
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



// import React, { useEffect } from 'react';
// //=import { StyleSheet, Text, View } from "react-native";
// import { Text, StyleSheet, View } from "react-native";
// import { useDispatch, useSelector } from 'react-redux';
// import CheckBox from '@react-native-community/checkbox';
// import colors from "../cons/color";
// import { setMessage } from "../redux/state";


// const Todo = (props: any) => {


//   const dispatch = useDispatch();
//   const { message } = useSelector((state: any) => state.message);

//   const handlePress = () => {
//     dispatch(setMessage('Message from Component'));
//   };

//   useEffect(() => {
//     console.log(props.isSelected);

//     dispatch(setMessage(props.isSelected ? "false" : "true"));
//   }, []);
//   return (

//     <View style={styles.footer}>
//       <Text style={styles.label}>{props.label}</Text>
//       <View style={styles.checkboxContainer}>
//         <CheckBox
//           value={message == "true"}
//           //onValueChange={() => this.setState({ checked: !checked})}
//           onChange={handlePress}
//           style={styles.checkbox}
//         />
//         <Text style={styles.label}>Complited</Text>
//       </View>


//     </View>

//   );
// }


// const styles = StyleSheet.create({
//   footer: {

//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginHorizontal: 10,
//     paddingHorizontal: 10,
//     marginTop: 15,
//     justifyContent: "center",
//     paddingVertical: 10
//   },
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   checkboxContainer: {
//     flexDirection: "row",
//     marginBottom: 10,
//   },
//   checkbox: {
//     alignSelf: "center",
//   },
//   label: {
//     margin: 8,
//   },
//   text_rebnder: {
//     marginTop: 20,
//     textAlign: 'center',
//     color: colors.primary,
//     fontWeight: 'bold',
//     fontSize: 20
//   },
// });

// export default Todo;