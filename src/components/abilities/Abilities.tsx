import { SiAngular, SiInertia, SiNuxtdotjs, SiPhp, SiTailwindcss } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { FaBootstrap, FaDocker, FaLaravel, FaLinux, FaReact, FaVuejs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoJavascript, BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import './Abilities.scss';

export default function Abilities() {
  const icons = [
    { icon: <SiPhp />, name: 'PHP' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <SiInertia />, name: 'Inertia' },
    { icon: <BiLogoJavascript />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <TbBrandNextjs />, name: 'Next.js' },
    { icon: <SiAngular />, name: 'Angular' },
    { icon: <FaVuejs />, name: 'Vue' },
    { icon: <SiNuxtdotjs />, name: 'Nuxt' },
    { icon: <IoLogoSass />, name: 'Sass' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <BiLogoPostgresql />, name: 'PostgreSQL' },
    { icon: <BiLogoMongodb />, name: 'MongoDB' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaLinux />, name: 'Linux' },
  ];

  return (
    <>
      <main className='d-flex flex-column justify-content-center align-items-center text-center my-5 py-5 bg-white'>
        <h2 className='mt-5'>Um bom desenvolvedor utiliza ótimas ferramentas.</h2>
        <p>Possuo conhecimento em diversas tecnologias.</p>

        <div className="container my-5 pt-5">
          <div className="row row-cols-3 row-cols-md-4 row-cols-lg-5 gap-3 justify-content-center">
            {icons.map((item, index) => (
              <div className="col" key={index}>
                <div className="tool d-flex flex-column justify-content-center align-items-center rounded">
                  <div className="name rounded">{item.name}</div>
                  <div className="icon d-flex py-4">{item.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
