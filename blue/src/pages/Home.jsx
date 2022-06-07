import NavBar from '../components/Navbar'
import Gifts from 'components/Gifts'
import Celebrate from 'components/Celebrate'
import HomeImage from '../assets/home.png'

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-between h-full text-center m-20">
        <div className="flex flex-row justify-center md:flex-col md:items-center">
          <img src={HomeImage} alt="" className="w-2/5 h-2/5" />
          <div className="flex flex-col flex-2 items-start justify-center px-10 md:items-center">
            <span className="normal-case text-5xl font-bold">
              Merry Christmas and
            </span>
            <span className="normal-case text-5xl font-bold">
              Happy NewYear
            </span>
            <span className="normal-case text-sm mt-3">
              Christmas and a new year is about to begin, all good wishes and
              successes.
            </span>
            <button className="btn btn-primary rounded-full mt-10 text-white  md:w-40 lg:w-60 hover:btn-primary focus:btn-primary">
              Get Started
            </button>
          </div>
        </div>
        <Gifts />
        <Celebrate />
      </div>
    </>
  )
}
