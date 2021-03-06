import { useHistory } from "react-router-dom";

import illustrationImage from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");

  }

  async function handleJoinRoom(event: FormEvent) {
      event.preventDefault()

    if (roomCode.trim() === '') {
        return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
        alert('Sala não existe.');
        return;
    }

    if (roomRef.val().endedAt) {
      alert('Sala ja fechada.')
      return;
    }

    history.push(`/rooms/${roomCode}`)
  }
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
          <button onClick={handleCreateRoom} className="google-button">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie a sua sala com o Google
          </button>
          <div className="separator">Ou entre numa sala</div>
          <form onSubmit={handleJoinRoom}>
            <input type="text" 
            placeholder="Digite o código da sala"
            onChange={event => setRoomCode(event.target.value)}
            value={roomCode}  />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
