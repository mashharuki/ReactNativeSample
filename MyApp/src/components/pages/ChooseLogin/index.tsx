/**
 * サインイン・アウト選択画面用のコンポーネントファイル
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../../StyleSheet';
import { useNavigation } from '@react-navigation/core';
import { SIGN_IN, SIGN_UP } from "../../../constants/path";

/**
 * ChooseLoginコンポーネント
 */
function ChooseLogin() {
  // ナビゲーション用の変数を用意する。
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>ChooseLogin</Text>
      <TouchableOpacity onPress={() => navigate(SIGN_IN)}>
        <Text>go to sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SIGN_UP)}>
        <Text>go to sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChooseLogin;
