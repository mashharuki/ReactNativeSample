/**
 * スタイルシートを定義するファイル
 */

import { StyleSheet } from "react-native";
import { COLOR } from '../src/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOR.WHITE,
  },
});

export default styles
