import Ember from 'ember';

export default Ember.Route.extend({
	name: null,
	actions:{
		clickRegister: function(){
			console.log(ENV.server);
		}
	}
});
