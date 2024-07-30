import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import ImgPersonConference from '../../../assets/developer.svg';
import logoOfc from '../../../assets/LogoLgCroma.svg';
import LayoutMain from "../../layout";

export function Home() {
  return (
    <LayoutMain>
      <div className="h-screen flex items-center w-full overflow-hidden justify-around flex-col">
        <div className='flex items-center justify-center flex-col gap-4'>
          <motion.img
            src={logoOfc}
            alt=""
            className='h-10 relative'
            initial={{ scale: 0, opacity: 0, left: 80 }}
            animate={{ scale: 2, opacity: 1, left: -30 }}
            exit={{ opacity: 0 }}
          />
          <motion.p
            className='hidden absolute text-center w-[900px] lg:block'
            initial={{ top: 275, left: 490, opacity: 0 }}
            animate={{ top: 310, left: 490, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Com uma equipe de especialistas apaixonados por tecnologia, o CromoCode oferece desenvolvimento de software personalizado e consultoria técnica.
            Estamos aqui para elevar o seu negócio a novos patamares!

          </motion.p>
        </div>
        <div className='relative'>
          <motion.div
            className='rounded-full bg-blue-800 flex absolute -bottom-[600px] items-center justify-center h-[700px] w-[700px]'
            initial={{ left: 0 }}
            animate={{ left: -350 }}
          >
            <img src={ImgPersonConference} alt="" className='h-48 absolute -top-16 md:h-80 md:-top-36' />
            <motion.div
              className='bg-zinc-200 rounded-full w-auto p-2 flex gap-2 items-center text-zinc-50 -mt-72 shadow-lg  bg-opacity-20'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://wa.me/5592991037056"
                target='_blank'
                className='bg-blue-800 py-2 px-3 rounded-full text-zinc-50 flex gap-1 items-center transition-all duration-300 hover:scale-105'
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
