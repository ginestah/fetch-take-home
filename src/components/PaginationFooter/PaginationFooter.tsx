import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationFooter({count, handleChange, page}: {count: number, handleChange: (event: React.ChangeEvent<unknown>, value: number) => void, page: number}) {
  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}
