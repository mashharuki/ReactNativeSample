/**
 * サインイン・アウト選択画面用のコンポーネントファイル
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../../StyleSheet';
import { useNavigation } from '@react-navigation/core';
import { SIGN_IN, SIGN_UP } from "../../../constants/path";
import { Button, Logo } from '../../atoms';

/**
 * ChooseLoginコンポーネント
 */
function ChooseLogin() {
  // ナビゲーション用の変数を用意する。
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Logo/>
      </View>
      <View style={styles.contentContainer}>
        <Button onPress={() =>  navigate(SIGN_IN)} style={styles.button} label="Sign In"/>
        <Button onPress={() =>  navigate(SIGN_UP)} style={styles.button} label="Sign Up"/>
      </View>
    </View>
  );
}

export default ChooseLogin;
