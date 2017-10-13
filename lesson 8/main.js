Vue.component('task-list', {

	template: `
		<div>
			<li v-for="task in tasks">{{task.description}}</li>
		</div>
	`,

	data(){
		return {
			tasks: [
				{ description: 'go to store', completed: true},
				{ description: 'go to the email', completed: true},
				{ description: 'go to the farm', completed: true},
				{ description: 'go to work', completed: true},
			]
		}
	}
});

Vue.component('task', {

	template: '<li><slot></slot></li>',

});


new Vue({
	el: '#root',
});