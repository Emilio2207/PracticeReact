import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

//----------------------------------------------------------

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="nombreAvatar"
        name="Nombre Avatar"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="pheralb"
        name="Pablo Avatar"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="vxnder"
        name="Vanderhart"
      />
    </section>
  );
}
