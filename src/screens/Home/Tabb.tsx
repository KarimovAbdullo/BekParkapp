import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

// const sWidth = Dimensions.get('window').width
// const sHeight = Dimensions.get('window').height
// const ratio = sWidth / sHeight //sWidth = ratio * sHeight

const CustomTabNav = () => {
  return (
    <View style={styles.container}>
      <Svg
        width={Dimensions.get('window').width}
        height={70}
        style={styles.svg}>
        <Path
          d={`M0 0 Q${Dimensions.get('window').width / 2} 60 ${
            Dimensions.get('window').width
          } 0 L${Dimensions.get('window').width} 200 L0 200 Z`}
          fill="rgba(244, 243, 248, 0.96)" // Shaffof glass rangi va opacity
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'transparent',
  },
  blurBackground: {
    width: Dimensions.get('window').width,

    height: 120,
    alignItems: 'center', // Markaziy o'rtasi
    justifyContent: 'flex-end', // Pastga egilish uchun
    borderRadius: 80, // Radiusni o'zgartirishingiz mumkin
  },
  svg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  icon: {
    paddingVertical: 30,
  },
});

//   top_background: {
//     width: sHeight * 2,
//     borderWidth: 3,
//     height: sHeight * 2,
//     borderRadius: sHeight * 1,
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//     opacity: 7,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     marginLeft: ratio * sHeight * 0.5 - sHeight,
//     marginTop: -sHeight * 1.7,
//     paddingTop: sHeight * 1.7,
//   },
//   top_content: {
//     paddingTop: sHeight * 2,
//     width: sWidth,
//     height: sHeight * 1,
//     alignItems: 'center',
//   },
//   text1: {
//     fontSize: 14,
//     color: '#fff',
//   },
//   text2: {
//     marginTop: sHeight * 0.1,
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#fff',
//   },

//   parent: {
//     height: '80%',
//     width: '100%',
//     transform: [{ scaleX: 2 }],
//     borderBottomStartRadius: 250,
//     borderBottomEndRadius: 250,
//     overflow: 'hidden',
//     backgroundColor: 'red',
//   },
//   child: {
//     flex: 1,
//     transform: [{ scaleX: 0.5 }],

//     backgroundColor: 'yellow',
//   },

export default CustomTabNav;
// import * as React from 'react'
// import { StyleSheet, View } from 'react-native'

// export const CustomTabNav = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.newD} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   newD: {
//     height: 500,
//     width: 500,
//     backgroundColor: 'red',
//     marginLeft: -70,
//     borderRadius: 500,
//     top: -280,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// })
