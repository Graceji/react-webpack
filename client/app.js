import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
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

ReactDOM.render(<App />, document.getElementById('root'))

// if (module.hot) {
//   module.hot.accept('./App.jsx', () => {
//     // 重新加载App组件
//     const nextApp = require('./App.jsx').default;
//     render(nextApp);
//   })
// }
