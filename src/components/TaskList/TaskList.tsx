import { styled } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Itask } from "../../types/task";
import TaskItem from "./TaskItem";

type props = {
  tasks: Itask[];
  setTasks: Dispatch<SetStateAction<Itask[]>>;
};

const HeaderWrapperStyled = styled("div")({
  display: "flex",
  alignItems: "center",
  textAlign: "left",
  justifyContent: "flex-start",
  padding: "5px 25px",
}); 

const TaskList = ({ tasks, setTasks }: props) => {
  return (
    <div>
      <HeaderWrapperStyled>
        <p style={{ width: "20%" }}>Type</p>
        <p style={{ width: "50%" }}>description</p>
        <p style={{ width: "20%" }}>Time to do</p>
        <div style={{ width: "10%" }}></div>
      </HeaderWrapperStyled>
      {tasks.map((task, index) => (
        <TaskItem key={task.id} {...{ task, setTasks }} />
      ))}
    </div>
  );
};

export default TaskList;
