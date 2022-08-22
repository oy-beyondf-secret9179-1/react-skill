import React from "react";
import "../components/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리 하기</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
