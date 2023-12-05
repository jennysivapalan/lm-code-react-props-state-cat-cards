interface HeaderProps {
  numCats: number;
  numDogs: number;
}

const Header: React.FC<HeaderProps> = (props) => (
  <header className="header__container">
    <h1 className="header__title header__welcome">Welcome to React!</h1>
    <h2 className="header__title">
      There are currently {props.numCats} Cats and {props.numDogs} Dogs in this
      App
    </h2>
  </header>
);

export default Header;
