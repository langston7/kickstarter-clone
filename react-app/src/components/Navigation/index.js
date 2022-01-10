import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from './logo';
import LogoutButton from '../auth/LogoutButton';
import './Navigation.css'
import Modal from '../Modal/index';
import TagsModal from '../TagsModal';

const Navigation = () => {
  const user = useSelector(state => state.session.user);
  const tags = useSelector(state => Object.values(state.tags));
  const [showDiscover, setShowDiscover] = useState(false);

  return (
    <nav className='nav-bar'>
      <div className='nav-section'>
        <button className='nav-button' id="discover" onClick={() => setShowDiscover(true)}>Discover</button>
        <Modal title='Discover' onClose={() => setShowDiscover(false)} show={showDiscover}>
          <TagsModal tags={tags} onClose={() => setShowDiscover(false)} />
        </Modal>
        <NavLink to='/start' className='nav-button' exact={true} activeClassName='active'>
          Start a project
        </NavLink>
      </div>
      <div className='nav-section nav-section-logo'>
        <NavLink to='/' className='nav-button' exact={true} activeClassName='active'>
          <Logo />
        </NavLink>
      </div>
      <div className='nav-section nav-section-right'>
        {user ? <LogoutButton /> :
          <NavLink to='/login' className='nav-button login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        }
      </div>
    </nav>
  )
};

export default Navigation;
