/**
 * Input画面用のコンポーネント
 */

import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import IconButton from "../../../components/atoms/IconButton";
import { useNavigation } from "@react-navigation/core";
import { useControlledComponent } from "../../../lib/hooks";
import { Button, dismiss, TextFeild } from "../../../components/atoms";
import styles from "../../../StyleSheet";
import { COLOR } from "../../../constants/theme";

/**
 * Inputコンポーネント
 */
function Input() {
  // タイトルと詳細用の変数を用意する。
  const title = useControlledComponent('');
  const detail = useControlledComponent('');

  const { goBack } = useNavigation();

  /**
   * 戻る処理用の関数
   */
  const back = React.useCallback(() => {
    goBack();
  }, [goBack]);

  /**
   * todoを追加するための関数
   */
  const addTodo = React.useCallback(() => {
    back();
    title.onChangeText('');
    detail.onChangeText('');
  }, [back, title, detail]);

  return (
    <SafeAreaView style={styles.indexContainer}>
      <TouchableWithoutFeedback onPress={dismiss}>
        <View style={styles.indexContainer}>
          <IconButton icon="close" size={30} iconColor={COLOR.PRIMARY} onPress={back} style={styles.indexIconButton} />
          <TextFeild label="title" value={title.value} onChangeText={title.onChangeText} style={styles.indexText} />
          <TextFeild label="detail" value={detail.value} onChangeText={detail.onChangeText} style={styles.indexText} />
          <Button onPress={addTodo} label="Add" style={styles.indexIconButton} disabled={!title.value} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default Input;
