import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import './SocialNetworks.scss';

export default function SocialNetworks() {
  return (
    <>
      <div className="contacts">
        <a href="https://www.linkedin.com/in/raphael-azambuja-15001a212/" target="_blank"><i><FaLinkedin /></i></a>
        <a href="https://api.whatsapp.com/send/?phone=554899341106" target="_blank"><i><IoLogoWhatsapp /></i></a>
        <a href="https://github.com/RaphaelAzambuja" target="_blank"><i><FaGithub /></i></a>
      </div>
    </>
  )
}