import { Slider } from "@mui/material";

type props = {
  min: number;
  max: number;
  minutesRange: number[];
  setMinutesRange: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function TaskDateFilter({
  min,
  max,
  minutesRange,
  setMinutesRange,
}: props) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setMinutesRange(newValue as number[]);
  };

  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <h3>{min}</h3>
      <Slider
        name="slider"
        value={minutesRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        min={min}
        max={max}
        step={1}
      />
      <h3>{max}</h3>
    </div>
  );
}
