import {useState} from 'react';
import AddNewInsult from './components/AddNewInsult';
import Insult from './components/Insult';
import './App.css';

function App() {
  const title = "Radom insult form Shakespear";
  let [shakespearInsults, setShakespearInsults ] = useState([
    { insult:"Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?", play:"Macbeth", id:1},
    { insult:"Never hung poison on a tread toad", play:"Richard III", id:2},
    { insult:"He thinks too much: such men are dangerous. ", play:"Julius Ceasar", id:3},
    { insult:"Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.", play:"The Merchant of Venice", id:4},
    { insult:"Give me your hand...I can tell your fortune. You are a fool.", play:"The Two Noble Kinsmen", id:5},
    { insult:"He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!", play:"The Tempest", id:6},
    { insult:"It is a tale Told by an idiot, full of sound and fury, Signifying nothing.", play:"Macbeth", id:7},
    { insult:"Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.", play:"Titus Andronicus", id:8},
    { insult:"He hath eaten me out of house and home; he hath put all substance into that fat belly of his.", play:"Henry IV, Part 2", id:9},
    { insult:"Out, you green-sickness carrion! Out, you baggage! You tallow-face! ", play:"Romeo and Juliet", id:10},
  ])
  const randomInsult = () => {
    const index = Math.floor(Math.random() * (shakespearInsults.length - 1));
    return <Insult insult={shakespearInsults[index].insult} play={shakespearInsults[index].play} />
  };

  const updateInsults =(newinsult, newPlay)=>{
    const newInsult = {
      insult: newinsult,
      play: newPlay,
    }
    setShakespearInsults([...shakespearInsults, newInsult]);
    
  }

  const insultComponents = shakespearInsults.map((insultRow) => {
    return <Insult insult={ insultRow.insult } play={ insultRow.play } 
              key={ insultRow.id } />
  });
  return (
      <div className="App">
        <h1>{ title }</h1>
        <div>{ randomInsult() }</div>
        <div>
          <h2>Add a new insult</h2>
        <AddNewInsult updateInsults={updateInsults}/>
        </div>
        <div>
          <h2>All insults</h2>
          {insultComponents }
        </div>
      </div>
    );
}

export default App;
