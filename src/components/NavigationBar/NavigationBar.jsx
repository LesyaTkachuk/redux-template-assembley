import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <ul className={styles.navigationBar}>
      {routes.map(({ name, showInMenu, path, exact }, idx) => (
        <li key={name} className={styles.navigationItem}>
          <NavLink
            to={path}
            exact={exact}
            className={styles.navigationLink}
            activeClassName={styles.activeNavigationLink}
          >
            {showInMenu}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
