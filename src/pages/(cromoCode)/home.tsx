import ImgPersonConference from '../../assets/undraw_conference_re_2yld.svg';
import LayoutMain from "../layout";

export function Home() {
  return (
    <LayoutMain>
      <div className="h-screen flex items-center justify-center flex-col">
        <h1 className="text-3xl">CromoCode</h1>
        <div className='relative bottom-0'>
          <div className='rounded-full -bottom-80 absolute z-0 bg-violet-800 block h-96 w-96'></div>
          <img src={ImgPersonConference} alt="" className='h-64 z-50 relative' />
        </div>
      </div>
    </LayoutMain>
  )
}
