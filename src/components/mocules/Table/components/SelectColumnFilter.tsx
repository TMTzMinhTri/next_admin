import { MenuItem, TextField } from '@mui/material';
import React, { ReactElement } from 'react';
import { FilterProps } from 'react-table';

function SelectColumnFilter<T extends Record<string, unknown>>(props: FilterProps<T>): ReactElement {
  const { filterValue, render, setFilter, preFilteredRows, id } = props.column;

  const options = React.useMemo(() => {
    const options = new Set<any>();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...Array.from(options.values())];
  }, [id, preFilteredRows]);

  return (
    <TextField
      select
      label={render('Header')}
      value={filterValue || ''}
      onChange={(e) => {
        console.log(e);
      }}>
      <MenuItem value={''}>All</MenuItem>
      {options.map((option, i) => (
        <MenuItem key={i} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
export default SelectColumnFilter;
