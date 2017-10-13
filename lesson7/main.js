Vue.component('task', {

	template: '<li><slot></slot></li>',

});

Vue.component('naslov', {

	template: '<h1>Zakucani</h1>'

});

Vue.component('mojnaslov', {

	template: '<h2><slot></slot></h2>'

});

Vue.component('izniza', {

	template: '<h3>{{message}}</h3>',

	data(){
		return {
			message: 'a ovaj iz date',
		};
	}

});

new Vue({
	el: '#root',
});