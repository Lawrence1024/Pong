//Pong JavaScript
//Function Library----------------------------------------------
	//Set the elements back in place when someone scores.
	function initializeGame(){
		ball.style.top="150px";
		ball.style.left="400px";
		paddle1.style.top="150px";
		paddle2.style.top="150px";
		paddleCom.style.top="150px";
		horizontalMovement=4;
		verticalMovement=0;
		movingArray=[];
	}
	//Push the keyCode into an array when a key is pressed.
	function keyDown(e){
		var appear=movingArray.indexOf(e.keyCode);
		if(appear==-1){
			movingArray.push(e.keyCode);
		}
	}
	//Delete the keyCode from the array when a key is released.
	function keyUp(e){
		movingArray.splice(movingArray.indexOf(e.keyCode),1);
	}
	//To determine whether to go into pVcClassic or pVpClassic.
	function classicMode(elem){
		if(elem.id=="pVcClassic"){
			classicButtonElem.style.display="none";
			crazyButtonElem.style.display="none";
			powerButtonElem.style.display="none";
			pVcClassic();
		
		}else if(elem.id=="pVpClassic"){
			classicButtonElem.style.display="none";
			crazyButtonElem.style.display="none";
			powerButtonElem.style.display="none";
			pVpClassic();
		}else{
			alert("Something is wrong in classicMode");
		}
	}
	//To determine whether to go into pVcCrazy or pVpCrazy.
	function crazyMode(elem){
		horizontalMovement=7;
		if(elem.id=="pVcCrazy"){
			classicButtonElem.style.display="none";
			crazyButtonElem.style.display="none";
			powerButtonElem.style.display="none";
			pVcCrazy();
		}else if(elem.id=="pVpCrazy"){
			classicButtonElem.style.display="none";
			crazyButtonElem.style.display="none";
			powerButtonElem.style.display="none";
			pVpCrazy();
		}else{
			alert("Something is wrong in crazyMode()");
		}
	}
	//To determine whether to go into pVcPowerUp or pVpPowerUP.
	function powerUpMode(elem){
		if(elem.id=="pVcPower"){
			classicButtonElem.style.display="none";
			crazyButtonElem.style.display="none";
			powerButtonElem.style.display="none";
			pVcPower();
		}else if(elem.id=="pVpPower"){
			classicButtonElem.style.display="none";
			crazyButtonElem.style.display="none";
			powerButtonElem.style.display="none";
			pVpPower();
		}else{
			alert("Something is wrong in powerUpMode()");
		}
	}
	//To get the CSS style when inputed the element and the style wanted.
	function getTheStyle(id,style){
		var resultStyle=window.getComputedStyle(id,null).getPropertyValue(style);
		return resultStyle;
	}
	//To move the Computer Paddle.
	function moveComputerPaddle(){
		var paddleComTop = parseFloat(getTheStyle(paddleCom,"top"));
		var paddleComHeight = parseFloat(getTheStyle(paddleCom,"height"));
		var paddleComWidth = parseFloat(getTheStyle(paddleCom,"width"));
		var paddleComLeft = parseFloat(getTheStyle(paddleCom,"left"));
		var ballLeft = parseFloat(getTheStyle(ball,"left"));
		var ballTop = parseFloat(getTheStyle(ball,"top"));
		var ballHeight = parseFloat(getTheStyle(ball,"height"));
		var ballWidth = parseFloat(getTheStyle(ball,"width"));
		var hitPlace = parseFloat(Math.random()*paddleComHeight);
		var wallTopTop = parseFloat(getTheStyle(wallTop,"top"));
		var wallTopHeight = parseFloat(getTheStyle(wallTop,"height"));
		var wallBottomTop = parseFloat(getTheStyle(wallBottom,"top"));
		paddleComTop = parseFloat(getTheStyle(paddleCom,"top"));
		paddleComHeight = parseFloat(getTheStyle(paddleCom,"height"));
		paddleComWidth = parseFloat(getTheStyle(paddleCom,"width"));
		paddleComLeft = parseFloat(getTheStyle(paddleCom,"left"));
		ballLeft = parseFloat(getTheStyle(ball,"left"));
		ballTop = parseFloat(getTheStyle(ball,"top"));
		ballHeight = parseFloat(getTheStyle(ball,"height"));
		ballWidth = parseFloat(getTheStyle(ball,"width"));
		if(paddleComTop+paddleComHeight>=wallBottomTop){
			paddleCom.style.top=paddleComTop-2.5+"px";
		}else if(paddleComTop<=wallTopTop+wallTopHeight){
			paddleCom.style.top=paddleComTop+2.5+"px";
		}
		if((paddleComTop<ballTop)&&(paddleComTop+paddleComHeight-hitPlace>ballTop)&&(paddleComTop+paddleComHeight>=wallBottomTop)&&(paddleComTop<=wallTopTop+wallTopHeight)){
			
		}else if((ballTop<paddleComTop)&&(horizontalMovement<0)){
			paddleCom.style.top=paddleComTop-2.5+"px";
		}else if((ballTop>paddleComTop+paddleComHeight-hitPlace)&&(horizontalMovement<0)){
			paddleCom.style.top=paddleComTop+2.5+"px";
		}
	}
	//To move the player paddle base on the moving array.			
	function movePlayerPaddle(){
		var paddle1Height = parseFloat(getTheStyle(paddle1,"height"));
		var player1Top = parseFloat(getTheStyle(paddle1, "top"));
		var paddle2Height = parseFloat(getTheStyle(paddle2,"height"));
		var player2Top = parseFloat(getTheStyle(paddle2, "top"));
		var wallTopTop = parseFloat(getTheStyle(wallTop,"top"));
		var wallTopHeight = parseFloat(getTheStyle(wallTop,"height"));
		var wallBottomTop = parseFloat(getTheStyle(wallBottom,"top"));
		if((movingArray.indexOf(38)>=0)&&(player1Top>=wallTopTop+wallTopHeight)){
			paddle1.style.top=player1Top-3+"px";
		}
		if((movingArray.indexOf(40)>=0)&&(player1Top+paddle1Height<=wallBottomTop)){
			paddle1.style.top=player1Top+3+"px";
		}
		if((movingArray.indexOf(87)>=0)&&(player2Top>=wallTopTop+wallTopHeight)){
			paddle2.style.top=player2Top-3+"px";
		}
		if((movingArray.indexOf(83)>=0)&&(player2Top+paddle2Height<=wallBottomTop)){
			paddle2.style.top=player2Top+3+"px";
		}
	}
	//To move the ball.
	function moveBall(){
		var ballLeft = parseFloat(getTheStyle(ball,"left"));
		var ballTop = parseFloat(getTheStyle(ball,"top"));
		var ballHeight = parseFloat(getTheStyle(ball,"height"));
		var ballWidth = parseFloat(getTheStyle(ball,"width"));
		var paddle1Left = parseFloat(getTheStyle(paddle1,"left"));
		var paddle1Top = parseFloat(getTheStyle(paddle1,"top"));
		var paddle1Height = parseFloat(getTheStyle(paddle1,"height"));
		var paddle1Width = parseFloat(getTheStyle(paddle1,"width"));
		var paddle2Top = parseFloat(getTheStyle(paddle2,"top"));
		var paddle2Left = parseFloat(getTheStyle(paddle2,"left"));
		var paddle2Width = parseFloat(getTheStyle(paddle2,"width"));
		var paddle2Height = parseFloat(getTheStyle(paddle2,"height"));
		var paddleComHeight = parseFloat(getTheStyle(paddleCom,"height"));
		var paddleComWidth = parseFloat(getTheStyle(paddleCom,"width"));
		var paddleComTop = parseFloat(getTheStyle(paddleCom,"top"));
		var paddleComLeft = parseFloat(getTheStyle(paddleCom,"left"));
		var wallTopTop = parseFloat(getTheStyle(wallTop,"top"));
		var wallTopHeight = parseFloat(getTheStyle(wallTop,"height"));
		var wallBottomTop = parseFloat(getTheStyle(wallBottom,"top"));
		var pBoxLeft = parseFloat(getTheStyle(powerBox,"left"));
		var pBoxTop = parseFloat(getTheStyle(powerBox,"top"));
		var pBoxWidth = parseFloat(getTheStyle(powerBox,"width"));
		var pBoxHeight = parseFloat(getTheStyle(powerBox,"height"));
		var goal1Left = parseFloat(getTheStyle(goal1,"left"));
		var goal1Width = parseFloat(getTheStyle(goal1,"width"));
		var goal2Left = parseFloat(getTheStyle(goal2,"left"));
		var goal2Width = parseFloat(getTheStyle(goal2,"width"));
		var point=player1Point;
		document.getElementById("player1Score").innerHTML=point;
		var point2=player2Point
		document.getElementById("player2Score").innerHTML=point2;
		if((ballLeft+ballWidth>=paddle1Left)&&(ballTop+(ballHeight*0.5)<=paddle1Top+paddle1Height)&&(ballTop+(ballHeight*0.5)>=paddle1Top)&&(ballLeft<paddle1Left+paddle1Width)){
			horizontalMovement=0-horizontalMovement;
			var different=((ballTop-paddle1Top)*0.1-5)/1.25;
			verticalMovement=different;
		}
		if((ballLeft<=paddle2Left+paddle2Width)&&(ballTop+(ballHeight*0.5)<=paddle2Top+paddle2Height)&&(ballTop+(ballHeight*0.5)>=paddle2Top)&&(ballLeft>=paddle2Left)){
			horizontalMovement=Math.abs(horizontalMovement);
			var different2=((ballTop-paddle2Top)*0.1-5)/1.25;
			verticalMovement=different2;
		}
		if((ballLeft<=paddleComLeft+paddleComWidth)&&(ballTop+(ballHeight*0.5)<=paddleComTop+paddleComHeight)&&(ballTop+(ballHeight*0.5)>=paddleComTop)&&(ballLeft>paddleComLeft)){
			horizontalMovement=Math.abs(horizontalMovement);
			var different3=((ballTop-paddleComTop)*0.1-5)/1.25;
			verticalMovement=different3;
		}			
		if((ballTop<=wallTopTop+wallTopHeight)){
			verticalMovement=Math.abs(verticalMovement);
		}
		if(ballTop+ballHeight>=wallBottomTop){
			if(verticalMovement>0){
				verticalMovement=0-verticalMovement;
			}
		}
		if(toalSec<120&&toalSec>=60){
			horizontalMovement=horizontalMovement*1.001;
			verticalMovement=verticalMovement*1.001;
		}else if(toalSec<60){
			horizontalMovement=horizontalMovement*1.002;
			verticalMovement=verticalMovement*1.002;
		}
		ball.style.left=ballLeft+horizontalMovement+"px";
		ball.style.top=ballTop+verticalMovement+"px";
		if(ballLeft<=goal1Left+goal1Width){
			player1Point++;
			initializeGame();
		}else if(ballLeft+ballWidth>=goal2Left){
			player2Point++;
			initializeGame();
		}
	}
	//Get into the actual game mode.
	function pVcClassic(){
		paddle1.style.display="block";
		paddleCom.style.display="block";
		ball.style.display="block";
		wallTop.style.display="block";
		wallBottom.style.display="block";
		timer.style.display="block";
		document.getElementById("gameTitle").style.display="none";
		pBox.style.display="none";
		score1.style.display="block"
		score2.style.display="block";
		scoreKeeper.style.display="block";
		ballMovingInterval = setInterval(function (){moveBall();},20);
		paddleComMovingInterval=setInterval(function(){moveComputerPaddle();},15);
		timerInterval=setInterval(function(){countDown();},1000); //fix
	}
	//Get into the actual game mode.
	function pVpClassic(){
		paddle1.style.display="block";
		paddle2.style.display="block";
		ball.style.display="block";
		wallTop.style.display="block";
		wallBottom.style.display="block";
		timer.style.display="block";
		document.getElementById("gameTitle").style.display="none";
		pBox.style.display="none";
		score1.style.display="block"
		score2.style.display="block";
		scoreKeeper.style.display="block";
		ballMovingInterval = setInterval(function (){moveBall();},20);
		timerInterval=setInterval(function(){countDown();},1000);
	}
	//Get into the actual game mode.
	function pVcCrazy(){
		paddle1.style.display="block";
		paddleCom.style.display="block";
		ball.style.display="block";
		wallTop.style.display="block";
		wallBottom.style.display="block";
		timer.style.display="block";
		document.getElementById("gameTitle").style.display="none";
		pBox.style.display="none";
		score1.style.display="block"
		score2.style.display="block";
		scoreKeeper.style.display="block";
		ballMovingInterval = setInterval(function (){moveBall();},20);
		paddleComMovingInterval=setInterval(function(){moveComputerPaddle();},15);
		timerInterval=setInterval(function(){countDown();},1000);
	}
	//Get into the actual game mode.
	function pVpCrazy(){
		paddle1.style.display="block";
		paddle2.style.display="block";
		ball.style.display="block";
		wallTop.style.display="block";
		wallBottom.style.display="block";
		timer.style.display="block";
		document.getElementById("gameTitle").style.display="none";
		pBox.style.display="none";
		score1.style.display="block"
		score2.style.display="block";
		scoreKeeper.style.display="block";
		ballMovingInterval = setInterval(function (){moveBall();},20);
		timerInterval=setInterval(function(){countDown();},1000);
	}
	//Get into the actual game mode.
	function pVcPower(){
		pBoxInterval=setInterval(function(){specialEffects();},10);
		pBoxIntervalRandom=setInterval(function(){powerBlockAppearance();},1000);
		paddle1.style.display="block";
		paddleCom.style.display="block";
		ball.style.display="block";
		wallTop.style.display="block";
		wallBottom.style.display="block";
		timer.style.display="block";
		document.getElementById("gameTitle").style.display="none";
		pBox.style.display="block";
		score1.style.display="block"
		score2.style.display="block";
		scoreKeeper.style.display="block";
		ballMovingInterval = setInterval(function (){moveBall();},20);
		paddleComMovingInterval=setInterval(function(){moveComputerPaddle();},15);
		timerInterval=setInterval(function(){countDown();},1000);
	}
	//Get into the actual game mode.
	function pVpPower(){
		pBoxInterval=setInterval(function(){specialEffects();},10);
		pBoxIntervalRandom=setInterval(function(){powerBlockAppearance();},1000);
		paddle1.style.display="block";
		paddle2.style.display="block";
		ball.style.display="block";
		wallTop.style.display="block";
		wallBottom.style.display="block";
		document.getElementById("gameTitle").style.display="none";
		pBox.style.display="block";
		score1.style.display="block"
		score2.style.display="block";
		timer.style.display="block";
		scoreKeeper.style.display="block";
		ballMovingInterval = setInterval(function (){moveBall();},20);
		timerInterval=setInterval(function(){countDown();},1000);
	}
	//Add "pVc" to the button element's id. 
	function versusComputer(){
		pVcButtonElem.style.display="none";
		pVpButtonElem.style.display="none";
		classicButtonElem.style.display="block";
		crazyButtonElem.style.display="block";
		powerButtonElem.style.display="block";
		classicButtonElem.id="pVcClassic";
		crazyButtonElem.id="pVcCrazy";
		powerButtonElem.id="pVcPower";
	}
	//Add "pVp" to the button element's id. 
	function versusPlayer(){
		pVcButtonElem.style.display="none";
		pVpButtonElem.style.display="none";
		classicButtonElem.style.display="block";
		crazyButtonElem.style.display="block";
		powerButtonElem.style.display="block";
		classicButtonElem.id="pVpClassic";
		crazyButtonElem.id="pVpCrazy";
		powerButtonElem.id="pVpPower";
	}
	//To make paddles longer or shorter when the power up box it hit.
	function specialEffects(){
		var ballLeft = parseFloat(getTheStyle(ball,"left"));
		var ballTop = parseFloat(getTheStyle(ball,"top"));
		var ballHeight = parseFloat(getTheStyle(ball,"height"));
		var ballWidth = parseFloat(getTheStyle(ball,"width"));
		var pBoxLeft = parseFloat(getTheStyle(powerBox,"left"));
		var pBoxTop = parseFloat(getTheStyle(powerBox,"top"));
		var pBoxWidth = parseFloat(getTheStyle(powerBox,"width"));
		var pBoxHeight = parseFloat(getTheStyle(powerBox,"height"));
		var paddleComHeight = parseFloat(getTheStyle(paddleCom,"height"));
		var paddle1Height = parseFloat(getTheStyle(paddle1,"height"));
		var paddle2Height = parseFloat(getTheStyle(paddle2,"height"));
		if(!((ballLeft+ballWidth<pBoxLeft)||(ballTop+ballHeight<pBoxTop)||(ballLeft>pBoxLeft+pBoxWidth)||(ballTop>pBoxTop+pBoxHeight))){
			pBoxHitTimes++;
			pBox.style.display="none";
			pBox.style.top="0px";
			pBox.style.left="0px";
			if(pBoxHitTimes%2==1){
				if(horizontalMovement>0){
					paddle2.style.height=paddle2Height+15+"px";
					paddleCom.style.height=paddleComHeight+15+"px";
				}else if(horizontalMovement<0){
					paddle1.style.height=paddle1Height+15+"px";
				}
			}else if(pBoxHitTimes%2==0){
				if(horizontalMovement>0){
					paddle1.style.height=paddle1Height-15+"px";
				}else if(horizontalMovement<0){
					paddle2.style.height=paddle2Height-15+"px";
					paddleCom.style.height=paddleComHeight-15+"px";
				}
			}
		}
	}
	//To make the timer count down.
	function countDown(){
		sec--;
		toalSec--;
		if(sec<0){
			min--;
			sec=59;
		}
		document.getElementById("time").innerHTML=min+":"+sec;
		if(toalSec==0){
			result();
		}
	}
	//To show who wins after the timer gets to 0, and ask if they want to play again.
	function result(){
		if(player1Point>player2Point){
			alert("Congratulations, white paddle wins!");
		}else if(player1Point<player2Point){
			alert("Congratulations, green paddle wins!");
		}else if(player1Point==player2Point){
			alert("There is a tie.");
		}
		title.style.display="none"
		pVcButtonElem.style.display="none";
		pVpButtonElem.style.display="none";
		classicButtonElem.style.display="none";
		crazyButtonElem.style.display="none";
		powerButtonElem.style.display="none";
		paddle1.style.display="none";
		paddle2.style.display="none";
		ball.style.display="none";
		paddleCom.style.display="none";
		clearInterval(paddleMovingInterval);
		clearInterval(ballMovingInterval);
		horizontalMovement=4;
		verticalMovement=0;
		wallTop.style.display="none";
		wallBottom.style.display="none";
		clearInterval(paddleComMovingInterval);
		pBox.style.display="none";
		setInterval(pBoxInterval);
		pBoxHitTimes=0;
		pBoxHorizontal=0;
		pBoxVertical=0;
		goal1.style.display="none";
		goal2.style.display="none";
		player1Point=0;
		player2Point=0;
		timer.style.display="none";
		clearInterval(timerInterval);
		min=3;
		sec=0;
		toalSec=180;
		scoreKeeper.style.display="none";
		var playAgain=confirm("Play again?")
		if(playAgain){
			title.style.display="block"
			pVcButtonElem.style.display="block";
			pVpButtonElem.style.display="block";
			goal1.style.display="block";
			goal2.style.display="block";
			paddleMovingInterval = setInterval(function (){movePlayerPaddle();}, 10);
		}else{
			document.getElementById("end").style.display="block";
		}
		player1Point=0;
		player2Point=0;
	}
	//To give the power up box a random location every 30 seconds.
	function powerBlockAppearance(){
		if(toalSec==150){
			var pBoxHorizontal=Math.random()*450+400;
			var pBoxVertical=Math.random()*580+40;
			pBox.style.left=pBoxHorizontal;
			pBox.style.top=pBoxVertical;
			pBox.style.display="block";
		}else if(toalSec==120){
			var pBoxHorizontal=Math.random()*450+400;
			var pBoxVertical=Math.random()*580+40;
			pBox.style.left=pBoxHorizontal;
			pBox.style.top=pBoxVertical;
			pBox.style.display="block";
		}else if(toalSec==90){
			var pBoxHorizontal=Math.random()*450+400;
			var pBoxVertical=Math.random()*580+40;
			pBox.style.left=pBoxHorizontal;
			pBox.style.top=pBoxVertical;
			pBox.style.display="block";
		}else if(toalSec==60){
			var pBoxHorizontal=Math.random()*450+400;
			var pBoxVertical=Math.random()*580+40;
			pBox.style.left=pBoxHorizontal;
			pBox.style.top=pBoxVertical;
			pBox.style.display="block";
		}else if(toalSec==30){
			var pBoxHorizontal=Math.random()*450+400;
			var pBoxVertical=Math.random()*580+40;
			pBox.style.left=pBoxHorizontal;
			pBox.style.top=pBoxVertical;
			pBox.style.display="block";
		}
	}
	//Global Variables--------------------------------------------
	var pVcButtonElem;
	var pVpButtonElem;
	var classicButtonElem;
	var crazyButtonElem;
	var powerButtonElem;
	var paddle1;
	var paddle2;
	var ball;
	var paddleCom;
	var movingArray=[];
	var paddleMovingInterval;
	var ballMovingInterval;
	var horizontalMovement=4;
	var verticalMovement=0;
	var wallTop;
	var wallBottom;
	var paddleComMovingInterval;
	var pBox;
	var pBoxInterval;
	var pBoxHitTimes=0;
	var pBoxHorizontal=0;
	var pBoxVertical=0;
	var goal1;
	var goal2;
	var player1Point=0;
	var player2Point=0;
	var timer;
	var timerInterval;
	var min=3;
	var sec=0;
	var toalSec=180;
	var title;
	var score1;
	var score2;
	var scoreKeeper;
	var pBoxIntervalRandom;
	//Main Program------------------------------------------------
	window.onload = function(){
		title=document.getElementById("gameTitle");
		pBoxHorizontal=Math.random()*450+400;
		pBoxVertical=Math.random()*580+40;
		pVcButtonElem = document.getElementById("pVc");
		pVpButtonElem = document.getElementById("pVp");
		classicButtonElem = document.getElementById("classic");
		crazyButtonElem = document.getElementById("crazy");
		powerButtonElem = document.getElementById("power");
		paddle1 = document.getElementById("player1");
		paddle2 = document.getElementById("player2");
		ball = document.getElementById("ball");
		paddleCom = document.getElementById("computer");
		paddleMovingInterval = setInterval(function (){movePlayerPaddle();}, 10);
		wallTop = document.getElementById("wall1");
		wallBottom = document.getElementById("wall2");
		pBox = document.getElementById("powerBox");
		pBox.style.left=pBoxHorizontal;
		pBox.style.top=pBoxVertical;
		goal1=document.getElementById("goal1");
		goal2=document.getElementById("goal2");
		timer=document.getElementById("time");
		score1=document.getElementById("player1Score");
		score2=document.getElementById("player2Score");
		scoreKeeper=document.getElementById("scoreKeeper");
	}