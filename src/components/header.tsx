import { faAddressBook, faFileAlt, faHome, faInfoCircle, faProjectDiagram, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header
      className='w-full flex items-center justify-center flex-col lg:flex-row p-4 gap-5 absolute top-0 -left-32 md:-left-80 lg:-left-12'
    >
      <ModeToggle />
      <nav className='rounded-full bg-zinc-950 text-zinc-50 w-10 h-auto lg:w-auto lg:h-auto dark:bg-zinc-100 dark:text-zinc-950 px-4 py-1 flex lg:gap-16 items-center flex-col lg:flex-row gap-4 lg:px-2 lg:py-2'>
        <div className='flex lg:gap-2 flex-col gap-2 lg:flex-row'>
          <a href='/' className='py-2 rounded-full lg:hover:bg-violet-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6'>
            <FontAwesomeIcon icon={faHome} className='block lg:hidden' />
            <span className='hidden lg:block'>Home</span>
          </a>
          <a href='/about' className='py-2 rounded-full lg:hover:bg-violet-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6'>
            <FontAwesomeIcon icon={faInfoCircle} className='block lg:hidden' />
            <span className='hidden lg:block'>Sobre nós</span>
          </a>
          <a href='/services' className='py-2 rounded-full lg:hover:bg-violet-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6'>
            <FontAwesomeIcon icon={faTasks} className='block lg:hidden' />
            <span className='hidden lg:block'>Serviços</span>
          </a>
        </div>
        <Link to={'/'} className='hidden lg:block'>CromoCode</Link>
        <div className='flex lg:gap-2 flex-col gap-2 lg:flex-row'>
          <a href='/resume' className='py-2 rounded-full lg:hover:bg-violet-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6'>
            <FontAwesomeIcon icon={faFileAlt} className='block lg:hidden' />
            <span className='hidden lg:block'>Resumo</span>
          </a>
          <a href='/projects' className='py-2 rounded-full lg:hover:bg-violet-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6'>
            <FontAwesomeIcon icon={faProjectDiagram} className='block lg:hidden' />
            <span className='hidden lg:block'>Projetos</span>
          </a>
          <a href='/contacts' className='py-2 rounded-full lg:hover:bg-violet-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6'>
            <FontAwesomeIcon icon={faAddressBook} className='block lg:hidden' />
            <span className='hidden lg:block'>Contatos</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
