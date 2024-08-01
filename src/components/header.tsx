import { faAddressBook, faFileAlt, faHome, faInfoCircle, faProjectDiagram, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LogoCroma.svg';
import { ModeToggle } from './mode-toggle';

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className='w-full flex items-center justify-center flex-col lg:flex-row p-4 gap-5 z-50 fixed top-0'>
      <ModeToggle />
      <nav className='rounded-full w-10 h-auto lg:w-auto lg:h-auto bg-zinc-100 text-zinc-950 shadow px-4 py-1 flex lg:gap-16 items-center flex-col lg:flex-row gap-4 lg:px-2 lg:py-1.5'>
        <div className='flex lg:gap-2 flex-col gap-2 lg:flex-row'>
          <Link to='/' className={`py-1 rounded-full lg:hover:bg-blue-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6 ${currentPath === '/' ? 'bg-blue-800 text-zinc-50' : ''}`}>
            <FontAwesomeIcon icon={faHome} className='block lg:hidden' />
            <span className='hidden lg:block'>Home</span>
          </Link>
          <Link to='/about' className={`py-1.5 rounded-full lg:hover:bg-blue-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6 ${currentPath === '/about' ? 'bg-blue-800 text-zinc-50' : ''}`}>
            <FontAwesomeIcon icon={faInfoCircle} className='block lg:hidden' />
            <span className='hidden lg:block'>Sobre nós</span>
          </Link>
          <Link to='/services' className={`py-1.5 rounded-full lg:hover:bg-blue-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6 ${currentPath === '/services' ? 'bg-blue-800 text-zinc-50' : ''}`}>
            <FontAwesomeIcon icon={faTasks} className='block lg:hidden' />
            <span className='hidden lg:block'>Serviços</span>
          </Link>
        </div>
        <Link to={'/'} className='hidden lg:block'><img src={logo} alt="" className='h-10' /></Link>
        <div className='flex lg:gap-2 flex-col gap-2 lg:flex-row'>
          <Link to='/resume' className={`py-1.5 rounded-full lg:hover:bg-blue-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6 ${currentPath === '/resume' ? 'bg-blue-800 text-zinc-50' : ''}`}>
            <FontAwesomeIcon icon={faFileAlt} className='block lg:hidden' />
            <span className='hidden lg:block'>Resumo</span>
          </Link>
          <Link to='/projects' className={`py-1.5 rounded-full lg:hover:bg-blue-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6 ${currentPath === '/projects' ? 'bg-blue-800 text-zinc-50' : ''}`}>
            <FontAwesomeIcon icon={faProjectDiagram} className='block lg:hidden' />
            <span className='hidden lg:block'>Projetos</span>
          </Link>
          <Link to='/contacts' className={`py-1.5 rounded-full lg:hover:bg-blue-800 hover:text-zinc-50 flex items-center transition-all duration-300 justify-center px-2 lg:px-6 ${currentPath === '/contacts' ? 'bg-blue-800 text-zinc-50' : ''}`}>
            <FontAwesomeIcon icon={faAddressBook} className='block lg:hidden' />
            <span className='hidden lg:block'>Contatos</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
