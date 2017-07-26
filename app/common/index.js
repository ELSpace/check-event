import PrivateRoute from './PrivateRoute';
import actions from './actions';
import profileItems from './profileItems';
import routes from './routes';
import toastr from 'toastr';

toastr.options = {
  "debug": false,
  "positionClass": "toast-bottom-right",
  "onclick": null,
  "fadeIn": 300,
  "fadeOut": 1000,
  "timeOut": 5000,
  "extendedTimeOut": 1000
}

export {
  PrivateRoute,
  actions,
  profileItems,
  routes
};