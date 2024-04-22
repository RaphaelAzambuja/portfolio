import GitHubButton from '../../Buttons/GitHubButton/GitHubButton';
import "./Project.scss"

export default function Project ({title, text, link, image}: {title: String, text: String, link: String, image: any}) {
  return (
    <>
      <main className="project-main">
        <div className="project">
          <div className="text">
            <h3 className="title">
              {title}
            </h3>
            <p className="content">
              {text}
            </p>
            <img className='projectImage' src={image}/>
          </div>
          <GitHubButton link={link}></GitHubButton>
        </div>
      </main>
    </>
  )
}

