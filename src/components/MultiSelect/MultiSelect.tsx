import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import React from 'react';
import { AutocompleteChangeReason , AutocompleteChangeDetails} from '@mui/material/Autocomplete';
interface MultiSelectProps {
  options: [any];
  placeholder: string;
  label: string;
  handleChange: (event: React.SyntheticEvent<Element, Event>, value: string[], reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<string> | undefined) => void
}
export default function MultiSelect({ options, placeholder, label, handleChange }: MultiSelectProps) {

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        onChange={handleChange}
        multiple
        id="tags-standard"
        options={options}
        getOptionLabel={option => option}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </Stack>
  );
}

