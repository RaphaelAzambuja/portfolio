import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function SocialNetworks() {
  return (
    <>
      <div className="d-flex gap-2">
        <a className="fs-2 d-flex" href="https://www.linkedin.com/in/raphael-azambuja-15001a212/" target="_blank"><FaLinkedin /></a>
        <a className="fs-2 d-flex" href="https://api.whatsapp.com/send/?phone=554899341106" target="_blank"><IoLogoWhatsapp /></a>
        <a className="fs-2 d-flex" href="https://github.com/RaphaelAzambuja" target="_blank"><FaGithub /></a>
      </div>
    </>
  )
}