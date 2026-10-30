import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
const linkClass = ({ isActive }) =>
    isActive ? 'text-brand' : 'text-zinc-100 transition hover:text-white'

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/90 p-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-zinc-100">
          Import<span className="text-brand">Drive</span>
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/carros" className={linkClass}>
              Carros
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar