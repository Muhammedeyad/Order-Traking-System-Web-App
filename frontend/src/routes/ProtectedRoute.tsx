import { Navigate } from "react-router-dom"
import { UseUserContext } from "../context/UserContext/UserContext"


export const ProtectedRoute = ({ allowedRoutes, children }) => {

  const { user } = UseUserContext()


  const loggedRouteName = user?.usertypeid == 1 ? "/admin/dashboard" : user?.usertypeid == 4 ? "/agent/dashboard" : "/"
  if (!user?.userid) {
    return <Navigate to={'/login'} />
  }

  if (!allowedRoutes.includes(user.usertypeid)) {
    return <Navigate to={`${loggedRouteName}`} />
  }

  return (
    <div>{children}</div>
  )
}
