/**
 * 読み込み中用のコンポーネントファイル
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../../StyleSheet';
import * as UiContext from "../../../contexts/ui";

/**
 * 状態変化ボタン
 */
function ChangeStateButton(props: { state: UiContext.Status }) {
  const { setApplicationState } = React.useContext(UiContext.Context);
  const { state } = props;

  return (
    <TouchableOpacity onPress={() => setApplicationState(state)}>
      <Text style={styles.text}>
        Change state to {state}
      </Text>
    </TouchableOpacity>
  );
}

/**
* Loadingコンポーネント
*/
function Loading() {
  return (
    <View style={styles.container}>
      <ChangeStateButton state={UiContext.Status.AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.UN_AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.FIRST_OPEN} />
    </View>
  );
}

export default Loading;
