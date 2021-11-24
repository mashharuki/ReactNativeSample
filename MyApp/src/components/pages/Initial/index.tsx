/**
 * 初期画面用のコンポーネントファイル
 */

import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';

/**
 * Initialコンポーネント
 */
function Initial() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Initial
      </Text>
    </View>
  );
}

export default Initial;

