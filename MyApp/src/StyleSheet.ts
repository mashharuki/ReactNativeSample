/**
 * スタイルシートを定義するファイル
 */

import { StyleSheet } from "react-native";
import { COLOR } from '../src/constants/theme';
import { width } from "./lib/window";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOR.WHITE,
  },
  headerStyle: {
    backgroundColor: COLOR.MAIN,
  },
  headerTintColor: {
    color: COLOR.PRIMARY,
  },
  cardStyle: {
    backgroundColor: COLOR.MAIN
  },
  drawerStyle: {
    backgroundColor: COLOR.MAIN
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '900',
    color: COLOR.WHITE,
  },
  image: {
    width: width * 2 / 3,
    flex: 1,
    resizeMode: 'contain',
  },
});

export default styles
