import marujoArtImage from '../../../assets/marujotattoo.png';
import Project from './Project/Project';
import "./ProjectBox.scss"

export default function ProjectBox () {
  var projectValues = [
    { title: "Marujo Art's Tattoo", text: "Uma landing page para expor o trabalho no estudio de tatuagens e piercings do meu irmão", link: "#", image: marujoArtImage},
    { title: "APIs OlíSaúde", text: "Teste usado para testar e aprimorar minhas habilidades com Java e Springboot", link: "https://github.com/RaphaelAzambuja/teste-olisaude", image: marujoArtImage},
    { title: "Service-Desk", text: "um app para gerenciar chamados de helpdesk e servicedesk", link: "https://github.com/RaphaelAzambuja/teste-olisaude", image: marujoArtImage},
  ];
  return (
    <>
      <div className="text-box-main">
        <h2>Nem só de ferramentas viverá o produto!</h2>
        <p>Em projetos utilizo os meus conhecimentos mais conceituais, além da prática.</p>
      </div>
      <div className="projects">
      {projectValues.map((project, index) => (
        <Project key={index} title={project.title} text={project.text} link={project.link} image={project.image} />
      ))}
      </div>
    </>
  )

}

