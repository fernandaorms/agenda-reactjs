import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import  * as defaultActions from '../../store/modules/default/actions';

// import axios from '../../services/axios';

const Login = () => {
    // React.useEffect(() => {
    //     async function getData() {
    //         const response = await axios.get('');
    //         console.log(response);
    //     }

    //     getData();
    // }, []);
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(defaultActions.clickButton());
    }
    
    return (
        <div className='container'>
            <Title>
                Login
                <span>Already have an account?</span>
            </Title>
            
            <p>Lorem ipsum dolor sit amet.</p>

            <button type='button' onClick={handleClick}>Send</button>
        </div>
    )
};

export default Login;