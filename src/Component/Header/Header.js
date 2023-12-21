import Button from "../Button/Button";
import "./header.css";

function Header() {
  /* Header menu list */
  let menuList = ["Home","Quote", "Resturants", "Foods", "Contact"];
  
  return (
    // header section
    <header className="header_container">
      <div>
        <img src="https://flowbite.com/docs/images/logo.svg" />
        <h1>GeekFoods</h1>
      </div>
      <ul>
        {menuList.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>
      <Button
        buttonText="Get started" id="headerButton"
      ></Button>
    </header>
  );
}

export default Header;
