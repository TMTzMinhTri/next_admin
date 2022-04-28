import * as React from 'react';

const ExcelContainer: React.FunctionComponent<any> = () => {
  React.useEffect(() => {
    console.log('UserDetailContainer mounted');

    return () => {
      console.log('UserDetailContainer unmount');
    };
  }, []);
  return <div>UserDetailContainer</div>;
};

export default ExcelContainer;
