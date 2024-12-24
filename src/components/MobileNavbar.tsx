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
    </>
  );
};

export default MobileNavbar;
