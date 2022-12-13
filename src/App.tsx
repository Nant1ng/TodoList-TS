import React, { FC, ChangeEvent, useState } from "react";
import styled from "styled-components";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { Task } from "./Interfaces";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  flex: 30%;
  background-color: purple;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 10px;
  font-size: 17px;
  border: 1px solid grey;
`;

const AddButton = styled.button`
  width: 70px;
  height: 87px;
  border: none;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  padding-left: 10px;
  cursor: pointer;
  background-color: blue;
  color: white;
`;

const TodoList = styled.div`
  flex: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
`;

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <Container>
      <Header>
        <InputContainer>
          <Input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Deadline (in Days)."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </InputContainer>
        <AddButton onClick={addTask}>Add Task</AddButton>
      </Header>
      <TodoList>
        {todoList.map((task: Task, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </TodoList>
    </Container>
  );
};

export default App;
