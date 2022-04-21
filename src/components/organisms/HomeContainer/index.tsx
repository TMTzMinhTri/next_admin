// import { notificationActions } from '@/store/notification';
import { Button, Card, CardContent, Container } from '@mui/material';
import * as React from 'react';
// import { useDispatch } from 'react-redux';
// import { Column } from 'react-table';
// import { Table } from '@/components';
import SelectColumnFilter from '@/components/mocules/Table/components/SelectColumnFilter';

type IUser = {
  id: string;
  name: string;
  phone: string;
  username: string;
  website: string;
};

// const columns: ReadonlyArray<Column<IUser>> = [
//   {
//     Header: 'id',
//     accessor: 'id',
//     disableGroupBy: true,
//     disableFilters: true,
//   },
//   {
//     Header: 'name',
//     accessor: 'name',
//     disableGroupBy: true,
//     disableFilters: true,
//   },
//   {
//     Header: 'phone',
//     accessor: 'phone',
//     disableGroupBy: true,
//     disableFilters: true,
//   },
//   {
//     Header: 'username',
//     accessor: 'username',
//     disableGroupBy: true,
//     disableFilters: true,
//   },
//   {
//     Header: 'website',
//     accessor: 'website',
//     disableGroupBy: true,
//     // disableFilters: true,
//     filter: 'includes',
//     Filter: SelectColumnFilter,
//   },
// ];

const HomeContainer: React.FC = () => {
  const [users, setUsers] = React.useState([]);
  // const dispatch = useDispatch();

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };
  console.log(users);

  React.useEffect(() => {
    console.log('home mounted');
    getUsers();

    return () => {
      console.log('home unmount');
    };
  }, []);

  const showToast = () => {
    // dispatch(
    //   notificationActions.showToast({
    //     message: 'test',
    //     options: { variant: 'success' },
    //   })
    // );
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Button onClick={showToast}>toast</Button>
          {/* <Table<IUser> data={users} columns={columns} /> */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default HomeContainer;
