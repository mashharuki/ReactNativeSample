/**
 * Todoの完了状態ボタン用のコンポーネントファイル
 */

import React from "react";
import styles from "../../../StyleSheet";
import { IconButton } from "src/components/atoms";

/**
 * トグル用のインターフェース
 */
interface ToggleTodo {
  (id: string): void;
};

/**
 * 引数用のインターフェース
 */
interface Props {
  state: {
    id: string;
    isDone?: boolean;
  };
  actions: {
    toggleTodo: ToggleTodo;
    closeRow: () => void;
  };
};

/**
 * Componentコンポーネント
 */
function Component(props: Props) {
  // 引数から値を取得する。
  const {
    state: { id, isDone },
    actions : { toggleTodo, closeRow }
   } = props;

   /**
    * ボタンを押した時の処理
    */
   const onPress = React.useCallback(async () => {
     toggleTodo(id);
     closeRow ();
   }, [id, closeRow, toggleTodo]);

   return (
     <IconButton
      onPress={onPress}
      icon={ isDone ? 'restore' : 'check' }
      style={ isDone ? styles.done : styles.doneButton }
     />
   );
}

export default Component;
