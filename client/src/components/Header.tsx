import logo from "../assets/logo/saunhardy-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Minecraft Web Configurator</h1>
      </div>
      <div className="header-right">
        <a href="https://github.com/matejhozlar/mc-server-setup-ui">
          <img src={logo} alt="App Logo" className="header-logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
