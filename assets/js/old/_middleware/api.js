const BASE_URL = 'https://localhost:3001/api/';

const callApi = (endpoint, authenticated) => {
    let token = localStorage.getItem('token') || null;
    let config = {};

    if (authenticated) {
        if (token) {
            config = {
                headers: {
                    'Authorization': `Token token=${token}`
                }
            };
        } else {
            throw 'No token saved!';
        }
    }

    return fetch(BASE_URL + endpoint, config)
        .then(response => console.log(response))
        .catch(error => console.log(error));
};

export const CALL_API = Symbol('Call API');

export default store => next => action => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint, types, authenticated } = callAPI;

    const [ requestType, successType, errorType ] = types;

    return callApi(endpoint, authenticated).then(
        response =>
            next({
                response,authenticated,
                type: successType
            }),
        error => next({
            error: message.error || "There was an error.",
            type: errorType
        }));
}
