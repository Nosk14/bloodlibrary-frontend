import React from 'react';
import ReactDOM from 'react-dom';
import SidebarContainer from './sidebar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


class WebLayout extends React.Component {
  render() {
    return (
      <div>
        <div id="sidebar-menu" ><SidebarContainer /></div>
        <div id="content"><p>Coming soon...</p></div>
      </div>
    );
  }
}


ReactDOM.render(
  <WebLayout />,
  document.getElementById('root')
);
