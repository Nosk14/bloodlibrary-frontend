import React from 'react';
import Nav from 'react-bootstrap/Nav'
import github_icon from './img/github-icon.png'
import telegram_icon from './img/telegram-icon.png'

class SidebarContainer extends React.Component {
    render(){
        return (
        <div className="sidebar-container">
            <div><h1>Blood Library</h1></div>
            <NavMenu/>
            <Footer/>
        </div>
        );
    }
}

class NavMenu extends React.Component {
    render() {
      return (
        <Nav defaultActiveKey="/home" className="flex-column" >
          <Nav.Link className="menu-element" href="/home">Home</Nav.Link>
          <Nav.Link className="menu-element" href="search" disabled>Search Cards</Nav.Link>
          <Nav.Link className="menu-element" href="expansions" disabled >Expansions</Nav.Link>
          <Nav.Link className="menu-element" href="tournament-decks" disabled>Tournament Decks</Nav.Link>
          <Nav.Link className="menu-element" href="api" disabled>API</Nav.Link>
          <Nav.Link className="menu-element" href="http://www.vekn.net/">V:EKN</Nav.Link>
          <Nav.Link className="menu-element" href="about" disabled>About</Nav.Link>
        </Nav>
      );
    }
  }

  class Footer extends React.Component {
      render(){
          return (
            <div className="sidebar-footer">
                <div/>
                <img src={telegram_icon} alt="Telegram group"></img>
                <img src={github_icon} alt="Github project"></img>
                <div/>
            </div>
          );
      }
  }

  export default SidebarContainer;