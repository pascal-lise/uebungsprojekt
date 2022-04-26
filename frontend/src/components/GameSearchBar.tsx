import { TextField } from "@mui/material"

interface GameSearchBarProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ConsoleFilter({handleChange}: GameSearchBarProps) {
  return (
    <TextField id="outlined-basic" label="Search Game" variant="outlined" margin='dense' onChange={handleChange}/>
  )
}