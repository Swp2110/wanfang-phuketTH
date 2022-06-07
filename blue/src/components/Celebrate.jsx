import CelebratePic from '../assets/celebrate.png'

const Celebrate = () => {
  return (
    <div className="flex flex-row justify-center ">
      <div className="flex flex-col flex-2 items-start justify-center px-10 md:items-center ">
        <span className="normal-case text-5xl font-bold">Celebrate With A</span>
        <span className="normal-case text-5xl font-bold">Lot Of Love</span>
        <span className="normal-case text-sm mt-3">
          In this holidays, celebrate with much love and peace, offering many
          blessings to our loved ones,
        </span>
        <span className="normal-case text-sm mt-3">
          friends and neighbors, wishing them a good Christmas message.
        </span>
        <button className="btn btn-primary mt-10 rounded-full text-white">
          Send Good Wishes
        </button>
      </div>
      <img src={CelebratePic} alt="" className="w-2/5 h-2/5" />
    </div>
  )
}
export default Celebrate
