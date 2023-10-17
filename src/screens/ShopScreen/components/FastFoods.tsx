// import { getProduct } from 'state/product/selectors'
import {FastFoodData, IFoodDataProps} from '../../../api/data/FoodData';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {Space} from 'Components/Space';

export interface IData {
  id: number;
  name: string;
  title?: string;
  gr?: number;
  callory?: number;
  image: ImageSourcePropType;
  min?: number;
  serve?: number;
}
const FastFoods = () => {
  const navigation = useNavigation();

  const goDetail = (data: IFoodDataProps) => {
    navigation.navigate('DetailScreen', {item: data});
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={FastFoodData}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingLeft: 20}}
        contentContainerStyle={{paddingRight: 20}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.5}
            onPress={() => goDetail(item)}>
            <View style={styles.imgCard}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.text}>{item.name}</Text>
            <Space height={10} />
            <Text style={styles.textPrice}>{item.price}$</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FastFoods;

const styles = StyleSheet.create({
  main: {
    // marginVertical: 20,
    backgroundColor: 'white',
  },
  image: {
    width: 80,
    height: 60,
  },
  card: {
    // flexDirection: 'row',
    borderRadius: 12,
    // paddingHorizontal: 30,
    // paddingVertical: 15,
    width: 160,
    height: 160,
    // marginTop: 50,
    marginVertical: 15,
    alignItems: 'center',
    paddingVertical: 10,
    // justifyContent: 'center',
    backgroundColor: '#F1EB2A',
    marginRight: 15,
  },

  imgCard: {
    // position: 'absolute',
    // top: -40,
  },

  text: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'black',
    fontFamily: 'OpenSans_Condensed-SemiBold',
  },
  textPrice: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#EC2578',
    fontFamily: 'DMSans_18pt-Bold',
  },
});
