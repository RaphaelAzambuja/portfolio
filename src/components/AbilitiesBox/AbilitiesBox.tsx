import { SiAngular, SiInertia, SiLivewire, SiPhp } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { FaBootstrap, FaDocker, FaLaravel, FaLinux, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import './AbilitiesBox.scss';

export default function AbilitiesBox() {
  const icons = [
    { icon: <SiPhp />, name: 'PHP' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <SiInertia />, name: 'Inertia.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiAngular />, name: 'Angular' },
    { icon: <FaReact />, name: 'React' },
    { icon: <TbBrandNextjs />, name: 'Next.js' },
    { icon: <IoLogoSass />, name: 'Sass' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <BiLogoMongodb />, name: 'MongoDB' },
    { icon: <BiLogoPostgresql />, name: 'PostgreSQL' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaLinux />, name: 'Linux' }
  ];

  return (
    <>
      <main className='d-flex flex-column justify-content-center align-items-center text-center my-5 py-5 bg-white'>
        <h2 className='mt-5'>Um bom desenvolvedor utiliza ótimas ferramentas.</h2>
        <p>Possuo conhecimento em diversas tecnologias.</p>

        <div className="container my-5 pt-5">
          <div className="row gap-3 justify-content-center">
            {icons.map((item, index) => (
              <div className="col-4 col-sm-4 col-md-3 col-lg-2" key={index}>
                <div className="tool w-100 d-flex flex-column justify-content-center rounded align-items-center">
                  <div className="name rounded">{item.name}</div>
                  <div className="icon">{item.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
