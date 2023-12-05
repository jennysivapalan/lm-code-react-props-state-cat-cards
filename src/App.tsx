import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Cat from "./data/cat";
import CatCard from "./components/cat_card";
import catData from "./data/cat-data";
import Dog from "./data/dog";
import dogData from "./data/dog-data";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const catCards = cats.map((cat, index) => (
    <CatCard
      key={cat.id}
      name={cat.name}
      species={cat.species}
      favFoods={cat.favFoods}
      birthYear={cat.birthYear}
      index={index}
      isCat={true}
    />
  ));
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);

  const dogCards = dogs.map((dog, index) => (
    <CatCard
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
