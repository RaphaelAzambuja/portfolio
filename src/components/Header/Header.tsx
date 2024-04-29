'use client'

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './Header.scss';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			{menuOpen ? (
				<AiOutlineClose className="hamburger-icon" onClick={toggleMenu} />
			) : (
					<RxHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />
			)}

			<header className={`w-100 h-100 d-flex justify-content-center border shadow-sm bg-white pt-3 ${menuOpen ? 'open' : '' }`}>
				<div className="container">
					<nav className="d-flex justify-content-center gap-5">
						<div>
							<ul className="d-flex list-unstyled gap-3">
								<li className="px-3 py-1 rounded">Home</li>
								<li className="px-3 py-1 rounded">Ferramentas</li>
								<li className="px-3 py-1 rounded">Projetos</li>
								<li className="px-3 py-1 rounded">Experiências</li>
								<li className="px-3 py-1 rounded">Serviços</li>
								<li className="px-3 py-1 rounded">Contato</li>
							</ul>
						</div>

						<div>
							<SocialNetworks />
						</div>
					</nav>
				</div>
			</header>
		</>
	);
}
