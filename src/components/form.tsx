import { useState, useCallback } from "react";
import Animal from "../data/animal";

interface CatProps {
  change(cats: Animal): void;
}

export const Form: React.FC<CatProps> = ({ change }) => {
  const [inputName, setInputName] = useState("");
  const [inputFavFoods, setInputFavFoods] = useState<string[]>([]);
  const [inputBirthYear, setInputBirthYear] = useState(0);
  const [inputAnimalType, setInputAnimalType] = useState("Cat");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const field = event.target.getAttribute("id");

    switch (field) {
      case "name":
        setInputName(value);
        break;
      case "favFoods":
        const favFoods = value.split(",");
        setInputFavFoods(favFoods);
        break;
      case "birthYear":
        setInputBirthYear(Number(value));
        break;
      case "animalType":
        setInputAnimalType(value);
        break;
    }
  }

  function submitDetails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const catData = {
      name: inputName,
      species: inputAnimalType,
      favFoods: inputFavFoods,
      birthYear: inputBirthYear,
    };
    change(catData);
  }

  return (
    <>
      <div>
        <h3>Add your favourite Cat and their details below!</h3>
        <form onSubmit={submitDetails}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={inputName}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="animalType">Cat or Dog</label>
            <input
              type="radio"
              value="Cat"
              name="animalType"
              id="animalType"
              checked
              onChange={handleInputChange}
            />
            Cat
            <input
              type="radio"
              value="Dog"
              name="animalType"
              id="animalType"
              onChange={handleInputChange}
            />
            Dog
          </div>
          <div>
            <label htmlFor="favFoods">Favourite food(s)</label>
            <input
              type="text"
              id="favFoods"
              value={inputFavFoods}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="birthYear">Birth year</label>
            <input
              type="text"
              id="birthYear"
              value={inputBirthYear}
              onChange={handleInputChange}
            ></input>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default Form;
