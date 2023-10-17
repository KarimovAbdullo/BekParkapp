import AravaIcon from 'assets/icons/AravaIcon';
import BellIcon from 'assets/icons/BellIcon';
import FilterIcon from 'assets/icons/FilterIcon';
import SearchIcon from 'assets/icons/SearchIcon';
import MyButton from 'Components/MyButton.tsx/MyButton';
import {Space} from 'Components/Space';
import useSmartNavigation from 'hooks/useSmartNavigation';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
// import CustomButton from '../../Components/CustomButton/CustomButton';
// import {Space} from '../../Components/Space';
// import {s} from 'react-native-size-matters';
// import {useNavigation} from '@react-navigation/native';

const TransScreen = () => {
  const navigation = useSmartNavigation();

  return (
    <View style={styles.card}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />

      <Space height={40} />
      <Text style={styles.text}>Спортивные {'\n'}трансляции</Text>

      <TouchableOpacity
        style={{
          paddingVertical: 20,
          marginTop: 30,
          elevation: 8,
          backgroundColor: 'white',
          borderRadius: 5,
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/images/tr1.png')}
          style={{width: 100, height: 30, marginLeft: 20}}
          resizeMode="contain"
        />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Kolkata Knight Raiders
          </Text>
          <Space height={5} />
          <Text>Royal Challengers</Text>
        </View>

        <Space width={30} />

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            position: 'absolute',
            top: 20,
            right: 20,
          }}>
          14.07
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingVertical: 20,
          marginTop: 30,
          elevation: 8,
          backgroundColor: 'white',
          borderRadius: 5,
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/images/tr2.png')}
          style={{width: 100, height: 30, marginLeft: 20}}
          resizeMode="contain"
        />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Philadelphia Flyers
          </Text>
          <Space height={5} />
          <Text>Pittsburgh Penguins</Text>
        </View>

        <Space width={30} />

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            position: 'absolute',
            top: 20,
            right: 20,
          }}>
          29.07
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingVertical: 20,
          marginTop: 30,
          elevation: 8,
          backgroundColor: 'white',
          borderRadius: 5,
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/images/tr3.png')}
          style={{width: 100, height: 30, marginLeft: 20}}
          resizeMode="contain"
        />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Golden State Warriors
          </Text>
          <Space height={5} />
          <Text>Golden State Warriors</Text>
        </View>

        <Space width={30} />

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            position: 'absolute',
            top: 20,
            right: 20,
          }}>
          14.07
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingVertical: 20,
          marginTop: 30,
          elevation: 8,
          backgroundColor: 'white',
          borderRadius: 5,
          flexDirection: 'row',
        }}>
        <Image
          source={require('assets/images/tr1.png')}
          style={{width: 100, height: 30, marginLeft: 20}}
          resizeMode="contain"
        />
        <View>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Barcelona</Text>
          <Space height={5} />
          <Text>Manchester United</Text>
        </View>

        <Space width={30} />

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            position: 'absolute',
            top: 20,
            right: 20,
          }}>
          22.07
        </Text>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
          alignSelf: 'center',
        }}>
        <MyButton
          title="check out"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </View>
  );
};

export default TransScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
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
