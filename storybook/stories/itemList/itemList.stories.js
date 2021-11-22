
import { storiesOf } from "@storybook/react-native";
import React from "react";
import ButtonView from "../DecoratorView/ButtonView";
import Todo from '../../../component/todo';
import strings from '../../../cons/string';
storiesOf("listTodo", module)
  .addDecorator((getStory) => <ButtonView>{getStory()}</ButtonView>)
 
  .add("listTodo", () => (
    <Todo label="label" isSelected={true} />
  ));
