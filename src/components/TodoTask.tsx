import React from "react";
import styled from "styled-components";
import { Task } from "../Interfaces";

const TaskContainer = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  color: white;
  margin: 15px;
`;

const TaskContent = styled.div`
  flex: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskName = styled.span`
  display: grid;
  place-items: center;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-right: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: purple;
`;

const TaskDeadline = styled.span`
  display: grid;
  place-items: center;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-right: none;
  background-color: purple;
`;

const DoneButton = styled.button`
  flex: 20%;
  height: 100%;
  border: none;
  background-color: green;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  cursor: pointer;
`;

interface Props {
  task: Task;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <TaskContainer>
      <TaskContent>
        <TaskName>{task.taskName}</TaskName>
        <TaskDeadline>{task.deadline}</TaskDeadline>
      </TaskContent>
      <DoneButton
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </DoneButton>
    </TaskContainer>
  );
};

export default TodoTask;
