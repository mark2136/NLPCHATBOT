function getMessage() {
		var div = document.createElement('div');
		div.setAttribute('class', 'yourMessage');
		
		div.innerHTML = "<br>You: "+ document.getElementById("replyMsg").value;

		document.getElementById("messages").append(div);
		
		var messageArray = document.getElementById("replyMsg").value.split(" ");
		
		var botReply = createReply(messageArray);;
		
		var div2 = document.createElement('div');
		div2.setAttribute('class', 'botMessage');
		
		div2.innerHTML = "<br>Chatbot: " + botReply;

		document.getElementById("messages").append(div2);
		
		document.getElementById("replyMsg").value="";
		
		var objDiv = document.getElementById("messages");
		objDiv.scrollTop = objDiv.scrollHeight;
		}
		
function createReply(messageArray){
	//code here
	return "What did you do today?"
}

$(document).ready(function(){
	$('#replyMsg').on("keyup", function(e) {
		if (e.keyCode == 13) {
			//pressed Enter key
			getMessage();
		}
	});
});

