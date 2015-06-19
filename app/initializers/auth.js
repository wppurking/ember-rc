export function initialize(container, application) {
  application.inject('route', 'auth', 'service:auth-manager');
  application.inject('controller', 'auth', 'service:auth-manager');
}

export default {
  name: 'auth',
  initialize: initialize
};
