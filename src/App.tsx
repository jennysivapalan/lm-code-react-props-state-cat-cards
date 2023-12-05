import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Animal from "./data/animal";
import Card from "./components/card";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Animal>>(catData);
  const catCards = cats.map((cat, index) => (
    <Card
      key={cat.id}
      name={cat.name}
      species={cat.species}
      favFoods={cat.favFoods}
      birthYear={cat.birthYear}
      index={index}
      isCat={true}
    />
  ));
  const [dogs, setDogs] = useState<Array<Animal>>(dogData);

  const dogCards = dogs.map((dog, index) => (
    <Card
      key={dog.id}
      name={dog.name}
      species={dog.species}
      favFoods={dog.favFoods}
      birthYear={dog.birthYear}
      index={index}
      isCat={false}
    />
  ));

  return (
    <>
      <Navbar />
      <Header numCats={cats.length} numDogs={dogs.length} />

      <main>
        <div className="cards__wrapper">{catCards}</div>
        <div className="cards__wrapper">{dogCards}</div>
      </main>

      <Footer />
    </>
  );
}

export default App;
