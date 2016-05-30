import AbstractIndexRoute from 'hospitalrun/routes/abstract-index-route';
export default AbstractIndexRoute.extend({
  modelName: 'patient',
  pageTitle: 'Patient Lists',

  _getStartKeyFromItem: function(item) {
    var displayPatientId = item.get('displayPatientId');
    console.log(displayPatientId);
    return [displayPatientId, 'patient_' + item.get('id')];
  },

  _modelQueryParams: function() {
    return {
      mapReduce: 'patient_by_display_id'
    };
  }

});
