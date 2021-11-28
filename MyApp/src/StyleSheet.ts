/**
 * スタイルシートを定義するファイル
 */

import { StyleSheet } from "react-native";
import { COLOR } from '../src/constants/theme';
import { width } from "./lib/window";

/**
 * スタイル用のコンポーネント
 */
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
  pagination: {
    backgroundColor: COLOR.CAROUSEL_BACKGROUND,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: COLOR.WHITE
  },
  carouselItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLOR.MAIN,
  },
  carouselItemText: {
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 40,
    color: COLOR.WHITE,
  },
  carouselItemTextContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width - 40,
    paddingVertical: 10,
  },
  carouselItemImageContainer: {
    flex: 2,
  },
  carouselItemContentContainer: {
    flex: 3,
    paddingTop: 30,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  initialContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLOR.MAIN,
  },
  iconButton: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 0,
    margin: 0,
  },
  todoContentContainer: {
    backgroundColor: COLOR.MAIN,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  todoTitle: {
    fontWeight: 'bold',
    fontSize: 32,
    color: COLOR.WHITE,
  },
  todoDoneText: {
    textDecorationLine: 'line-through',
  },
  todoDetail: {
    fontSize: 16,
    color: COLOR.WHITE,
  },
  doneButton: {
    backgroundColor: COLOR.PRIMARY,
  },
  done: {
    backgroundColor: COLOR.MAIN_DARK,
  },
  deleteButton: {
    backgroundColor: COLOR.CAUTION,
  },
  todoModuleContainer: {
    backgroundColor: COLOR.MAIN,
    height: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoOrgContainer: {
    alignSelf: 'stretch',
  },
  todoOrgSeparator: {
    height: 1,
    backgroundColor: COLOR.SECONDARY,
  },
  homeButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: COLOR.MAIN_DARK,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  indexContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: COLOR.MAIN,
  },
  indexText: {
    marginBottom: 16,
  },
  indexButton: {
    marginTop: 20,
  },
  indexIconButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default styles
