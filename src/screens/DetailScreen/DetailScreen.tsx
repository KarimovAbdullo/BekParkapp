import {IFoodDataProps} from 'api/data/FoodData';
import BackIcon from 'assets/icons/BackIcon';
import DownArrow from 'assets/icons/DownArrow';
import StarIcon from 'assets/icons/StarIcon';
import {addToCart} from 'state/user/slice';
import useAppDispatch from 'hooks/useAppDispatch';
import MyButton from 'Components/MyButton.tsx/MyButton';
import {Space} from 'Components/Space';
import React, {useRef, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ToastAndroid,
  Platform,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
// import CustomButton from '../../Components/CustomButton/CustomButton';
// import {Space} from '../../Components/Space';
// import {s} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
interface IProps {
  route: {
    params: {
      item: IFoodDataProps;
    };
  };
}
const width = Dimensions.get('window').width;

const DetailScreen = ({route}: IProps) => {
  const navigation = useNavigation();
  const {item: data} = route.params;
  const [activeSlide, setActiveSlide] = useState(0);
  const [count, setCount] = useState(1);
  const carouselRef = useRef<any>(null);
  const dispatch = useAppDispatch();

  function notifyMessage(msg: string) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    }
  }

  const saveItemToAsyncStorage = () => {
    // try {
    //   const serializedData = JSON.stringify(data);

    //   await AsyncStorage.setItem('itemKey', serializedData);
    dispatch(addToCart(data));
    notifyMessage('Product Saved in Card');
    navigation.navigate('ShopScreen');
    // } catch (error) {
    //   console.error('Error saving item to AsyncStorage:', error);
    // }
  };

  const handleSnapToItem = (index: number) => {
    setActiveSlide(index);
  };

  const minus = () => {
    if (count === 0) {
      null;
    } else {
      setCount(count - 1);
    }
  };

  const plus = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.card}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="dark-content"
      />

      <Space height={20} />
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            position: 'absolute',
            padding: 5,
            borderRadius: 10,
            marginLeft: 20,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 5,
          }}>
          <BackIcon />
        </TouchableOpacity>
        <Space height={40} />
        <Carousel
          ref={carouselRef}
          loop
          width={width}
          height={width / 2}
          style={{height: 230}}
          data={data.images as []}
          scrollAnimationDuration={1000}
          pagingEnabled={true}
          onSnapToItem={handleSnapToItem}
          renderItem={({item}) => (
            <View
              style={{
                // flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <Image source={item} style={{width: 220, height: 200}} />
            </View>
          )}
        />

        {/* Pagination */}
        <View style={styles.pagination}>
          {/*@ts-ignore */}
          {data.images.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                carouselRef.current?.snapToItem(index);
                setActiveSlide(index);
              }}>
              <View
                style={
                  activeSlide === index
                    ? [
                        styles.panigline,
                        {
                          borderColor:
                            activeSlide === index
                              ? 'rgba(51, 97, 84, 1)'
                              : 'rgba(196, 196, 196, 1)',
                        },
                      ]
                    : null
                }>
                <View
                  style={[
                    styles.paginationDot,
                    {
                      backgroundColor:
                        activeSlide === index ? 'rgba(51, 97, 84, 1)' : 'white',
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {/* End of Pagination */}
      </View>

      <View style={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.name}>{data.name}</Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <StarIcon />
              <Text style={{color: 'black'}}>{' 3.8'}</Text>
              <Text style={{fontSize: 12}}>(51 Reviews)</Text>
            </View>
          </View>
        </View>

        <View style={styles.left}>
          <Text style={styles.price}>$ {data.price}</Text>
          <View style={styles.countCard}>
            <TouchableOpacity onPress={count === 0 ? minus : () => minus()}>
              <Image
                source={require('assets/images/minus.png')}
                style={styles.img}
              />
            </TouchableOpacity>

            <Text style={{fontSize: 20}}>{count}</Text>

            <TouchableOpacity onPress={plus}>
              <Image
                source={require('assets/images/plus.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Space height={30} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.titleCard}>
            <Text style={styles.title}>Size</Text>
            <Text style={styles.title2}>Medium</Text>
          </View>

          <View style={styles.titleCard}>
            <Text style={styles.title}>Energy</Text>
            <Text style={styles.title2}>554 KCal</Text>
          </View>

          <View style={styles.titleCard}>
            <Text style={styles.title}>Delivery</Text>
            <Text style={styles.title2}>45 min</Text>
          </View>
        </View>

        <Space height={20} />

        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontFamily: 'DMSans_18pt-SemiBold',
          }}>
          About
        </Text>

        <Space height={20} />

        <Text
          style={{
            fontFamily: 'DMSans_18pt-Light',
            fontSize: 13,
            paddingRight: 30,
            textAlign: 'justify',
          }}>
          Crispy seasoned chicken breast, topped with mandatory melted cheese
          and piled onto soft rolls with onion, avocado, lettuce, tomato and
          garlic mayo (if ordered).{' '}
        </Text>
        <Space height={30} />
        <MyButton title="Add to Cart" onPress={saveItemToAsyncStorage} />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  card: {backgroundColor: '#F1EB2A', flex: 1},
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    padding: 5,
    borderRadius: 100,
  },

  panigline: {
    borderWidth: 1,
    borderRadius: 100,
    padding: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  main: {
    backgroundColor: 'white',
    // flex: 1,
    padding: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 20,
    height: '100%',
  },
  name: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'DMSans_18pt-Bold',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    // flex: 1,
  },
  price: {
    fontSize: 22,
    color: '#336154',
    fontFamily: 'DMSans_18pt-Bold',
  },

  countCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 238, 218, 1)',
    borderRadius: 100,
  },
  plus: {
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 40,
    height: 40,
  },

  titleCard: {
    borderWidth: 1,
    borderColor: '#A0007D',
    width: '30%',
    height: 70,
    borderRadius: 10,
    padding: 7,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    color: '#336154',
    fontFamily: 'DMSans_18pt-Medium',
  },
  title2: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'DMSans_18pt-Medium',
  },
});
