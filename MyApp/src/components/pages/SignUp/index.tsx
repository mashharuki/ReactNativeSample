/**
 * サインアップ画面用のコンポーネントファイル
*/

import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';
import { Context, Status } from "../../../contexts/ui";
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * SignUpコンポーネント
 */
function SignUp() {
  // コンテキスト用の変数
  const { setApplicationState } = React.useContext(Context);

  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <TouchableOpacity onPress={() => setApplicationState(Status.AUTHORIZED)}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;
