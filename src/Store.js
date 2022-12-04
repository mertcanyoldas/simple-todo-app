// !'^+%&/()=?_ "" '' <> ; :

import {configureStore} from "@reduxjs/toolkit";
import todosSlice from "./features/todos/todosSlice";

const reducer = {
    todos: todosSlice,
};

const store = configureStore({
    reducer: reducer,
    devTools: true,
});

export default store;

