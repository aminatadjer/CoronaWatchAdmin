
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Le modérateur a valider l'ajout de cas num 4</MenuItem>
            <MenuItem eventKey={2.2}>Le modérateur a valider la mise a jour des zones a risque num 6</MenuItem>
            <MenuItem eventKey={2.3}>Le modérateur a valider l'ajout de cas num 8</MenuItem>
            <MenuItem eventKey={2.4}>Le modérateur a valider la mise a jour des zones a risque num 9</MenuItem>
            <MenuItem eventKey={2.5}>Afficher toutes les notifications</MenuItem>
          </NavDropdown>
          
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Mon Compte
          </NavItem>
          
          <NavItem eventKey={3} href="#">
            Deconnexion
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
