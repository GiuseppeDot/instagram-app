const MobileNavbar = () => {
  return (
    <>
      <div className="navbarSettings">
        <h1>Per te</h1>
        <div className="search-favourite-navbar">
          <div>
            <form>
              <label htmlFor="searchInput">
                <i className="bi bi-search"></i>
              </label>
              <input type="text" id="searchInput" placeholder="Cerca" />
            </form>
          </div>
          <i className="bi bi-heart "></i>
        </div>
      </div>
      <hr />
      {/* ------------ */}
      <div className="downNavbar-mobile-container">
        <hr />
        <div className="downNavbar-mobile">
          <i className="bi bi-house-door-fill"></i>
          <i className="bi bi-compass"></i>
          <i className="bi bi-film"></i>
          <i className="bi bi-plus-square"></i>
          <i className="bi bi-send"></i>
          <i className="bi bi-clipboard-data"></i>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
