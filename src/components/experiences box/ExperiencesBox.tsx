import Experience from './experience/Experience';
import "./ExperienceBox.scss";

export default function ExperienceBox() {
  const experiencesData = [
    {
      img: 'caminho/para/imagem1.jpg',
      date: 'Janeiro 2020 - Presente',
      title: 'Cargo na Empresa ABC',
      jobTitle: 'Desenvolvedor Web',
      description: 'Responsável pelo desenvolvimento de aplicativos web utilizando tecnologias modernas.',
    },
    // Adicione mais objetos de experiência conforme necessário
  ];

  return (
    <main className="experience-box-main">
      <h2 className="experience-box-title">Minhas experiências profissionais</h2>
      <div className="experience-box">
        {experiencesData.map((experience, index) => (
          <Experience
            key={index}
            img={experience.img}
            date={experience.date}
            title={experience.title}
            jobTitle={experience.jobTitle}
            description={experience.description}
          />
        ))}
      </div>
    </main>
  );
}
