({
    setInitialData:function(component){
          var options = component.get('v.options');
          var options_Internal = [];
          options_Internal.push({'label':'All','isSelected':false});
          options.forEach(function(option){
              options_Internal.push({'label':option,'isSelected':false});
          });
          component.set('v.options_internal',options_Internal);
    },
  getSelectedValues: function(component){
    var options = component.get("v.options_internal");
    var values = [];
    options.forEach(function(element) {
      if (element.selected) {
        values.push(element.value);
      }
    });
    return values;
  },
//
//  getSelectedLabels: function(component){
//    var options = component.get("v.options_");
//    var labels = [];
//    options.forEach(function(element) {
//      if (element.selected) {
//        labels.push(element.label);
//      }
//    });
//    return labels;
//  },
//
//  despatchSelectChangeEvent: function(component,values){
//    var compEvent = component.getEvent("selectChange");
//    compEvent.setParams({ "values": values });
//    compEvent.fire();
//  }
})
