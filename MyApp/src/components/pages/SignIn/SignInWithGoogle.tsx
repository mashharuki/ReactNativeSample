/**
 * Gooleのサインインボタン用のコンポーネントファイル
 */

import * as React from 'react';
import Button from '../../atoms/Button';
import { Context, Status } from "../../../contexts/ui";

/**
 * SignInWithGoogleコンポーネント
 */
function SignInWithGoogle() {
  // コンテキスト用の変数を定義する。
  const { setApplicationState } = React.useContext(Context);

  return <Button onPress={() => setApplicationState(Status.AUTHORIZED)} icon="google" label="Sign In with Google"/>;
};

export default SignInWithGoogle;
