import BellIcon from 'assets/icons/BellIcon';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AravaIcon from '../../assets/icons/AravaIcon';
import FilterIcon from '../../assets/icons/FilterIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import {Space} from '../../Components/Space';
import DesertAllFood from './components/DesertAllFood';
import Dinner from './components/Dinner';
import Drink from './components/Drink';
import FastFoods from './components/FastFoods';
// import CustomButton from '../../Components/CustomButton/CustomButton';
// import {Space} from '../../Components/Space';
// import {s} from 'react-native-size-matters';
// import {useNavigation} from '@react-navigation/native';

const ShopScreen = () => {
  //   const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.card}>
        <StatusBar backgroundColor={'#FEFEFF'} barStyle="dark-content" />
        <Space height={40} />
        <Text style={styles.text}>Find Your{'\n'}Favourite Food</Text>

        <View style={styles.title}>
          <Text style={styles.popular}>Popular Menu</Text>
        </View>
      </View>
      <View>
        <FastFoods />

        <View style={styles.title2}>
          <Text style={styles.popular}>Desert {'&'} All Food </Text>
        </View>
        <DesertAllFood />

        <Dinner />

        <View style={styles.title2}>
          <Text style={styles.popular}>Drink</Text>
        </View>
        <Drink />
      </View>
    </ScrollView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FEFEFF',
    paddingHorizontal: 20,
    // flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: '900',
  },
  inp: {
    backgroundColor: 'rgba(237, 237, 237, 1)',
    borderRadius: 30,
    paddingLeft: 50,
    width: 300,
    paddingVertical: 12,
  },
  title2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  popular: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'DMSans_18pt-Bold',
  },
  view: {
    fontSize: 14,
    paddingTop: 10,
    color: '#646464',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
});
