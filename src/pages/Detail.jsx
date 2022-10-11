import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/reducer/reducer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Detail = () => {
  const dispatch = useDispatch();
  //state에잇는값 todos에todo불러오기
  const todo = useSelector((state) => state.todos.todo);
  //id
  const { id } = useParams();
  //다른페이지로 이동하는함수
  const navigate = useNavigate();
  //useEffect id를 보낼때마다 랜더링시켜준다??????보류
  //아이디값이 호출될때 렌더링???????
  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <div className="detail-box">
      <Card style={{ width: "1000px", height: "600px" }}>
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            ID :{todo.id}
          </Card.Subtitle>
          <Card.Text>{todo.body}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
