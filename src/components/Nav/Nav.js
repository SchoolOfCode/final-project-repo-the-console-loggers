import { Link, useLocation } from 'react-router-dom';
import { pathWay } from '../../data/navigation';
import ScrollToTop from '../../Utils/ScrollToTop';

function Nav() {
  let location = useLocation();

  return (
    <div className='nav-wrapper'>
      <ScrollToTop />
      <ul>
        {pathWay.map((item) => {
          return (
            <li key={item.id}>
              <Link className='link' to={item.name}>
                <img
                  className='icon'
                  src={
                    location.pathname === item.path[0] ||
                    location.pathname === item.path[1]
                      ? item.activeImg
                      : item.noActiveImg
                  }
                  alt={item.name}
                />
                <p>{item.slug}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
