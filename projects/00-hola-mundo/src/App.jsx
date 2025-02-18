import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

//----------------------------------------------------------

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="nombreAvatar" name="Nombre Avatar" />
      <TwitterFollowCard userName="pheralb" name="Pablo Avatar" />
    </section>
  );
}
