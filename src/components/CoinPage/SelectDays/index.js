import { MenuItem, Select } from "@mui/material";
import React from "react";
import "./styles.css";

function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className="select-days" style={{ marginBottom: noPTag && "0" }}>
      {!noPTag && <p>Price change in </p>}
      <Select
        value={days}
        onChange={(e) => handleDaysChange(e)}
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--blue)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "var(--blue)",
            },
          },
        }}
      >
        <MenuItem value={1}>1 Days</MenuItem>
        <MenuItem value={3}>3 Days</MenuItem>
        <MenuItem value={5}>5 Days</MenuItem>
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;
