import React from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';

export default function User(props) {
  const { user } = props.route.params;

  return <Text> {user.name} </Text>;
}
