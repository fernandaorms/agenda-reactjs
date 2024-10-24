import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import AppRoutes from './routes';


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <AppRoutes />
                <GlobalStyles />
                <ToastContainer autoClose={10000} className='toast-container' />
            </Router>
        </Provider>
    );
};

export default App;