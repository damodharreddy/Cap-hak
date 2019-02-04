
var searchBar = new Vue({
  el: '#searchBar',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    clickButton: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
/*  input component */
Vue.component('hak-input', {
	props: ['message'],
	data: function () {
		return {
		  defaultValue: 'Hello Vue!'
		}
	  },
	template: '<input type="text" class="form-control"  placeholder="" v-model="defaultValue">'
})

var buttonId = new Vue({ el: '#components-demo' })

/*  list component */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})