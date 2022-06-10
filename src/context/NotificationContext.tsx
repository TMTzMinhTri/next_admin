import * as React from 'react'

interface INotificationContext {}

const NotificationContext = React.createContext<INotificationContext>({})

const NotificationProvider: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => {
  React.useEffect(() => {
    console.log('init')
    return () => {
			console.log('unmount')
		}
  }, [])
  return <NotificationContext.Provider value={{}}>{children}</NotificationContext.Provider>
}

export default NotificationProvider
