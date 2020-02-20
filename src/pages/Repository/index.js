import React from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default function Repository({ navigation, route }) {
  Repository.propTypes = {
    navigation: PropTypes.shape({
      setOptions: PropTypes.func,
    }).isRequired,
    route: PropTypes.shape({
      params: PropTypes.shape(),
    }).isRequired,
  };
  const { repository } = route.params;

  navigation.setOptions({ title: repository.name });

  return <Browser source={{ uri: repository.html_url }} />;
}
