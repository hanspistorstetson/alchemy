import axios from 'axios'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

requestLogin = creds => {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    };
};

receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: user.token
    };
};

loginError = message => {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    };
};

export loginUser = credentials => {
    return dispatch => {
        dispatch(requestLogin(credentials));

        const params = {
            user: {
                email: credentials.email,
                password: credentials.password
            }
        };

        return axios.post('http://localhost:4000/sessions', params)
            .then(response => console.log(response))
            .catch(error => consoel.log(error));
    };
};
