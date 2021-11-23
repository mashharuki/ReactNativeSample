/**
 * Statistics画面用のコンポーネントファイル
 */

import React from "react";
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DETAIL } from 'src/constants/path';
import { useNavigation } from '@react-navigation/core';

/**
 * Statisticsコンポーネントファイル
 */
function Statistics() {
  // ナビゲーション用の変数を用意する。
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Statistics</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Statistics;


