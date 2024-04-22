import Image from 'next/image';
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
          <Image src={image}/>
        </div>
        <GitHubButton link={link}></GitHubButton>
      </div>
    </>
  )
}

