import React, { Component, Children, cloneElement } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

 class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          {Children.map(this.props.children, (child) => cloneElement(child, {}))}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App