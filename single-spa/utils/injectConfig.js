Promise.all([
  System.import('axios'),
  System.import('vuex'),
  System.import('micro-store')
]).then(function(modules) {
  const axios = modules[0];
  const vuex = modules[1];

  const microStore = modules[2];

  const store = new microStore.default();

  axios.get('/config/appConfig.json').then(res => {
    store.register('globalState', {
      state: {
        config: null,
        sysName: ''
      },
      mutations: {
        setConfig(state, data) {
          state.config = data;
        },
        setSysName(state, sysName) {
          state.sysName = sysName;
        }
      }
    });

    store.commit('globalState', 'setConfig', res.data);
    store.commit('globalState', 'setSysName', res.data.name);

    const moduleState = store.getState('globalState');

    console.log(moduleState.state);
  });
});
