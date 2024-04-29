import './Mailer.scss';
import StandardButton from '../buttons/StandardButton';
import { IoMdSend } from 'react-icons/io';

export default function Mailer() {
  return (
    <main className="mailer-main">
      <h2 className="mailer-message">Gostou do meu trabalho e quer bater um papo? Entre em contato!</h2>
      <form className="form-container" action="#" method="POST">
        <div className="row">
          <div className="field">
            <input type="text" id="name" name="name" placeholder="Nome" required />
          </div>
          <div className="field">
            <input type="email" id="email" name="email" placeholder="E-mail" required />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <input type="text" id="subject" name="subject" placeholder="Assunto" />
          </div>
        </div>
        <div className="row">
          <div className="field">
            <textarea id="message" name="message" placeholder="Mensagem" required></textarea>
          </div>
        </div>
        <StandardButton icon={<IoMdSend />} text="Enviar" link=""/>
      </form>
    </main>
  )
}
