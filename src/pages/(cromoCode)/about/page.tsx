import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';
import LayoutMain from "../../layout";

export function About() {
  return (
    <LayoutMain>
      <div className="flex flex-col gap-2 h-screen w-full items-center justify-center">
        <motion.h2
          className="text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Inovando a Indústria com Tecnologia
        </motion.h2>
        <motion.p
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Somos a sua parceira estratégica em tecnologia, transformando ideias em soluções inovadoras.
        </motion.p>
        <motion.div
          className='absolute bottom-3'
          initial={{ y: 10 }}
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <ChevronsDown />
        </motion.div>
      </div>
      <div className='h-screen w-full flex flex-col items-start justify-center'>
        <div className='pl-20 w-[1200px]'>
          <h2 className='text-2xl'>Como surgimos ?</h2>
          <p className='ml-4'>
            Tudo começou com um engenheiro e dois desenvolvedores que compartilharam uma visão comum: inovar a indústria com tecnologia de ponta.
            Juntos, decidiram abrir uma startup de tecnologia a CromoCode, combinando suas habilidades e experiências para transformar ideias em soluções inovadoras.
            Com a paixão pelo desenvolvimento e a engenharia, estamos prontos para enfrentar os desafios do futuro e criar um impacto positivo no mundo.
          </p>
        </div>
      </div>
    </LayoutMain>
  )
}
