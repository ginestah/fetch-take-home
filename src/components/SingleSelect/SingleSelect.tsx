import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { SelectChangeEvent } from "@mui/material";
interface SingleSelectProps {
  value: any;
  setValue: (value: any) => void;
  options: { value: string, name: string }[];
  label: string;
}
export default function SingleSelect({ value, setValue, options, label }: SingleSelectProps) {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select label='Sort order' value={value} onChange={(e: SelectChangeEvent) => setValue(e.target.value)}>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}