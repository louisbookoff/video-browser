import Vue from 'vue' // webpack automaticxally looks in the node_modules directory
import App from './App'

new Vue ({
  // el: '#app', same thing as $mount below
  render: h => h(App)
}).$mount('#app')
// h stands for createElement - abbreviation
