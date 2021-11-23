/**
 * メインコンポーネントファイル
 * @format
 */

import React from 'react';
import { View, Text } from 'react-native';
import styles from './StyleSheet';

/**
 * Appコンポーネント
 */
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
};

export default App;
