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
  button: {
    marginBottom: 40,
    width: 300,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingVertical: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    flex: 1,
    padding: 16,
  },
  signUpText: {
    marginVertical: 20,
  },
  signUpButton: {
    marginTop: 20,
  },
  signInContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  signInText: {
    marginVertical: 20,
  },
  signInButton: {
    marginTop: 50,
  },
  signInTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  signInButtonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default styles
