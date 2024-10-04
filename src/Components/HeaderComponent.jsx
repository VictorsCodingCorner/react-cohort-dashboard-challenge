import HeaderLogo from "../assets/HeaderLogo.svg";

export default function HeaderComponent() {
  return (
    <header>
      <img src={HeaderLogo} alt="Logo" />
      <h1>My App</h1>
    </header>
  );
}
