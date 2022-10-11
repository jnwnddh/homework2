const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
//각각 액션 이름 정하기

//addtodo더하기 추가하는 액션을넣어주고 매개변수 payload넣어준다
export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};
//deletetodo 삭제하는 투두 액션을넣어준다
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
//togglestatustodo isdone왔다갓다 하는 투두 액션을 넣어준다
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};
//상세 페이지에서 특정 todo만 조회하는 액션을넣어준다
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};
//여기에 값들넣어주기 todos초기값 todo 바꿀값
//todos는왜 [{}]두개넣어주고 todo는왜 {}만넣어주는지?
const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      body: "리액트 어려움",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};
//이제 이니셜스트이트에 액션들을 넣어주기
//todos가 위에있는 todos의 값인지?새함수를만든것인지
const todos = (state = initialState, action) => {
  //액션의타입 ==이름
  switch (action.type) {
    case ADD_TODO:
      //...state필수 까다롭기때문에 일일이 경로다적어줘야됨 ...state에 todos에 add액션을 넣어준다
      //귀찮은놈이다
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    //삭제하는 액션
    case DELETE_TODO:
      return {
        //...state적어주고
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload), //걸러준다 아이디가아이디인걸삭제새로운배열로반환
      };
    //취소완료취소완료 왓다갓다 해주는거 마찬가지...state 적어주고 todos.map 그배열을돌고돌아서 리턴 이즈돈에 이즈돈이 아닌것
    //전 todoList랑 동일
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    //상세 페이지에서 특정 투두만 조회하는 액션
    case GET_TODO_BY_ID:
      return {
        ...state,
        //투두에 아이디값을 찾는다
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;
