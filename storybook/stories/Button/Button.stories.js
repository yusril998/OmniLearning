
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Btn from '../../../component/btn';
import strings from '../../../cons/string';
const tap = () => {
console.log("true");
};
storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Button get started', () => (
    <Btn label={strings.STARD} onPress={tap} />
  ))
  .add('Button login', () => (
    <Btn label={strings.LOGIN} onPress={tap} />
  ));
