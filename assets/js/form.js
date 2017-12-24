var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "feedback";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){ 
    	alert("Thank you for your message");
       myform.find("button").text("Отправить");
    }, function(err) {
       alert("Could't send letter\r\n Error:\n " + JSON.stringify(err));
       myform.find("button").text("Try again");
    });
  return false;
});
