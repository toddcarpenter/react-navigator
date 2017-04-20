import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

var SplashPage = require('./components/pages/SplashPage');
var GameOverview = require('./components/pages/GameOverview');
var ChooseTeam = require('./components/pages/ChooseTeam');
var GhostLanding = require('./components/pages/GhostLanding');
var RunnerLanding = require('./components/pages/RunnerLanding');
var StatsOverlay = require('./components/overlays/StatsOverlay');

class App extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'GameOverview') {
      return (
        <GameOverview
          navigator={navigator} />
      );
    }
    if (routeId === 'ChooseTeam') {
      return (
        <ChooseTeam
            navigator={navigator} />
      );
    }
    if (routeId === 'GhostLanding') {
      return (
        <GhostLanding
          navigator={navigator} />
      );
    }
    if (routeId === 'RunnerLanding') {
      return (
        <RunnerLanding
          navigator={navigator} />
      );
    }
    if (routeId === 'StatsOverlay') {
      return (
        <StatsOverlay
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>index.js</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('pmaAppViews', () => App);
