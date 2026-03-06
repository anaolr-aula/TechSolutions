import {Link} from 'react-router-dom';

function Menu(){
    return(
        <nav>
            <Link  className={'menu-link'} to={"/"}>Home</Link>
            <Link  className={'menu-link'}  to={"/produtos"}>Produtos</Link>
            <Link  className={'menu-link'}  to={"/empresa"}>Empresa</Link>
            <Link className={'menu-link'}  to={"/contacts"}>Contatos</Link>
        </nav>
    )
}

export default Menu;