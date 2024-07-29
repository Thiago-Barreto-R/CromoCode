import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className='w-full flex items-center justify-center p-4 gap-5'>
      <ModeToggle />
      <nav className='rounded-full bg-zinc-950 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 px-4 py-2 flex gap-20 items-center'>
        <div className='flex gap-8'>
          <a href='/'>Home</a>
          <a href='#about'>Sobre</a>
          <a href='#services'>Serviços</a>
        </div>
        <p>CromoCode</p>
        <div className='flex gap-8'>
          <a href='#resume'>Resumo</a>
          <a href='#projects'>Projetos</a>
          <a href='#contacts'>Contatos</a>
        </div>
      </nav>
    </header>
  )
}
