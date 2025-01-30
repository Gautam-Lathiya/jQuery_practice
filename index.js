$(document).ready(function(){
    $('#p1').mouseover(function(){
        $('#p1').css("border", "1px solid");
    })
    $('#p1').mouseout(function(){
        $('#p1').css("border", "0px");
    })
})

$(document).ready(function(){
    $('button#hide').click(function(){
        $('p').hide(2000,function(){
            alert("click on show");
        });  
    })
    $('button#show').click(function(){
        $('p').show(2000);
    })
    // you can give 2 optional args to hide(). 
    // #first one : (slow, fast, miliseconds).
    // #second one : a callback to be executed when hide() completes it's execution. 
    // same goes for show() as well.
})

$(document).ready(function(){
    $("#btn1").click(function(){
      alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html());
    });
    $("#btn3").click(function(){
        alert("Value: " + $("#inpt").val());
    });
});