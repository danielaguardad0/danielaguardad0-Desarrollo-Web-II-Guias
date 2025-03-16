import { Link, useLocation } from "react-router";
import SearchForm from "./SearchForm";

export default function Header() {
    const {pathname} = useLocation() //esta variable tendra / o / favorito dependiendo de la pagina actual
    const isHome = pathname === '/'

    return(
        <header className={isHome?"bg-[url('/bg.jpg')] bg-center bg-cover":"bg-slate-800"}>
            <div className="mx-auto container px-5 py-16 pl-16 pr-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="logo.svg" alt="logotipo" className="w-32" />
                    </div>
                    <nav className="flex gap-4">
                        <Link to="/" className="text-white uppercase font-bold" >Inicio</Link>
                        <Link to="/favoritos" className="text-white uppercase font-bold" >Favoritos</Link>
                    </nav>
                </div>
            </div>
            {isHome && (
                <SearchForm/>
            )}
        </header>
    )
}