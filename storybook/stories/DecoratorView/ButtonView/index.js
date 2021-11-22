import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

export default function ButtonView({ children }) {
  return <View style={style.main}>
      {children}
    </View>;
}

ButtonView.defaultProps = {
  children: null,
};

ButtonView.propTypes = {
  children: PropTypes.node,
};
