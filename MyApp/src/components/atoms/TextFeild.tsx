/**
 * テキストフィールド用のコンポーネントファイル
 */

import React from "react";
import { ViewStyle, Keyboard } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../../../src/StyleSheet";
import { COLOR } from "../../constants/theme";

/**
 * 引数用のインターフェース
 */
interface Props {
  label: string;
  value: string;
  onChangeText?: (str: string) => void;
  style?: ViewStyle;
  autoCompleteType?:
    | 'off'
    | 'username'
    | 'password'
    | 'email'
    | 'name'
    | 'tel'
    | 'street-address'
    | 'postal-code'
    | 'cc-number'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year';
  secureTextEntry?: boolean;
  disabled?: boolean;
};

// テキストフィールド用のテーマカラー
const theme = {
  dark: true,
  colors: {
    primary: COLOR.PRIMARY,
    background: COLOR.MAIN,
    text: COLOR.WHITE,
    placeholder: COLOR.PRIMARY,
  }
};

/**
 * TextFeildコンポーネント
 */
export default function TextFeild(props: Props) {
  // 引数から値を取得する。
  const { label, value, onChangeText = () => {}, style, autoCompleteType, secureTextEntry, disabled } = props;

  return (
    <TextInput
      label={label}
      value={value}
      disabled={disabled}
      onChangeText={onChangeText}
      mode="outlined"
      theme={theme}
      style={style}
      autoCompleteType={autoCompleteType}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
    />
  );
};

/**
 * キーボードを無効化するための関数
 */
export function dismiss() {
  Keyboard.dismiss();
}
