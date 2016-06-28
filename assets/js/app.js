function AnimateP1(d1, d2){
    var elem = $(".player1");
    
	$({deg: 0}).animate({deg: d1}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d2}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d1}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d2}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d1}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d2}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	});
}

function AnimateP2(d1, d2){
    var elem = $(".player2");
    
	$({deg: 0}).animate({deg: d1}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d2}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d1}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d2}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d1}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	}).animate({deg: d2}, {
	    duration: 250,
	    step: function(now){
	        elem.css({
	            transform: "rotate(" + now + "deg)"
	        });
	    }
	});
}


$(document).ready(function(){
	$('#rock').css('opacity',0).animate({
        'opacity': 1
    }, 1000);
    //$('#rock').hide();
	$('#paper').css('opacity',0).animate({
        'opacity': 1
    }, 2000);
    //$('#paper').hide();
	$('#scissors').css('opacity',0).animate({
        'opacity': 1
    }, 3000);
    //$('#scissors').hide();
	AnimateP1(90,0);
	AnimateP2(-90,0);
});

function clearForm() {
	$('.username').val('');
}

function fight(){
	$('body').css("background-image", "url(assets/images/background2.jpg)");
	$('.rps').css("color", "#8c8c8c");
	$('#p1data').text("Choose your weapon!");
	$('#p2data').text("Choose your weapon!");

	if(Player1.CurrentPlayer == true){
		$('#p2data').append("<br>Waiting for player 1 to choose weapon");
		$('.weapon').on('click', function () {
			if($(this).attr('id')  == 'rock'){
				Player1.Pick = "Rock"
				$('.player1').css("background-image", "url(assets/images/rock.png)");
			}else if($(this).attr('id')  == 'paper'){
				Player1.Pick = "Paper"
				$('.player1').css("background-image", "url(assets/images/paper.png)");
			}else if($(this).attr('id')  == 'scissors'){
				Player1.Pick = "Scissors"
				$('.player1').css("background-image", "url(assets/images/scissors.png)");
			}
		});
		Player1.CurrentPlayer == false;
		dbRef.update({ Player1: {CurrentPlayer: false}});
		Player2.CurrentPlayer == true;
		dbRef.update({ Player2: {CurrentPlayer: true}});
	}else if (Player2.CurrentPlayer == true){
		$('#p1data').append("<br>Waiting for player 2 to choose weapon");
		$('.weapon').on('click', function () {
			if($(this).attr('id')  == 'rock'){
				Player2.Pick = "Rock"
				$('.player2').css("background-image", "url(assets/images/rock.png)");
			}else if($(this).attr('id')  == 'paper'){
				Player2.Pick = "Paper"
				$('.player2').css("background-image", "url(assets/images/paper.png)");
			}else if($(this).attr('id')  == 'scissors'){
				Player2.Pick = "Scissors"
				$('.player2').css("background-image", "url(assets/images/scissors.png)");
			}
		});
		Player1.CurrentPlayer == true;
		dbRef.update({ Player1: {CurrentPlayer: true}});
		Player2.CurrentPlayer == false;
		dbRef.update({ Player2: {CurrentPlayer: false}});
	}

	
}


// setting up firebase:
var config = {
    apiKey: "AIzaSyAYiYEUpEkWKUHSuajjdCCUmgd7Tp-Mw2s",
    authDomain: "rps-multiplayer-5fd10.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-5fd10.firebaseio.com",
    storageBucket: "rps-multiplayer-5fd10.appspot.com",
};

firebase.initializeApp(config);

var dbRef = firebase.database().ref();
var users = 0;

dbRef.child("Users").set(users);

var p1pick = "";
var p1wins = 0;
var p1losses = 0;
var p1ties = 0;
var p2pick = "";
var p2wins = 0;
var p2losses = 0;
var p2ties = 0;

var Player1 = {
		Name: "",
		Pick: p1pick,
		Registered: false,
		CurrentPlayer: false,
		Wins: p1wins,
		Losses: p1losses,
		Ties: p1ties
};

var Player2 = {
		Name: "",
		Pick: p2pick,
		Registered: false,
		CurrentPlayer: false,
		Wins: p2wins,
		Losses: p2losses,
		Ties: p2ties
};


$('#playerSubmit').on('click', function () {
	var name = $('.username').val();

    if(users == 0){
		Player1.Registered = true;
		Player1.CurrentPlayer = true;
		Player1.Name = name;		
		dbRef.child("Player1").set(Player1);		
		clearForm();
		users++;
		dbRef.update({ Users: 1});
		Player1.CurrentPlayer = false;
		dbRef.update({ Player1: {CurrentPlayer: false}});
	}else if(users == 1){
		Player2.Registered = true;
		Player2.CurrentPlayer = true;
		Player2.Name = name;		
		dbRef.child("Player2").set(Player2);
		clearForm();
		users++;
		dbRef.update({ Users: 2});
		Player2.CurrentPlayer = false;
		dbRef.update({ Player2: {CurrentPlayer: false}});
		Player1.CurrentPlayer = true;
		dbRef.update({ Player1: {CurrentPlayer: true}});
				
	}
	return false;
});

dbRef.on('value', function (snapshot) {
	console.log(snapshot.val());

	var currusers = snapshot.val().Users;
	console.log(currusers);
	if(currusers == 0){
		console.log("No Users Online");
		currusers++;
	}else if(currusers == 1){		
		$('#p1').html(snapshot.val().Player1.Name);
		$('#p1wins').html(snapshot.val().Player1.Wins);
		$('#p1losses').html(snapshot.val().Player1.Losses);
		$('#p1ties').html(snapshot.val().Player1.Ties);
		currusers++;
	}else if(currusers == 2){
		$('#p2').html(snapshot.val().Player2.Name);
		$('#p2wins').html(snapshot.val().Player2.Wins);
		$('#p2losses').html(snapshot.val().Player2.Losses);
		$('#p2ties').html(snapshot.val().Player2.Ties);
		fight();
	}	
}, function (error) {
	console.error(error);
});
