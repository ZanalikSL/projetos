import illustrationImage from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImage} alt="Ilustação de troca de perguntas" />
                <strong>Crie salas de Perguntas Ao Vivo</strong>
                <p>Tira as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="google-button">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie a sua sala com o Google
                    </button>
                    <div className="separator">Ou entre numa sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}