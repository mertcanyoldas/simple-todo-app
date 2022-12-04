/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// !'^+%&/()=?_ "" '' <> ; 

import React from 'react';
import { Provider } from 'react-redux';
import Store from './src/Store';
import {TodoApp} from './src/features/todos/TodoApp';

export default function App() {
  return(
    <Provider store={Store}>
      <TodoApp />
    </Provider>
  );
}



