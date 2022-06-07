// eslint-disable-next-line no-unused-vars
import NavbarCafe from '../components/NavbarCafe'
import CafeImage from '../assets/cafe.jpeg'
import wfImage from '../assets/wf.jpeg'
import drinkMenuImage from '../assets/drinkManu.jpeg'
import Bread from '../assets/bread.jpeg'
import Bubbletea from '../assets/bubbletea.png'
import Noodle from '../assets/noodle.jpeg'
import Dumplings from '../assets/dumplings.jpeg'

const Wanfang = () => {
  return (
    <>
      <NavbarCafe />
      <img src={CafeImage} />

      <div
        className="flex flex-col items-center center-center h-auto p-1 m-10"
        id="drink-manu"
      >
        <h1 className="font-bold text-4xl m-5">Our Drink Manu</h1>
        <img className="m-10 " src={drinkMenuImage} />
      </div>

      <div
        className="flex flex-col items-center center-center m-10"
        id="our-signatures"
      >
        <h1 className="font-bold text-4xl m-3">Our Signature</h1>
        <div className="flex flex-row justify-between m-10 flex-wrap w-full">
          <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure>
              <img src={Bread} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Castella Cake </h2>
              <p>ราคา: 50 บาท</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure>
              <img src={Noodle} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Noodle</h2>
              <p>ราคา: 50 บาท</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure>
              <img
                src={Bubbletea}
                style={{
                  backgroundImage: `url(${wfImage})`,
                  width: '270',
                  height: '270',
                }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Bubble Tea</h2>
              <p>ราคา: 50 บาท</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure>
              <img
                src={Dumplings}
                style={{
                  backgroundImage: `url(${wfImage})`,
                  width: '270',
                  height: '270',
                }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Bubble Tea</h2>
              <p>ราคา: 50 บาท</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center center-center w-screen h-screen p-1"
        id="footer"
      >
        <h1 className="font-bold text-4xl m-3">About US</h1>
        <div className="flex flex-row flex-wrap flex-2 center-center items-center  justify-between px-2 m-10">
          <div
            className="bg-cover h-96 m-0 p-0 center-center"
            style={{
              backgroundImage: `url(${wfImage})`,
              width: '360px',
              height: '500px',
            }}
          ></div>
          <div className="flex flex-col center-center items-center text-center w-96 pl-5 sm:pl-0">
            <p className="font-bold text-3xl">
              We are a Hong Kong Milk Tea Bar located in Phuket, Thailand.
            </p>
            <p className="px-3 pt-3">Open Hours</p>
            <p className="px-3">9:30 am - 07:00 pm #Monday - Saturday</p>
            <p className="px-3">(CLOSED on Sundays)</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Wanfang
