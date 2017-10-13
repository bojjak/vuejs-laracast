window.Event = new Vue();

Vue.component('coupon', {

	template: '<input placeholder="enter your coupon code" @blur="onCouponApplied">',

	methods: {
		onCouponApplied(){
			Event.$emit('applied');

		}
	}
});

new Vue({
	el: '#root',

	data: {
		couponApplied: false
	},

	created(){
		console.log(123);
		Event.$on('applied', () => alert('Handling it bla!'));
	}
});
