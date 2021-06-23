
import { Link } from 'react-router-dom'

import illustrationImage from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'


export function NewRoom() {
    // const { user } = useAuth()

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
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link> </p>
                </div>
            </main>
        </div>
    )
}