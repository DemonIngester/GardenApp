//Made by Kolton Brady
import Layout from "./Layout";

function App() {

  //Easter Egg -- Ignore
  let secretCount = 0;
  const easterEgg = () => {
    secretCount = secretCount += 1;

    if(secretCount === 25){
      window.open("https://www.youtube.com/watch?v=_Q_47b507vg");
    }
  }

  //Layout and footer
  return (
    <>
      <Layout></Layout>
      <footer> <p onClick={() => easterEgg()}>Made by Kolton</p> </footer>
    </>
  );
}

export default App;
