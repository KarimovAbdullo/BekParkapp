import Navigator from './navigation';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {
  LogBox,
  Platform,
  StatusBar,
  StyleSheet,
  UIManager,
  useColorScheme,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import R from './res';
import {store} from 'state';

import AppLogic from './AppLogic';

LogBox.ignoreLogs([
  'new NativeEventEmitter',
  'RCTBridge',
  '[react-native-gesture-handler]',
]);

const App = () => {
  const isDarkMode: boolean = useColorScheme() === 'dark';

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <Provider store={store}>
          <AppLogic>
            <StatusBar
              backgroundColor={
                isDarkMode
                  ? R.theme.dark.colors.backroundPrimary
                  : R.theme.light.colors.white
              }
              barStyle={isDarkMode ? 'dark-content' : 'dark-content'}
            />
            <Navigator theme={isDarkMode ? R.theme.dark : R.theme.light} />
          </AppLogic>
        </Provider>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
