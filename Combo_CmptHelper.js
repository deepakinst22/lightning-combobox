({
     getContactList : function(cmp) {
        var action = cmp.get('c.getContactList');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {               
                var myMap = cmp.get("v.TempMap");
                var myOptions = [];
                if(myMap == null){
                     myMap = {};
                }
                
                myMap = JSON.parse(JSON.stringify(response.getReturnValue())); 
                console.log('myMap '+myMap);
                for(var cont in myMap){
                    myOptions.push({label:myMap[cont], value:cont});
                }
                console.log('myOptions '+myOptions);
                cmp.set("v.options", myOptions); 
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }
})
