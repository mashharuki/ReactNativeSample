/**
 * サインアップ画面用のコンポーネントファイル
*/

import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';
import { Context, Status } from "../../../contexts/ui";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button, dismiss, TextFeild } from '../../atoms/';
import { useControlledComponent } from '../../../lib/hooks';

/**
 * SignUpコンポーネント
 */
function SignUp() {
  // コンテキスト用の変数
  const { setApplicationState } = React.useContext(Context);
  const mailAddress = useControlledComponent('');
  const password = useControlledComponent('');

  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <View style={styles.signUpContainer}>
        <TextFeild
          label="email"
          value={mailAddress.value}
          onChangeText={mailAddress.onChangeText}
          style={styles.signUpText}
          autoCompleteType="email"
        />
        <TextFeild
          label="password"
          value={password.value}
          onChangeText={password.onChangeText}
          style={styles.signUpText}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <Button onPress={() => setApplicationState(Status.AUTHORIZED)} style={styles.signUpButton} label="Register" />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignUp;
