import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const NavItemLink = ({ to, exact, ...props }) => (
  <Route path={ to } exact={ exact }>
    {({ match }) => (
      <NavItem
        to={ to }
        href={ to }
        exact={ exact }
        { ...props }
        componentClass={ NavLink }
        active={ !!match }
      />
    )}
  </Route>
);

NavItemLink.propTypes = NavLink.propTypes;

export default NavItemLink;
