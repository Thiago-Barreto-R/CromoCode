import { motion } from 'framer-motion';
import { MoveUpRight, Quote } from 'lucide-react';
import ImgPersonConference from '../../../assets/developer.svg';
import LayoutMain from "../../layout";

export function Home() {
  return (
    <LayoutMain>
      <div className="h-screen flex items-center w-full overflow-hidden justify-around flex-col">
        <motion.h1
          className="text-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: 1 }}
          exit={{ opacity: 0 }}
        >CromoCode</motion.h1>
        <p className='absolute left-52 top-96'>
          <Quote />
          adadasdasdasdsdasdasdasdasdasdasdasdasdasdasdasdas
        </p>
        <div className='relative'>
          <motion.div
            className='rounded-full bg-violet-800 flex absolute -bottom-[600px] items-center justify-center h-[700px] w-[700px]'
            initial={{ left: 0 }}
            animate={{ left: -300 }}
          >
            <img src={ImgPersonConference} alt="" className='h-80 absolute -top-36' />
            <motion.div
              className='bg-zinc-200 rounded-full w-auto p-2 bg-opacity-70 flex gap-2 items-center text-zinc-950 -mt-60'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://wa.me/5592991037056"
                target='_blank'
                className='bg-violet-800 py-2 px-4 rounded-full text-zinc-50 flex gap-1 items-center transition-all duration-300 hover:scale-105'
              >
                Fale Conosco
                <MoveUpRight size={16} className='dark:text-white' />
              </a>
              Iniciar Conversa
            </motion.div>
          </motion.div>
          <div>
          </div>
        </div>
      </div>
    </LayoutMain >
  )
}
