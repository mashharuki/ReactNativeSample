/**
 * ホーム画面用のコンポーネントファイル
 */

import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DETAIL } from 'src/constants/path';
import styles from '../../../StyleSheet';

/**
 * Homeコンポーネント
 */
function Home() {
  // ナビゲーション用の変数を用意する。
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigate(DETAIL)}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
