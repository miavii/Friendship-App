import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { FlexRow } from './Layout';
import styled from 'styled-components/native';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  openTag: tagId =>
    dispatch(
      NavigationActions.navigate({
        routeName: 'ProfileUser',
        params: { personId },
      }),
    ),
});

class Tag extends React.Component {
  render = () => (
    <TouchableOpacity
      onPress={() => this.props.openSearchTag(this.props.data.id)}
    >
      <Text>{this.props.data.username}</Text>
    </TouchableOpacity>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
