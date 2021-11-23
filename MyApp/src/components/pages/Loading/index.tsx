/**
 * 読み込み中用のコンポーネントファイル
 */

import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';

/**
* Loadingコンポーネント
*/
function Loading() {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  );
}

export default Loading;
