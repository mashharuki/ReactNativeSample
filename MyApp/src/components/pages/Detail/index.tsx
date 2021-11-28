/**
 * Detail画面用のコンポーネントファイル
 */
import React from 'react';
import { View } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { useControlledComponent } from "../../../lib/hooks";
import { Button, TextFeild } from "../../../components/atoms";
import styles from "../../../StyleSheet";

/**
 * 編集機能用のインターフェース
 */
interface TodoEditActions {
  // Todoを編集するインターフェース
  changeTodo: (
    id: string,
    newValue: {
      title: string;
      detail: string;
    },
  ) => void;
}

/**
 * 引数用のインターフェース
 */
interface Props {
  actions: TodoEditActions;
}

/**
 * パラメータ用のインターフェース
 */
interface Params {
  id: string;
  isEditable: boolean;
  title: string;
  detail: string;
}

/**
* Detailコンポーネント
*/
function Detail() {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<Record<string, Params>, string>>();
  const { isEditable, title: titleInitialValue, detail: detailInitialValue } = params;
  const title = useControlledComponent('');
  const detail = useControlledComponent('');

  /**
   * ボタンを押した時の処理
   */
  const onSubmit = React.useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={styles.detailContainer}>
      <TextFeild disabled={isEditable} label="title" value={title.value} onChangeText={title.onChangeText} style={styles.detailTextFeild} />
      <TextFeild disabled={isEditable} label="detail" value={detail.value} onChangeText={detail.onChangeText} style={styles.detailTextFeild} />
      { isEditable && <Button onPress={onSubmit} label="Submit" style={styles.indexButton}/> }
    </View>
  );
}

export default Detail;
