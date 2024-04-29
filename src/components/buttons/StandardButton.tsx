import "./StandardButton.scss"

export default function StandardButton({ icon, text, link}: {icon: any, text: string, link: string}) {
  return (
    <>
      <a href={link} target="_blank"> 
        <button meta-link={link}>
          <i>{icon}</i>
          <p>{text}</p>
        </button>
      </a>
    </>
  )  
}