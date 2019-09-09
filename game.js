var c=0;
function startGame() {

	for(var i=1;i<=9;i++)
	{
		clearBox(i);
	}
	document.turn="X";
	if(Math.random()<0.5)
	{
		document.turn="O";
	}
	document.winner=null;
	$("#message").html(document.turn + " gets to start the game");
	/*setMessage(document.turn + " gets to start the game");*/
}

function setMessage(msg) {
	document.getElementById("message").innerText=msg;
}

function nextMove(sqr) {
	if(document.winner!=null)
	{
		setMessage(document.winner+" has already won the game!!!!!");
	}
	else if(sqr.innerText=="")
	{
		sqr.innerText=document.turn;
		switchTurn();
		c++;
	}
	else if(document.winner==null && c==9)
	{
		setMessage(">>>GAME OVER<<<\nIt's a draw!!");
	}
	else
		setMessage("This box is already filled!!!!");

}

function switchTurn() {
	if(checkWinner(document.turn))
	{
		setMessage("Congragulations '"+document.turn+"' ! You have won!!!!!");
		document.winner=document.turn;
	}
	else if(document.turn=="X")
	{
		document.turn="O";
		setMessage("It's "+document.turn+"'s turn!");
	}
	else
	{
		document.turn="X";
		setMessage("It's "+document.turn+"'s turn!");
	}
	
}

function checkRow(a,b,c,move) {
	var result=false;
	if(getBox(a)==move && getBox(b)==move && getBox(c)==move)
	{
		result=true;
	}
	return result;
}

function getBox(number) {
	return document.getElementById("s"+number).innerText;
}

function checkWinner(move) {
	var result=false;
	if(checkRow(1,2,3,move) || checkRow(4,5,6,move)|| checkRow(7,8,9,move)|| checkRow(1,4,7,move)|| checkRow(2,5,8,move)|| checkRow(3,6,9,move)|| checkRow(1,5,9,move) ||checkRow(3,5,7,move))
	{
		result=true;
	}
	return result;
}

function clearBox(number) {
	document.getElementById("s"+number).innerText="";
}