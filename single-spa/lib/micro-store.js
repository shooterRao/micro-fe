/*
 * @Author: raojw
 * @Date: 2019-10-11 16:47:36
 * @LastEditors: raojw
 * @LastEditTime: 2019-11-08 09:48:38
 * @Description: 状态管理、返回和vuex一样的对象选项，以便在子项目中动态注入
 */
System.register([], function($__export, $__moduleContext) {
  function MicroStoreCtor() {
    var defaultOpt = {
      state: {},
      mutations: {}
    };
    this.store = Object.create(null);

    this.register = function (module, opts) {
      var assignOpts = Object.assign({}, defaultOpt, opts);
      this.store[module] = assignOpts;
    };

    this.commit = function(module, moduleType, payLoad) {
      var store = this.store;
      if (!Object.prototype.hasOwnProperty.call(store, module)) {
        throw new Error('module is not regsiter');
      }

      var mutations = store[module].mutations;
      if (Object.keys(mutations).indexOf(moduleType) >= 0) {
        mutations[moduleType](store[module].state, payLoad);
      } else {
        throw new Error('moduleType is not regsiter');
      }
    };

    this.getState = function (module){
      return this.store[module];
    }
  }

  // 暂时做成单例
  var MicroStore = (function() {
    var storeInstance = null;
    return function() {
      return storeInstance
        ? storeInstance
        : (storeInstance = new MicroStoreCtor());
    };
  })();

  // systemjs 方式 export 出去
  return {
    // setters: [],
    execute: function() {
      $__export('default', MicroStore);
    }
  };
});
