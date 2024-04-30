export default function StandardButton({ icon, text, link}: {icon: any, text: string, link: string}) {
  function runLink() {
    window.open(link, '_blank')
  }
  
  return (
    <>
      <button className="btn btn-dark d-flex justify-content-center align-items-center gap-3" onClick={runLink} meta-link={link}>
        <i>{icon}</i>
        <p className="my-0">{text}</p>
      </button>
    </>
  )
}
