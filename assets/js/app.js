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
	if(!p1pick){
		$('#p1data').text("Choose your weapon!");
		p1pick= true;
	}
	if(!p2pick){
		$('#p2data').text("Choose your weapon!");
		p1pick = true;
	}
	return false;

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
    	console.log(users);
		Player1.Registered = true;
		Player1.CurrentPlayer = true;
		Player1.Name = name;
		dbRef.child("Users").set(users);
		users++;
		dbRef.child("Player1").set(Player1);
		dbRef.Player1.Name.set(name);
		dbRef.Player1.Pick.set(p1pick);
		dbRef.Player1.Wins.set(p1wins);
		dbRef.Player1.Losses.set(p1losses);
		dbRef.Player1.Ties.set(p1ties);		
		clearForm();
	}else if(users == 1){
		console.log(users);
		Player2.Registered = true;
		Player2.CurrentPlayer = true;
		Player2.Name = name;
		users++;
		dbRef.child("Player2").set(Player2);
		dbRef.Player2.Name.set(name);
		dbRef.Player2.Pick.set(p2pick);
		dbRef.Player2.Wins.set(p2wins);
		dbRef.Player2.Losses.set(p2losses);
		dbRef.Player2.Ties.set(p2ties);
		clearForm();
		//fight();
		
	}else if(users >=2){
		console.log("There are already 2 players registered!");		
	}
	return false;
});

dbRef.on('value', function (snapshot) {
	console.log(snapshot.val());
	console.log(currusers);
	var currusers = snapshot.child("Users").val();
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
		
	}
	return false;	
}, function (error) {
	console.error(error);
});
