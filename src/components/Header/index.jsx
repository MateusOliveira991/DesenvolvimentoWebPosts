import {Link} from 'react-router-dom';
import Back from '../../assets/back-button.svg';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to='/'>
          <img src={Back} style={{ width: '50px', marginLeft: '20px' }} />
        </Link>
      </div>
    </header>
  );
}