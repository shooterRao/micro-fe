import store from './store'

import microStore from "micro-store"

const micStore = new microStore.default()
const globalState = micStore.getState('globalState')

store.registerModule('globalState', globalState);
