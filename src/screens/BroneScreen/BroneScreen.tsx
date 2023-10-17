import React from 'react';

import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Space} from 'Components/Space';
import BackIcon from 'assets/icons/BackIcon';

import MyButton from 'Components/MyButton.tsx/MyButton';
import {useNavigation} from '@react-navigation/native';
import LocIcon from 'assets/icons/Location';

const BroneScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />

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
        Заказать столик
      </Text>

      <View style={styles.cardInput}>
        <Text>Order Location</Text>

        <Space height={10} />

        <View>
          <View
            style={{position: 'absolute', zIndex: 1, top: 10, paddingLeft: 10}}>
            <LocIcon />
          </View>
          <TextInput
            placeholderTextColor={'black'}
            style={{
              backgroundColor: '#F1EB2A',
              borderRadius: 5,
              paddingHorizontal: 50,
              paddingVertical: 12,
            }}
            placeholder="8502 Preston Rd. Inglewood"
          />
        </View>

        <Space height={20} />

        <Text>Order Location</Text>

        <Space height={10} />
        <TextInput
          placeholderTextColor={'black'}
          style={{
            backgroundColor: '#F1EB2A',
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 12,
          }}
          placeholder="8502 Preston Rd. Inglewood"
        />
        <Space height={20} />

        <Text>Order Location</Text>

        <Space height={10} />
        <TextInput
          placeholderTextColor={'black'}
          style={{
            backgroundColor: '#F1EB2A',
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 12,
          }}
          placeholder="8502 Preston Rd. Inglewood"
        />
        <Space height={20} />

        <Text>Order Location</Text>

        <Space height={10} />
        <TextInput
          placeholderTextColor={'black'}
          style={{
            backgroundColor: '#F1EB2A',
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 12,
          }}
          placeholder="8502 Preston Rd. Inglewood"
        />
        <Space height={20} />
      </View>

      <View
        style={{
          // position: 'absolute',
          flex: 1,
          bottom: 0,
          backgroundColor: '#FFEEDA',
          width: '100%',
          // height: 200,
          marginTop: 20,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          padding: 20,
        }}>
        <Space height={10} />

        <Space height={10} />
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            width: '100%',
            alignSelf: 'center',
          }}>
          <MyButton
            title="Order"
            onPress={() => navigation.navigate('HomeScreen')}
          />
        </View>
      </View>
    </View>
  );
};

export default BroneScreen;

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

  cardInput: {
    elevation: 4,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
  },
});
