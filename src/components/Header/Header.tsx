'use client'

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './Header.scss';
import Link from 'next/link';

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

			<header className={`w-100 position-fixed top-0 z-3 d-flex justify-content-center border shadow-sm bg-white pt-3 ${menuOpen ? 'open' : '' }`}>
				<div className="container">
					<nav className="d-flex justify-content-center gap-5">
						<div>
							<ul className="d-flex list-unstyled gap-3">
								<li className="px-1 py-1 fs-5 rounded"><Link className='px-2 py-1 rounded' href="#home">Home</Link></li>
								<li className="px-1 py-1 fs-5 rounded"><Link className='px-2 py-1 rounded' href="#ferramentas">Ferramentas</Link></li>
								<li className="px-1 py-1 fs-5 rounded"><Link className='px-2 py-1 rounded' href="#projetos">Projetos</Link></li>
								<li className="px-1 py-1 fs-5 rounded"><Link className='px-2 py-1 rounded' href="#experiencias">Experiências</Link></li>
								<li className="px-1 py-1 fs-5 rounded"><Link className='px-2 py-1 rounded' href="#servicos">Serviços</Link></li>
								{/* <li className="px-3 py-1 fs-5 rounded"><Link className='px-1 py-1 rounded' href="#contato">Contato</Link></li> */}
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
