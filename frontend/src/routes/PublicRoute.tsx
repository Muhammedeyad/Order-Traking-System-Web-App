import { UseUserContext } from '../context/UserContext/UserContext'
import { Navigate } from 'react-router-dom'

export const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const { user } = UseUserContext()

    const loggedRouteName = user?.usertypeid == 1 ? "/admin/dashboard" : user?.usertypeid == 4 ? "/agent/dashboard" : "/"



    if (user) {
        return <Navigate to={`${loggedRouteName}`} />
    }
    return (
        <div>{children}</div>
    )
}
