import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './Header.scss';

export default function Header() {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Ferramentas</li>
                    <li>Projetos</li>
                    <li>Experiências</li>
                    <li>Serviços</li>
                    <li>Contato</li>
                </ul>
                <SocialNetworks />
            </nav>
        </header>
        </>
    );
}
