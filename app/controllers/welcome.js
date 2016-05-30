import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		clickRegister: function(){
			var hospName = this.get('hospitalName');
			var link = "http://localhost:5984/" + hospName;
			console.log(self);
			// $.ajax({
			// 	type: 'PUT',
			// 	url: link,
			// 	complete: function(jqXHR) {
			// 		if (jqXHR.status === 200 || jqXHR.status === 412) {
			// 			console.log('cool');
   //      			}
   //      			return;
   //  			}
			// });
		}
	}
});
