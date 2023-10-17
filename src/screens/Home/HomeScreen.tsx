import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {Space} from '../../Components/Space';
import {s} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {getUser} from 'state/user/selectors';
import useAppSelector from 'hooks/useAppSelector';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {products} = useAppSelector(getUser);
  const [load, setLoad] = useState(false);

  const goShop = () => {
    navigation.navigate('ShopScreen');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/2.png')}
      style={{flex: 1, justifyContent: 'center'}}
      resizeMode="stretch">
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />
      <Space height={102} />
      <View style={styles.card}>
        <CustomButton
          title="Магазин"
          //@ts-ignore
          onPress={goShop}
        />
        <CustomButton
          title="Бронь столика"
          //@ts-ignore
          onPress={() => navigation.navigate('BroneScreen')}
        />
        <CustomButton
          title="Трансляции"
          //@ts-ignore
          onPress={() => navigation.navigate('TransScreen')}
        />
        <CustomButton
          title="Контакты"
          //@ts-ignore
          onPress={() => navigation.navigate('ContactScreen')}
        />
      </View>

      <TouchableOpacity
        style={styles.iconCard}
        onPress={
          products.length > 0
            ? //@ts-ignore
              () => navigation.navigate('CardScreen')
            : //@ts-ignore
              () => navigation.navigate('EmptyScreen')
        }>
        <Image
          source={require('../../assets/images/bag.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 30,
    borderColor: 'rgba(236, 236, 236, 1)s',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 8,
  },

  icon: {
    width: s(30),
    height: s(29),
  },

  iconCard: {
    backgroundColor: '#ECECEC',
    width: s(90),
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 8,
  },
});
