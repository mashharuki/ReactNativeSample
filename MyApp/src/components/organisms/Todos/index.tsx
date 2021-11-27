/**
 * Todo関連のコンポーネントを管理するファイル
 * (複数のTodoを表示する。)
 */

import React from 'react';
import { FlatList, StatusBarIOS, View } from 'react-native';
import styles from 'src/StyleSheet';
import * as Todo from './Todo';

export { Todo };
export type State = Array<Todo.State>;

// 編集状態及び読み取り専用状態のインターフェースを用意する。
interface EditableProps {
  isEditable: true;
  todos: State;
  actions: Todo.EditableActions;
};

interface ReadonlyProps {
  isEditable: false;
  todos: State;
  header: React.ReactElement;
  actions: Todo.ReadonlyActions;
};

type Props = EditableProps | ReadonlyProps;

/**
 * Todosコンポーネント
 */
function Todos(props: Props) {
  if(props.isEditable) {
    return (
      <FlatList
        style={styles.todoOrgContainer}
        data={props.todos}
        renderItem={({ item }) => <Todo.Component isEditable={props.isEditable} state={item} actions={props.actions} />}
        ItemSeparatorComponent={() => <View style={styles.todoOrgSeparator} /> }
        keyExtractor={item => item.id}
      />
    );
  }

  return (
    <FlatList
        style={styles.todoOrgContainer}
        data={props.todos}
        renderItem={({ item }) => <Todo.Component isEditable={props.isEditable} state={item} actions={props.actions} />}
        ItemSeparatorComponent={() => <View style={styles.todoOrgSeparator} /> }
        keyExtractor={item => item.id}
        ListHeaderComponent={props.header}
      />
  );
}

export default Todos;
