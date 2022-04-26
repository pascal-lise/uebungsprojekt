import { OutlinedInput, InputLabel, MenuItem, FormControl, ListItemText, Checkbox, Select }  from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Console from '../model/Console';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250, },
  },
};

interface ConsoleFilterProps {
  consoles: Console[]
  selectedConsoles: string[]
  handleChange: (event: SelectChangeEvent<string[]>) => void
}

export default function ConsoleFilter({consoles, selectedConsoles, handleChange}: ConsoleFilterProps) {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="console-filter">Consoles</InputLabel>
      <Select
        labelId="console-filter"
        id="console-filter"
        multiple
        value={selectedConsoles}
        onChange={handleChange}
        input={<OutlinedInput label="Consoles" />}
        renderValue={(selected: any) => selected.join(', ')}
        MenuProps={MenuProps}
      >
      {consoles.map((console: Console) => (
          <MenuItem key={console.name} value={console.name}>
            <Checkbox checked={selectedConsoles.includes(console.name)} />
            <ListItemText primary={console.name} />
          </MenuItem>
      ))}
      </Select>
    </FormControl>
  )
}