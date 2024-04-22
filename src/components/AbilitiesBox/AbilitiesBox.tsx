import { SiInertia, SiLivewire, SiPhp } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { FaDocker, FaLaravel, FaLinux, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import Ability from './Ability/Ability';
import './AbilitiesBox.scss';

export default function AbilitiesBox() {
  const icons = [
    { icon: <SiPhp />, name: 'PHP' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <SiLivewire />, name: 'Livewire' },
    { icon: <SiInertia />, name: 'Inertia.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaReact />, name: 'React' },
    { icon: <TbBrandNextjs />, name: 'Next.js' },
    { icon: <IoLogoSass />, name: 'Sass' },
    { icon: <BiLogoMongodb />, name: 'MongoDB' },
    { icon: <BiLogoPostgresql />, name: 'PostgreSQL' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaLinux />, name: 'Linux' }
  ];

  return (
    <>
    <main className='abilities-box-main' id='tools'>
      <h2>Um bom desenvolvedor utiliza ótimas ferramentas.</h2>
      <p>Possuo conhecimento em diversas tecnologias.</p>
      
      <div className="tools-box">
        {icons.map((item, index) => (
          <Ability key={index} tool={item.icon} name={item.name} />
        ))}
      </div>
    </main>
    </>
  );
}
