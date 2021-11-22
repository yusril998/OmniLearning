
import { storiesOf } from "@storybook/react-native";

import React from "react";
import Txtfeld from '../../../component/txtfeld';
import strings from '../../../cons/string';
import ButtonView from "../DecoratorView/ButtonView";
const tap = () => {
  console.log("true");
  };
storiesOf("InputForm", module)
  .addDecorator((getStory) => <ButtonView>{getStory()}</ButtonView>)
 
  .add("Input", () => (
    <Txtfeld
    value="email"
    onChangeText={tap}
    placeholder={strings.EMAIL_PLACEHOLDER}
  />
  ));
