import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connexion from './Connexion';



ReactDOM.render(<App />, document.getElementById('root'));

// const Root = () => {
// 	return (
// 		<BrowserRouter>
// 			<div>
// 				<Match exactly pattern="/" component={Connexion} />
// 				<Match pattern="/box/:pseudo" component={App} />
// 				<Miss component={NotFound} />
// 			</div>
// 		</BrowserRouter>
// 	)
// }

// render(
//   <Root />,
//   document.getElementById('root')
// );



