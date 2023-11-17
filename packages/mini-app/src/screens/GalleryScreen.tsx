import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigationProp} from '../navigation/MainNavigator';

const data = Array(10)
  .fill('')
  .map((_, i) => `Picture ${i}`);

const Row = ({title}: {title: string}) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.row}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>
      <Image
        source={{uri: 'https://picsum.photos/70?a'}}
        style={styles.image}
      />
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Detail"
        onPress={() => {
          navigation.navigate('GalleryDetail', {
            imageUrl: 'https://picsum.photos/70?a',
          });
        }}
      />
    </View>
  );
};

const GalleryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map(title => (
        <React.Fragment key={title}>
          <Row title={title} />
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
