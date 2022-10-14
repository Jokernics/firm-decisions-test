import { Button, styled } from "@mui/material";
import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from "react";
import { Itask } from "../../types/task";

const InputStyled = styled("input")({
  display: "block",
  border: "1px solid black",
  padding: 10,
  borderRadius: 5,
  marginTop: 10,
});

type props = {
  setTasks: Dispatch<SetStateAction<Itask[]>>;
};

const TaskForm = ({ setTasks }: props) => {
  const defaultFormState = {
    type: "",
    description: "",
    timeToDo: 0,
  };

  const [formState, setFormState] = useState(defaultFormState);

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const newTask = { ...formState, id: Date.now() };
    setTasks((prev) => [...prev, newTask]);
    setFormState(defaultFormState);
  };

  return (
    <div style={{ borderBottom: "1px solid black", marginBottom: "30px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <label>
          Task Type
          <InputStyled
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, type: e.target.value }))
            }
            value={formState.type}
            required
            type="text"
          />
        </label>
        <label>
          Description
          <InputStyled
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, description: e.target.value }))
            }
            value={formState.description}
            required
            type="text"
          />
        </label>
        <label>
          Time to do (min)
          <InputStyled
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, timeToDo: +e.target.value }))
            }
            value={formState.timeToDo}
            required
            type="number"
          />
        </label>
        <Button variant="outlined" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
