import { logo } from '../assets';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="header-logo" />
        </a>
        <button className="call-btn">
          Call Now
        </button>
      </div>
    </header>
  );
};

export default Header;