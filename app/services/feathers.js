import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';
import errors from 'feathers-errors'; // An object with all of the custom error types.
import auth from 'feathers-authentication-client';
import io from 'socket.io-client/dist/socket.io';
import rest from 'feathers-rest/client';
const axios = require('axios'); 

let url = "https://checkevent.herokuapp.com";
//let url = "http://localhost:5000";


const restClient = rest(url);

const feathersClient = feathers()
  .configure(restClient.axios(axios)) 
  .configure(hooks())
  .configure(auth({
    header: 'Authorization', // the default authorization header for REST
    path: '/authentication', // the server-side authentication service path
    jwtStrategy: 'jwt', // the name of the JWT authentication strategy 
    entity: 'user', // the entity you are authenticating (ie. a users)
    service: 'users', // the service to look up the entity
    cookie: 'feathers-jwt', // the name of the cookie to parse the JWT from when cookies are enabled server side
    storageKey: 'feathers-jwt', // the key to store the accessToken in localstorage or AsyncStorage on React Native
    storage: window.localStorage // Passing a WebStorage-compatible object to enable automatic storage on the client.
  }));

export default feathersClient;