import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
      <header>
        <h1>My App</h1>
      </header>
      <nav>
      <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>



          </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
        </>
    )
}
export default Layout
