import SurpriseGift from '../assets/giving1.png'
import Ornaments from '../assets/giving2.png'
import LotsOfLove from '../assets/giving3.png'

const Gifts = () => {
  return (
    <div className="flex flex-col flex-2 justify-center px-10 m-20 md:m-2 py-10">
      <span className="normal-case text-xl font-bold">
        Start Giving This <br /> Christmas
      </span>
      <div className="flex flex-row justify-between m-5">
        <div className="w-40">
          <img
            src={SurpriseGift}
            alt=""
            className="origin-center hover:translate-x-5 "
          />
          <h2 className="text-sm font-bold origin-center hover:bg-sky-700">
            Surprise gifts
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <div className="w-40">
          <img src={Ornaments} alt="" />
          <h2 className="text-sm font-bold">Surprise gifts</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <div className="w-40">
          <img src={LotsOfLove} alt="" />
          <h2 className="text-sm font-bold">Surprise gifts</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  )
}
export default Gifts
