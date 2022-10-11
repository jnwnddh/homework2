import { useState } from "react";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer/reducer";

const Form = () => {
  //이거는 구글링쳐도 안나옴 아이디값인거같음
  //고유한아이디값을주는함수
  const id = nextId();
  //usedispatch리덕스에게 보내주는훅 보낼때 이거반드시 써야됨*******
  console.log(id);
  const dispatch = useDispatch();
  //todo, setTodo 새로 바뀔값넣어주기
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  console.log(todo);
  //   const todos = useSelector((state) => state.todos.todos);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
    //계속바꾼다 벨류값저장 바디 타이틀
  };
  //
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    dispatch(addTodo({ ...todo, id }));
    //디스패치 (dispatch)
    //디스패치는 스토어의 내장함수 중 하나입니다. 디스패치는 액션을 발생 시키는 것 이라고 이해하시면 됩니다. dispatch 라는 함수에는 액션을 파라미터로 전달합니다.. dispatch(action) 이런식으로 말이죠.
    //onsubmit 정의
    //폼이 제출 될 때 태그의 onsubmit 이벤트가 발생합니다.
    //폼(form)이 제출(submit)될 때 이벤트 발생.
    //그렇게 호출을 하면, 스토어는 리듀서 함수를 실행시켜서 해당 액션을 처리하는 로직이 있다면 액션을 참고하여 새로운 상태를 만들어줍니다.
    //dis패치보내준다 addTOdo한테 id값을; 그리고 새로운값 setTodo({})넣어주기 저기 아이디가들어감
    //dispatch는 액션이 발생했다는 것을 리덕스에게 알려주는 함수
    //addtodo에 ...todo에 아이디값을 추가한다,내용추가
    //바뀐값호출
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
};
//zzzz
export default Form;
