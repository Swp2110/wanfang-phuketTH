import Logo from 'assets/logo.png'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a href="/home" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="" className="w-10 h-10" />
          Christmas
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 font-bold">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home">Celebrate</a>
          </li>
          <li>
            <a href="/home">Gifts</a>
          </li>
          <li>
            <a href="/home">New</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default NavBar
