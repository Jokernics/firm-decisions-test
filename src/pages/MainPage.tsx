import { Container } from "@mui/material";
import { useMemo, useState } from "react";
import TaskDateFilter from "../components/TaskFilters/TaskDateFilter";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";
import { tasksData } from "../data/tasksData";
import { Itask } from "../types/task";

const MainPage = () => {
  const [tasks, setTasks] = useState<Itask[]>(tasksData);
  const [minutesRange, setMinutesRange] = useState<number[]>([0, 3]);
  const maxMinutes = useMemo(
    () =>
      !!tasks.length
        ? tasks.sort((b, a) => a.timeToDo - b.timeToDo)[0].timeToDo
        : 0,
    [tasks]
  );
  const filteredTasks = useMemo(
    () =>
      tasks.filter(
        (item) =>
          +item.timeToDo >= minutesRange[0] && +item.timeToDo <= minutesRange[1]
      ),
    [minutesRange, tasks]
  );

  return (
    <Container sx={{ pt: 5, textAlign: "left" }}>
      <h2>Add Task</h2>
      <TaskForm {...{ setTasks }} />
      <h3>Task Filter</h3>
      <TaskDateFilter
        min={0}
        max={maxMinutes}
        {...{ minutesRange, setMinutesRange }}
      />
      <h2>Tasks List</h2>
      <TaskList tasks={filteredTasks} {...{ setTasks }} />
    </Container>
  );
};

export default MainPage;
