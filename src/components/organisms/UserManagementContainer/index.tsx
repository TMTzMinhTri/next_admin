import * as React from 'react';

const UserManagementContainer: React.FC = () => {
  React.useEffect(() => {
    console.log('UserManagementContainer mounted');

    return () => {
      console.log('UserManagementContainer unmount');
    };
  }, []);
  return <div>UserManagementContainer</div>;
};

export default UserManagementContainer;
