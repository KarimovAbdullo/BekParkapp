import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  loading?: boolean;
}

const MyButton = ({onPress, title, loading}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingVertical: 10}}>
      <LinearGradient
        // colors={['#1D4E40', '#05815D', '#A6BEB7']} // Gradatsiya ranglarini belgilang
        colors={['#1D4E40', '#05815D', '#A6BEB7']}
        style={styles.button}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1.9}}>
        {loading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // width: 250,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyButton;
