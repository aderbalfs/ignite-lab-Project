import { Logo } from "./Logo"
import { List } from 'phosphor-react'

interface HeaderProps {
  onToogleSidebar: () => void;
}

export function Header({ onToogleSidebar} : HeaderProps){
    return(
        <header className="w-full py-5 flex items-center lg:justify-center justify-between bg-gray-700 border-b border-gray-600" >
          <Logo />
          
          <nav className="lg:hidden">
            <a href="#"className="flex items-center gap-2" onClick={onToogleSidebar}>
              Aulas
              <List size={32} className="text-blue-500"/>
            </a>
          </nav>
        </header>
    )
    
}