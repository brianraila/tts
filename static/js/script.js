$(document).ready(function(){
    $("#buttonX").click(function(){
       $.ajax({
        type : "POST",
        contentType : "application/json; charset=utf-8",
        url : "/tts",
        data : JSON.stringify({text: $("#mytext").val(), textID : (Math.random() * 10).toString()}),
        success : function(results){
            $("#myAudio").attr("src", results.location);
        },
        dataType: "json"
       }); 
    });


});


