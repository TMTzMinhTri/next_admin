import * as React from 'react';
import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from '@mui/material';
import { useTable, TableInstance, Row, TableOptions, Cell } from 'react-table';
import { hooks } from './tableHooks';
import { KeyboardArrowRight, KeyboardArrowUp } from '@mui/icons-material';
import { cellProps, headerProps } from './props';

export interface TableProperties<T extends Record<string, unknown>> extends TableOptions<T> {
  onAdd?: (instance: TableInstance<T>) => React.MouseEventHandler;
  onDelete?: (instance: TableInstance<T>) => React.MouseEventHandler;
  onEdit?: (instance: TableInstance<T>) => React.MouseEventHandler;
  onClick?: (row: Row<T>) => void;
}

const Table = <T extends Record<string, unknown>>(
  props: React.PropsWithChildren<TableProperties<T>>,
): React.ReactElement => {
  const { columns, onAdd, onDelete, onEdit, onClick } = props;
  const { getTableProps, headerGroups, getTableBodyProps, page, prepareRow, state } = useTable<T>(
    {
      ...props,
      columns,
    },
    ...hooks,
  );
  const { role: tableRole, ...tableProps } = getTableProps();

  const cellClickHandler = (cell: Cell<T>) => () => {
    onClick && !cell.column.isGrouped && !cell.row.isGrouped && cell.column.id !== '_selector' && onClick(cell.row);
  };

  return (
    <MuiTable {...tableProps}>
      <TableHead>
        {headerGroups.map((headerGroup) => {
          const {
            key: headerGroupKey,
            title: headerGroupTitle,
            role: headerGroupRole,
            ...getHeaderGroupProps
          } = headerGroup.getHeaderGroupProps();
          return (
            <TableRow key={headerGroupKey} {...getHeaderGroupProps}>
              {headerGroup.headers.map((column) => {
                const style = {
                  textAlign: column.align ? column.align : 'left ',
                } as React.CSSProperties;
                const { key: headerKey, role: headerRole, ...getHeaderProps } = column.getHeaderProps(headerProps);
                const { title: groupTitle = '', ...columnGroupByProps } = column.getGroupByToggleProps();
                const { title: sortTitle = '', ...columnSortByProps } = column.getSortByToggleProps();

                return (
                  <TableCell key={headerKey} {...getHeaderProps}>
                    {column.canGroupBy && (
                      <Tooltip title={groupTitle}>
                        <TableSortLabel
                          active
                          direction={column.isGrouped ? 'desc' : 'asc'}
                          IconComponent={KeyboardArrowRight}
                          {...columnGroupByProps}
                        />
                      </Tooltip>
                    )}
                    {column.canSort ? (
                      <Tooltip title={sortTitle}>
                        <TableSortLabel
                          active={column.isSorted}
                          direction={column.isSortedDesc ? 'desc' : 'asc'}
                          {...columnSortByProps}
                          style={style}>
                          {column.render('Header')}
                        </TableSortLabel>
                      </Tooltip>
                    ) : (
                      <div style={style}>{column.render('Header')}</div>
                    )}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                    {/* {column.canResize && <ResizeHandle column={column} />} */}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          const { key: rowKey, role: rowRole, ...getRowProps } = row.getRowProps();
          return (
            <TableRow key={rowKey} {...getRowProps}>
              {row.cells.map((cell) => {
                const { key: cellKey, role: cellRole, ...getCellProps } = cell.getCellProps(cellProps);
                return (
                  <TableCell key={cellKey} {...getCellProps} onClick={cellClickHandler(cell)}>
                    {cell.isGrouped ? (
                      <>
                        <TableSortLabel
                          active
                          direction={row.isExpanded ? 'desc' : 'asc'}
                          IconComponent={KeyboardArrowUp}
                          {...row.getToggleRowExpandedProps()}
                        />{' '}
                        {cell.render('Cell', { editable: false })} ({row.subRows.length})
                      </>
                    ) : cell.isAggregated ? (
                      cell.render('Aggregated')
                    ) : cell.isPlaceholder ? null : (
                      cell.render('Cell')
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
