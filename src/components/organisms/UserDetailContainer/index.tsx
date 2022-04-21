import * as React from 'react';

const UserDetailContainer: React.FC = () => {
  React.useEffect(() => {
    console.log('UserDetailContainer mounted');

    return () => {
      console.log('UserDetailContainer unmount');
    };
  }, []);
  return <div>UserDetailContainer</div>;
};

export default UserDetailContainer;
