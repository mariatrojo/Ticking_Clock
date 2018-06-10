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

    str += "The time is: " + hours +":" + minutes + ":" + seconds + ampm;
    document.getElementById("todaysDate").innerHTML = str;
}

setInterval(doDate, 1000);


////////////////////////////////////////////
// REACT TIME

function upDate(){
	var now = new Date();
	var localTime = now.toLocaleTimeString('en-US');
	const myButton2 = React.createElement('p', null, localTime);

	ReactDOM.render(myButton2, document.getElementById('reactTime'));
}


setInterval(upDate, 1000);

////////////////////////////////////////////

const title = React.createElement('h1', null, 'Hello Dojo!');
const subject = React.createElement('h2', null, 'Things I need to do:');
const item1 = React.createElement('li', null, 'Learn React');
const item2 = React.createElement('li', null, 'Climb Mt. Everest');
const item3 = React.createElement('li', null, 'Run a marathon');

ReactDOM.render([title, subject, item1, item2, item3], document.getElementById('helloDojo'));

