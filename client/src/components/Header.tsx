const Header = () => {
  return (
    <header
      style={{
        height: "100px",
        position: "sticky",
        top: 0,
        backgroundColor: "#f5f5f5",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <h1 style={{ margin: 0 }}>Configuration App</h1>
    </header>
  );
};

export default Header;
