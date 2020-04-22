import React, {Component} from 'react';
import Button from '../components/Button';
import {Nav} from 'react-bootstrap';
import styles from '../styles/NavigationBar.module.css';
import classNames from 'classnames';

class NavigationBar extends React.Component {

  render() {
    return (

      <nav className="navbar fixed-top navbar-expand-lg bg-light navbar-light">
         <nav className="mr-auto">
              <a className={styles.Logo} href="/">
                Bouncer
              </a>
          </nav>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">

          <nav className="ml-auto navlink" id="navbarSupportedContent">
            <Nav.Link className={classNames({[styles.tog]: true, ['align-self-center']: true})} href="/"> Company</Nav.Link>
            <Nav.Link className={classNames({[styles.tog]: true, ['align-self-center']: true})} href="/" > Documentation</Nav.Link>
            <div className={styles.tog}>
              <Button action={() => window.location.href = "contact"}>
                Contact Us
              </Button>
            </div>
            
          </nav>
          </div>

      </nav>



    )
  }
}

export default NavigationBar;
