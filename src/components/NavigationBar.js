import React, {Component} from 'react';
//need to import the logo here
import Button from '../components/Button';
import NavBar from 'react-bootstrap/NavBar';
import {Nav} from 'react-bootstrap';
import styles from '../styles/NavigationBar.module.css';

class NavigationBar extends React.Component {

  render() {
    return (

      <nav className={styles.NavBar}>
         <nav className="mr-auto">
              <a className={styles.Logo} href="/">
                Bouncer
              </a>
          </nav>

          <nav className={styles.rhs}>
            <Nav.Link className={styles.tog} href="/" > Company</Nav.Link>
            <Nav.Link className={styles.tog} href="/" > Documentation</Nav.Link>
            <Button action={() => console.log("go to contact us screen")}>
              Contact Us
            </Button>
          </nav>

      </nav>

    )
  }
}

export default NavigationBar;
