import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {ImageRequireSource, StyleSheet} from 'react-native';

import {
  HeaderBackButton,
  HeaderBackButtonProps,
} from '@react-navigation/elements';
import GalleryDetailScreen from '../screens/GalleryDetailScreen';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen';

const STANDALONE = Boolean(process.env.STANDALONE);

export type MainStackParamList = {
  Home: undefined;
  Gallery: undefined;
  GalleryDetail: {
    imageSource?: ImageRequireSource;
  };
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

const BackButton: React.FC<HeaderBackButtonProps & {navigation: any}> = ({
  navigation,
  ...props
}) => (
  <HeaderBackButton
    {...props}
    onPress={() => navigation.goBack()}
    labelVisible={false}
  />
);

const MainNavigator = () => {
  const NavOptions = {
    headerTitle: 'MiniApp',
    headerBackTitleVisible: false,
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: 'rgba(255,255,255,1)',
  };
  return (
    <Main.Navigator screenOptions={NavOptions}>
      <Main.Screen
        name="Home"
        component={HomeScreen}
        options={
          STANDALONE
            ? undefined
            : ({navigation}) => ({
                ...NavOptions,
                headerLeft: props => BackButton({navigation, ...props}),
              })
        }
      />
      <Main.Screen name="Gallery" component={GalleryScreen} />
      <Main.Screen name="GalleryDetail" component={GalleryDetailScreen} />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(79, 55, 139, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigator;
