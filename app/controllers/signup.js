import Ember from 'ember';
// import ENV from '../server/config.js';

export default Ember.Controller.extend({
	actions:{
		clickRegister: function(){
			var hospitalName = this.get('hospitalName');
			var hospitalAddress = this.get('hospitalAddress');
			var adminName = this.get('adminName');
			var email = this.get('email');
			var password = this.get('password');
		}
	}
});
