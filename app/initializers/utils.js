export function initialize(container, application) {
  application.inject('route', 'utils', 'service:utils-service');
  application.inject('controller', 'utils', 'service:utils-service');
  application.inject('adapter', 'utils', 'service:utils-service');
  application.inject('component', 'utils', 'service:utils-service');
}

export default {
  name: 'utils',
  initialize: initialize
};
