import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import colors from "../cons/color";

type Props = TextInputProps;

class Txtfeld extends React.Component<Props> {
  render() {
    const { style, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor={colors.primary}
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default Txtfeld;