import { motion } from 'framer-motion';

export function HowWeEmerged() {
  return (
    <div 
        className='h-screen w-full flex flex-col items-start justify-center z-0 pb-6' 
        id='about'
      >
        <div className='pl-20 w-full max-w-4xl'>
          <motion.h2 
            className='text-3xl'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Como surgimos?
          </motion.h2>
          <motion.p 
            className='ml-10 mt-4 text-lg'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Tudo começou com um engenheiro e dois desenvolvedores que compartilhavam uma visão comum: inovar não apenas a indústria com tecnologia de ponta, mas também toda franquia que necessitasse de automações.
             Juntos, decidiram abrir uma startup de tecnologia chamada CromoCode, combinando suas habilidades e experiências para transformar ideias em soluções inovadoras.
          </motion.p>
          <motion.p 
            className='ml-10 mt-4 text-lg'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            exit={{ opacity: 0, y: 20 }}
          >
            O nome Cromo faz referência ao elemento cromo da tabela periódica, conhecido por sua resistência à corrosão e durabilidade. Assim como o cromo, 
            nossa missão é criar soluções tecnológicas robustas e duradouras. 
          </motion.p>
          <motion.p 
            className='ml-10 mt-4 text-lg'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            exit={{ opacity: 0, y: 20 }}
          >
            A palavra Code representa nossa paixão e dedicação ao desenvolvimento de software. Combinando essas duas ideias, CromoCode simboliza nossa 
            abordagem de criar código de alta qualidade e duradouro.
          </motion.p>
        </div>

        {/* <div className='pl-20 w-full max-w-4xl mt-10'>
        <motion.h2 
          className='text-3xl'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, y: -20 }}
        >
          Nossa Equipe
        </motion.h2>
        <motion.p 
          className='ml-10 mt-4 text-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Conheça a equipe por trás da CromoCode. Nossa equipe é composta por profissionais dedicados e talentosos que são apaixonados pelo que fazem. Cada 
          membro traz uma riqueza de conhecimentos e experiências que nos ajudam a impulsionar a inovação e a excelência em tudo o que fazemos.
        </motion.p>
      <div className='p-6 w-full flex justify-between mt-8 border rounded'>
        <div>
          <motion.h3
            className='text-2xl'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Kevlan Betto
          </motion.h3>
          <p
            className='text-xs text-zinc-500'
          >
            FULL STACK & DESENVOLVEDOR MOBILE
          </p>
        </div>
        <img src="" alt="Imagem de perfil" className='h-48 w-64 border'/>
      </div>
      </div> */}
      </div>
  )
}
