import {useNavigation} from '@react-navigation/native';
import BackIcon from 'assets/icons/BackIcon';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
// import CustomButton from '../../Components/CustomButton/CustomButton';
// import {Space} from '../../Components/Space';
// import {s} from 'react-native-size-matters';
// import {useNavigation} from '@react-navigation/native';

const FinishScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('assets/images/ddd.png')}
      style={styles.card}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.btn}>
        <Text style={{color: 'black', fontSize: 16}}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default FinishScreen;

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
