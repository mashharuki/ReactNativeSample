/**
 * サインイン画面用のコンポーネント
 */

import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';
import { Context, Status } from "../../../contexts/ui";
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * SignInコンポーネント
 */
function SignIn() {
  // コンテキスト用の変数
  const { setApplicationState } = React.useContext(Context);

  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={() => setApplicationState(Status.AUTHORIZED)}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignIn;
