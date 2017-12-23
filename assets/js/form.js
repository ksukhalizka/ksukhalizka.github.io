var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "feedback";

  myform.find("button").text("Отправка...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){ 
    	alert("Отправлено!");
       myform.find("button").text("Отправить");
    }, function(err) {
       alert("Не удалость отправить сообщение!\r\n Ошибка:\n " + JSON.stringify(err));
       myform.find("button").text("Отправить еще раз");
    });
  return false;
});