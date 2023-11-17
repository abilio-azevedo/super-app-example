import React from 'react';
import {Federated} from '@callstack/repack/client';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainNavigator';

const MiniAppDetailNavigator = React.lazy(() =>
  Federated.importModule('MiniApp', './MiniAppDetailNavigator'),
);

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="gba(56, 30, 114, 1)" size="large" />
  </View>
);

type Props = NativeStackScreenProps<MainStackParamList, 'MiniAppDetail'>;

const MiniAppDetailScreen: React.FC<Props> = ({route}) => (
  <React.Suspense fallback={<FallbackComponent />}>
    <MiniAppDetailNavigator route={route} />
  </React.Suspense>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MiniAppDetailScreen;
