$ (document).ready(function(){
    $ (".clickable").click(function(){
    $(this).children(".click").toggle(1200);
    $(this).children (".hidden").toggle(1200);
    });
})
$(document).ready(function(sogomi){
    $("button").click(function(){
        var client=document.getElementById("name").value;
        alert(client + " " + "we have received the message.Thank you!")
        sogomi.preventDefault
    })
})