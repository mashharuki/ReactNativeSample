/**
 * 削除ボタン用のコンポーネントファイル
 */

import React from "react";
import styles from "../../../StyleSheet";
import { IconButton } from "src/components/atoms";

/**
 * 削除処理用のインターフェース
 */
 interface RemoveTodo {
  (id: string): void;
};

/**
 * 引数用のインターフェース
 */
interface Props {
  state: {
    id: string;
  };
  actions: {
    removeTodo: RemoveTodo;
  };
};

/**
 * Componentコンポーネント
 */
function Component(props: Props) {
  // 引数から値を取得する。
  const {
    state: { id },
    actions: { removeTodo }
  } = props;

  /**
   * ボタンを押した時の処理
   */
  const onPress = React.useCallback(() => {
    removeTodo;
  }, [removeTodo]);

  return <IconButton onPress={onPress} icon="delete" style={styles.deleteButton} />;
}

export default  Component;
