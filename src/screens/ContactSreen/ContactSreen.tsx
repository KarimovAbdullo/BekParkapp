import {useNavigation} from '@react-navigation/native';
import {SelectList} from 'react-native-dropdown-select-list';
import BackIcon from 'assets/icons/BackIcon';
import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Space} from 'Components/Space';
// import CustomButton from '../../Components/CustomButton/CustomButton';
// import {Space} from '../../Components/Space';
// import {s} from 'react-native-size-matters';
// import {useNavigation} from '@react-navigation/native';

const ContactScreen = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: '0000000000', disabled: true},
    {key: '2', value: '0000000000'},
    {key: '3', value: '0000000000'},
    {key: '4', value: '00000000000', disabled: true},
  ];

  return (
    <ImageBackground
      source={require('assets/images/bbb.png')}
      style={styles.card}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => navigation.navigate('CardScreen')}>
        <BackIcon color={'white'} />
      </TouchableOpacity>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          paddingLeft: 10,
          marginTop: 10,
        }}>
        Контакты
      </Text>

      <Space height={60} />

      <SelectList
        dropdownStyles={{backgroundColor: 'white'}}
        boxStyles={{backgroundColor: 'white'}}
        setSelected={val => setSelected(val)}
        defaultOption={{key: '1', value: 'Email Address'}}
        data={data}
        save="value"
      />
      <Space height={20} />

      <SelectList
        dropdownStyles={{backgroundColor: 'white'}}
        boxStyles={{backgroundColor: 'white'}}
        setSelected={val => setSelected(val)}
        defaultOption={{key: '1', value: 'Location'}}
        data={data}
        save="value"
      />

      <Space height={20} />

      <SelectList
        dropdownStyles={{backgroundColor: 'white'}}
        boxStyles={{backgroundColor: 'white'}}
        setSelected={val => setSelected(val)}
        defaultOption={{key: '1', value: 'Phone'}}
        data={data}
        save="value"
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.btn}>
        <Text style={{color: 'black', fontSize: 16}}>Go main</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  btn: {
    position: 'absolute',
    bottom: 60,
    paddingVertical: 20,
    backgroundColor: '#F1EB2A',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 25,
    width: '100%',
  },
});
