'use client'

import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './Header.scss';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeMenuItem, setActiveMenuItem] = useState('');

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const scrollToAnchor = (anchorId: string) => {
		const anchor = document.getElementById(anchorId);
		if (anchor) {
			anchor.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});

			if (window.innerWidth < 1000) {
				setMenuOpen(false);
			}
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			const sections = ['home', 'abilities', 'projects', 'experiences', 'services'];

			let activeSection = '';
			sections.forEach(sectionId => {
				const element = document.getElementById(sectionId);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetBottom = offsetTop + element.offsetHeight;
					if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
						activeSection = sectionId;
					}
				}
			});

			setActiveMenuItem(activeSection);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{menuOpen ? (
				<AiOutlineClose className="hamburger-icon" onClick={toggleMenu} />
			) : (
				<RxHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />
			)}

			<header className={`w-100 position-fixed top-0 z-3 d-flex justify-content-center border shadow-sm bg-white pt-3 ${menuOpen ? 'open' : ''}`}>
				<div className="container">
					<nav className="d-flex justify-content-center gap-5">
						<div>
							<ul className="d-flex list-unstyled gap-3">
								<li className={`px-1 py-1 fs-5 rounded ${activeMenuItem === 'home' ? 'active' : ''}`} onClick={() => scrollToAnchor("home")}>Home</li>
								<li className={`px-1 py-1 fs-5 rounded ${activeMenuItem === 'abilities' ? 'active' : ''}`} onClick={() => scrollToAnchor("abilities")}>Ferramentas</li>
								<li className={`px-1 py-1 fs-5 rounded ${activeMenuItem === 'projects' ? 'active' : ''}`} onClick={() => scrollToAnchor("projects")}>Projetos</li>
								<li className={`px-1 py-1 fs-5 rounded ${activeMenuItem === 'experiences' ? 'active' : ''}`} onClick={() => scrollToAnchor("experiences")}>Experiências</li>
								<li className={`px-1 py-1 fs-5 rounded ${activeMenuItem === 'services' ? 'active' : ''}`} onClick={() => scrollToAnchor("services")}>Serviços</li>
								{/* <li className={`px-3 py-1 fs-5 rounded ${activeMenuItem === 'contato' ? 'active' : ''}`} onClick={() => scrollToAnchor("contato")}>Contato</li> */}
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
