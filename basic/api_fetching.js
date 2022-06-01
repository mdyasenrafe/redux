const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

// action type
const get_todo_req = "GET_TODO_REQ";
const get_todo_success = "GET_TODO_SUCCESS";
const get_todo_fail = "GET_TODO_FAIL";

// state
const intialTodo = {
  todos: [],
  loading: false,
  error: null,
};

const getTodoReq = () => {
  return {
    type: get_todo_req,
  };
};

const getTodoSuccess = (data) => {
  return {
    type: get_todo_success,
    payload: data,
  };
};

const getTodoFail = (err) => {
  return {
    type: get_todo_fail,
    error: err,
  };
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodoReq());
    axios
      .get("https://jsonplaceholder.typicode.com/todosa")
      .then((res) => {
        // console.log(res.data);
        const data = res.data;
        // 5 data need to pass to reducer
        const todos = data.slice(0, 5);

        dispatch(getTodoSuccess(todos));
      })
      .catch((err) => {
        dispatch(getTodoFail(err.message));
      });
  };
};

const todoReducers = (state = intialTodo, action) => {
  switch (action.type) {
    case get_todo_req:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case get_todo_success:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case get_todo_fail:
      return {
        ...state,
        loading: false,
        todos: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const store = createStore(todoReducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
