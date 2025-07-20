import logo from "../assets/logo/saunhardy-logo.png";

type ElectronShell = {
  openExternal: (url: string) => void;
};

type ElectronWindow = Window & {
  electron?: {
    shell?: ElectronShell;
  };
};

const Header = () => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const win = window as ElectronWindow;

    if (win.electron?.shell?.openExternal) {
      win.electron.shell.openExternal(
        "https://github.com/matejhozlar/mc-server-setup-ui"
      );
    } else {
      window.open(
        "https://github.com/matejhozlar/mc-server-setup-ui",
        "_blank"
      );
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Minecraft Web Configurator</h1>
      </div>
      <div className="header-right">
        <a
          href="https://github.com/matejhozlar/mc-server-setup-ui"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="App Logo" className="header-logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
