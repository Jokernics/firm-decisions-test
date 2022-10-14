import { Itask } from "../../types/task";
import { IconButton, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";

type props = {
  task: Itask;
  setTasks: Dispatch<SetStateAction<Itask[]>>;
};

const ItemWrapperStyled = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: "lightgrey",
  marginBottom: 10,
  borderRadius: 15,
  boxShadow: "10px, 10px, 10px grey",
  padding: "5px 25px",
  textAlign: "left",
});

export default function TaskItem({ task, setTasks }: props) {
  
  const deleteTask = () => {
    setTasks((prev) => prev.filter((i) => i.id !== task.id));
  };

  return (
    <ItemWrapperStyled>
      <p style={{ width: "20%", fontSize: 20 }}>{task.type}</p>
      <p style={{ width: "50%" }}>{task.description}</p>
      <p style={{ width: "20%" }}>{task.timeToDo}</p>
      <div onClick={deleteTask} style={{ width: "10%" }}>
        <IconButton
          aria-label="close"
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </ItemWrapperStyled>
  );
}
