import React from 'react';
import {
  Button,
  Image,
  ImageRequireSource,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../navigation/MainNavigator';

const pics = [
  require('../assets/inlineAssets/pic_1.jpg'),
  require('../assets/inlineAssets/pic_2.jpg'),
  require('../assets/localAssets/pic_3.jpg'),
  require('../assets/localAssets/pic_4.jpg'),
  require('../assets/remoteAssets/pic_5.jpg'),
];

const data = Array(5)
  .fill('')
  .map((_, i) => ({title: `Picture ${i}`, source: pics[i]}));

const Row = ({title, source}: {title: string; source: ImageRequireSource}) => {
  const navigation = useNavigation<MainStackNavigationProp>();
  return (
    <View style={styles.row}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>
      <Image source={source} style={styles.image} />
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Detail"
        onPress={() => {
          navigation.navigate('GalleryDetail', {
            imageSource: source,
          });
        }}
      />
    </View>
  );
};

const GalleryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map(({title, source}) => (
        <React.Fragment key={title}>
          <Row title={title} source={source} />
          <View style={styles.separator} />
        </React.Fragment>
      ))}
    </ScrollView>
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

export default GalleryScreen;
