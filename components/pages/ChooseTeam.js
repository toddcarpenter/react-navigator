
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

class ChooseTeam extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
        <TouchableHighlight style={{backgroundColor: 'black', padding: 10, margin: 10}}
            onPress={this.gotoGhostLanding.bind(this)}>
          <Text style={{backgrondColor: 'blue', color: 'white'}}>Ghost</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{backgroundColor: 'red', padding: 10, margin: 10}}
            onPress={this.gotoRunnerLanding.bind(this)}>
          <Text style={{backgrondColor: 'blue', color: 'white'}}>Runner</Text>
        </TouchableHighlight>
      </View>
    );
  }
  gotoGhostLanding() {
    this.props.navigator.push({
      id: 'GhostLanding',
      name: 'Ghost',
    });
  }
  gotoRunnerLanding() {
    this.props.navigator.push({
      id: 'RunnerLanding',
      name: 'Runner',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Choose Your Team
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = ChooseTeam;
