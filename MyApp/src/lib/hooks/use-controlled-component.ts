/**
 * 値をセットするためのコンポーネントファイル
 */

import React from "react";

/**
 * useControlledComponentコンポーネント
 * @param initialValue
 */
function useControlledComponent<T>(initialValue: T) {
  // ステート変数
  const [ value, setValue ] = React.useState(initialValue);

  /**
   * 値が変更された時の処理関数
   */
  function onChangeText(newValue: T) {
    setValue(newValue);
  }

  return {
    value,
    onChangeText,
  };
}

export default useControlledComponent;
