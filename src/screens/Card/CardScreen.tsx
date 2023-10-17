import React, {useState, useEffect} from 'react';
import {useAppDispatch} from 'hooks/redux';
import useAppSelector from 'hooks/useAppSelector';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
// import CustomButton from '../../Components/CustomButton/CustomButton';
// import {Space} from '../../Components/Space';
// import {s} from 'react-native-size-matters';
// import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Space} from 'Components/Space';
import BackIcon from 'assets/icons/BackIcon';

import {getUser} from 'state/user/selectors';
import AravaIcon from 'assets/icons/AravaIcon';
import {IFoodDataProps} from 'api/data/FoodData';
import MyButton from 'Components/MyButton.tsx/MyButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {removeFromCart} from 'state/user/slice';
import EmptyScreen from 'screens/Empty/Empty';

const CardScreen = () => {
  //   const navigation = useNavigation();
  // const [savedItem, setSavedItem] = useState(null);
  const [count, setCount] = useState(1);
  const {products} = useAppSelector(getUser);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log(products, '2222222222222');

  const pressmin = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      null;
    }
  };

  const handleRemoveFromCart = (itemId: number | string) => {
    // Mahsulotni o'chirish uchun harakatni chaqirish
    dispatch(removeFromCart(itemId));
  };

  const pressPl = () => {
    setCount(count + 1);
  };

  return (
    <>
      {products.length ? (
        <View style={styles.card}>
          <StatusBar
            backgroundColor={'transparent'}
            translucent={true}
            barStyle="light-content"
          />

          {/* <Text style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
       {Array.isArray(products)
         ? products.map(item => <Text key={item.id}>{item.price}</Text>)
         : 'Product data not available'}
     </Text> */}
          <Space height={30} />
          <TouchableOpacity
            style={{paddingLeft: 20}}
            onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
          <Space height={30} />
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontWeight: 'bold',
              paddingLeft: 20,
            }}>
            Card
          </Text>
          <FlatList
            style={{backgroundColor: 'white'}}
            data={products}
            contentContainerStyle={{backgroundColor: 'white'}}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}: {item: IFoodDataProps}) => (
              <View style={styles.shops}>
                <Image
                  source={item.image}
                  style={{width: 130, height: 110, borderWidth: 11}}
                />

                <Space width={10} />
                <View style={{paddingVertical: 10}}>
                  <Text style={{color: '#EC2578'}}>
                    {'$ '}
                    {item.price}
                  </Text>
                  <Text style={{color: 'black'}}>{item.name}</Text>
                  <Text style={{color: '#646464', fontSize: 8}}>
                    With cheese sauce
                  </Text>
                  <View style={styles.count}>
                    <TouchableOpacity style={styles.number} onPress={pressmin}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: 'black'}}>{count}</Text>
                    </View>
                    <TouchableOpacity style={styles.number} onPress={pressPl}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => handleRemoveFromCart(item.id)}
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 30,
                    borderWidth: 1,
                    padding: 4,
                    borderRadius: 5,
                    borderColor: '#EDEDED',
                  }}>
                  <AravaIcon />
                </TouchableOpacity>
              </View>
            )}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#FFEEDA',
              width: '100%',
              height: 200,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              padding: 20,
            }}>
            <Space height={10} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'black', fontFamily: 'DMSans_18pt-Light'}}>
                Subtotal
              </Text>
              <Text style={{color: 'black', fontFamily: 'DMSans_18pt-Light'}}>
                $96.00
              </Text>
            </View>
            <Space height={10} />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'black', fontFamily: 'DMSans_18pt-Light'}}>
                Delivery
              </Text>
              <Text style={{color: 'black', fontFamily: 'DMSans_18pt-Light'}}>
                $2.00
              </Text>
            </View>
            <Space height={10} />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'DMSans_18pt-Bold',
                  fontSize: 16,
                }}>
                Total
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'DMSans_18pt-Bold',
                  fontSize: 16,
                }}>
                $98.00
              </Text>
            </View>
            <Space height={10} />
            <MyButton
              title="Checkout"
              onPress={() => navigation.navigate('FinishScreen')}
            />
          </View>
        </View>
      ) : (
        <EmptyScreen />
      )}
    </>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  card: {
    //
    backgroundColor: 'white',
    flex: 1,
  },
  shops: {
    // backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 10,
    shadowColor: '#000',
    marginVertical: 5,
    shadowOpacity: 0.48,
    // shadowRadius: 11.95,
    flexDirection: 'row',
    elevation: 1,
    paddingVertical: 10,
    borderRadius: 10,
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#EDEDED',
    elevation: 8,
  },
  number: {
    width: 28,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
