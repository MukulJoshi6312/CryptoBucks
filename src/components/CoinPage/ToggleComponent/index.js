import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import './style.css'

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (
    <div className="select-comp"
      style={{
       
      }}
    >
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(e) => {
          handlePriceTypeChange(e);
        }}
        sx={{
          "& .Mui-selected": {
            color: "var(--white) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--blue)!important",
            borderColor: "unset",
            color: "var(--blue) !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--white) !important",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-price-btn">Prices</ToggleButton>
        <ToggleButton value="market_caps" className="toggle-price-btn">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-price-btn">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
