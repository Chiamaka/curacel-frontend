import Ember from 'ember'; 

var RegisterController = Ember.Controller.extend({
  session: Ember.inject.service(),
  errorMessage: null,
  email: null,
  password: null,

  actions: {
    register() {
    	var hospitalName = this.get('hospitalName');
		var hospitalAddress = this.get('hospitalAddress');
		var adminName = this.get('adminName');
		//var email = this.get('email');
      	let { email, password } = this.getProperties('email', 'password');
		let userData = {
			hospitalName,
			hospitalAddress,
			adminName
		};

      	this.get('session').authenticate('authenticator:register', {
        	email: email,
        	password: password,
        	userData
     	}).catch((error) => {
        	this.set('errorMessage', error.reason);
      	});
    }
  }
});

export default RegisterController;
