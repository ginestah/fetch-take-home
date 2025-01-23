import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

export default function Toast({ message }: { message: string }) {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={(_event) => {
        setOpen(false)
      }}
      message={message}
    />
  )
}