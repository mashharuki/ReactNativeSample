/**
 * サインイン画面用のコンポーネント
 */

import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../StyleSheet';
import { Context, Status } from "../../../contexts/ui";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button, dismiss, TextFeild } from '../../atoms/';
import { useControlledComponent } from '../../../lib/hooks';
import SignInWithGoogle from './SignInWithGoogle';

/**
 * SignInコンポーネント
 */
function SignIn() {
  // コンテキスト用の変数
  const { setApplicationState } = React.useContext(Context);
  const mailAddress = useControlledComponent('');
  const password = useControlledComponent('');

  return (
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.signInContainer}>
          <View style={styles.signInTextContainer}>
            <TextFeild
              label="email"
              value={mailAddress.value}
              onChangeText={mailAddress.onChangeText}
              style={styles.signInText}
              autoCompleteType="email"
            />
            <TextFeild
              label="password"
              value={password.value}
              onChangeText={password.onChangeText}
              style={styles.signInText}
              autoCompleteType="password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.signInButtonContainer}>
            <SignInWithGoogle />
            <Button onPress={() => setApplicationState(Status.AUTHORIZED)} label="SignIn" style={styles.signInButton}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
}

export default SignIn;
