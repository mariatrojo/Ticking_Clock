const myButton = React.createElement('button', null, 'Click Me');
console.log(JSON.stringify(myButton));
/*
	Prints the following:
	{
	"type":"button",
	"key":null,
	"ref":null,
	"props": {
	"children":"Click Me!"
	},
	"_owner":null,
	"_store":{}
	}
*/
ReactDOM.render(myButton, document.getElementById('app'));

////////////////////////////////////////////
// JAVASCRIPT TIME

function doDate(){
	var str = "";
	var now = new Date();
	var hours = now.getHours();
	var seconds = now.getSeconds();
	var minutes = now.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	minutes = minutes < 10 ? '0'+minutes : minutes;
	seconds = seconds < 10 ? '0'+seconds : seconds;

    // var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    // var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    

    str += "The time is: " + hours +":" + minutes + ":" + seconds + ampm;
    document.getElementById("todaysDate").innerHTML = str;
}

setInterval(doDate, 1000);


////////////////////////////////////////////
// REACT TIME

const myButton2 = React.createElement('button', null, 'Click Me');

ReactDOM.render(myButton2, document.getElementById('reactTime'));