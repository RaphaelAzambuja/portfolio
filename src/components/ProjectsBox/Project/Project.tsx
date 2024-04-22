import GitHubButton from '../../Buttons/GitHubButton/GitHubButton';
import "./Project.scss"

export default function Project ({title, text, link, image}: {title: string, text: string, link: string, image: any}) {
  return (
    <>
      <div className="project">
        <div className="text">
          <h3>
            {title}
          </h3>
          <p>
            {text}
          </p>
          <img src={image}/>
        </div>
        <GitHubButton link={link}></GitHubButton>
      </div>
    </>
  )
}

