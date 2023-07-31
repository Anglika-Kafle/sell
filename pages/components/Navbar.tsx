function Navbar() {
  return (
    // <div className="h">Navbar</div>
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand ml-10 sellbuy" href="/">
            SellBuy
          </a>
          <a className="navbar-brand h" href="/">
            Home
          </a>
          <a className="navbar-brand ml-10" href="/Sell">
            sell
          </a>
          <a className="navbar-brand ml-10" href="#">
            buy
          </a>
          <a className="navbar-brand ml-10" href="/about">
            aboutus
          </a>
          <a className="btn1 btn-secondary ml-10" href="/signup">
            login/signup
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
