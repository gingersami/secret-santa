function createUser(values,email,name){
$.ajax({
    method: "POST",
    url: "/event/" + window.location.pathname,
    data: {
        name: name,
        email:email,
        pref:values
    },
    dataType:json,
    
    success: function () {
        alert("Event created successfully! sending you to events page")
        window.location = '/events'
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
    }
});
return false
}

$('#submit-button').on('click',function(){
    var pref =[]
    var email = $('#Email').val();
    var name = $('#Name').val();
    var values = [],
        inputs = document.getElementsByTagName("input");

    for (var i = inputs.length - 1; i >= 0; i--)
        if (inputs[i].type === "checkbox" && inputs[i].checked)
            values.push(inputs[i].id);
    createUser(values,email, name)    
})

