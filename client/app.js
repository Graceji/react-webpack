import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './containers/App';
import appState from './store';
// import { AppContainer } from 'react-hot-loader';

// const root = document.getElementById('root');
// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     root
//   );
// }

// render(App);
const renderMethod = !module.hot ? ReactDOM.hydrate : ReactDOM.render;

renderMethod(
  <Provider appState={appState}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
); // eslint-disable-line

// if (module.hot) {
//   module.hot.accept('./App.jsx', () => {
//     // 重新加载App组件
//     const nextApp = require('./App.jsx').default;
//     render(nextApp);
//   })
// }
