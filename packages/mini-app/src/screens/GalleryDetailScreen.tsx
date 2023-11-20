import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import {
  MainStackNavigationProp,
  MainStackParamList,
} from '../navigation/MainNavigator';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<MainStackParamList, 'GalleryDetail'>;

const GalleryDetailScreen: React.FC<Props> = ({route}) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={
          route.params?.imageSource ??
          require('../assets/inlineAssets/pic_1.jpg')
        }
        style={styles.image}
      />
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to HostApp"
        onPress={() => {
          navigation.popToTop();
          navigation.pop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingRight: 20,
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '200',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(127, 103, 190, 1)',
  },
});

export default GalleryDetailScreen;
