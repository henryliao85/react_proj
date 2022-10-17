import { Link } from "react-router-dom";

const Nav = () => {
    return(
      <nav className="min-width grey darken-4" role="navigation">
        <div className="row" style={{"width": "80%"}}>
          <Link to="/" className="col s3 brand-logo right blue-grey-text text-lighten-5 titlesec" id="logo-container">
                <div>
                  <img src="/pic/hp.gif" alt="Icon" width="70" height="70" />
                  <span className="title-name">
                    Example
                  </span>
                </div>
                
          </Link>
          <div className="col s9 push-s2">
            <ul className="right">
              <li>
                <Link to="/Poster" className="tab-title">
                  Poster
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;