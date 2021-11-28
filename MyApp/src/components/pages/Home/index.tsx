/**
 * ホーム画面用のコンポーネントファイル
 */

import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Todos, { Todo }  from '../../organisms/Todos';
import { DETAIL, INPUT } from '../../../constants/path';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../../../StyleSheet';
import { COLOR } from '../../../constants/theme';

/**
 * テスト用に表示するTodoデータ
 */
const todos = [
  {
    id: '1',
    title: 'Todo',
    detail: 'to do',
    isDone: false,
  },
  {
    id: '2',
    title: 'Done',
    detail: 'done task',
    isDone: true,
  },
];

/**
 * Homeコンポーネント
 */
function Home() {
  // ナビゲーション用の変数を用意する。
  const { navigate } = useNavigation();

  /**
   * ボタンを押した時の処理
   */
  const onPress = React.useCallback(() =>{
    navigate(INPUT);
  }, [navigate]);

  /**
   * 詳細画面に遷移するためのボタンを押した時の処理
   */
  const gotoDetail = React.useCallback((state: Todo.State, isEditable: boolean) => {
    navigate(DETAIL, {...state, isEditable});
  }, [navigate]);

  /**
   * 処理をまとめた関数
   */
  const actions = React.useMemo(() => ({
    removeTodo: () => {},
    toggleTodo: () => {},
    gotoDetail,
  }), [gotoDetail]);

  return (
    <View style={styles.container}>
      <Todos isEditable todos={todos} actions={{ ...actions, gotoDetail }} />
      <TouchableOpacity onPress={onPress} style={styles.homeButton}>
        <Icon color={COLOR.PRIMARY} size={24} name="plus" />
      </TouchableOpacity>
    </View>
  );
}

export default Home;
