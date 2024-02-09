import { useEffect } from "react";
import { useUserContext } from "../hooks/ContextHooks"

const Logout = () => {
  const {handleLogout} = useUserContext()

  useEffect(() => {handleLogout();},[])
  return <p>Logout</p>

}
export default Logout
