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

}


// setting up firbase:
var config = {
    apiKey: "AIzaSyAYiYEUpEkWKUHSuajjdCCUmgd7Tp-Mw2s",
    authDomain: "rps-multiplayer-5fd10.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-5fd10.firebaseio.com",
    storageBucket: "rps-multiplayer-5fd10.appspot.com",
};

firebase.initializeApp(config);

var dbRef = firebase.database().ref();
var users = 0;
var wins = 0;
var losses = 0;
var ties = 0;

var Player1 = {
	Name: "",
	Pick: "",
	Registered: false,
	CurrentPlayer: false,
	Wins: wins,
	Losses: losses,
	Ties: ties
};

var Player2 = {
	Name: "",
	Pick: "",
	Registered: false,
	CurrentPlayer: false,
	Wins: wins,
	Losses: losses,
	Ties: ties
};

//var playerRef = new Firebase('https://rps-multiplayer-5fd10.firebaseio.com');

$('#playerSubmit').on('click', function () {
	var name = $('.username').val();
	
    if(users == 0){
		Player1.Registered = true;
		Player1.CurrentPlayer = true;
		Player1.Name = name;
		dbRef.push(Player1);		
		users++;
		clearForm();
	}else if(users == 1){
		Player2.Registered = true;
		Player2.CurrentPlayer = true;
		Player2.Name = name;
		dbRef.push(Player2);
		users++;
		clearForm();
	}else if(users >=2){
		console.log("There are already 2 players registered!");
	}
	return false;
});

dbRef.ref().on('child_added', function (snapshot) {
	console.log(snapshot.val());
	
		//$('#p1').html(snapshot.val().Player1.Name);
	
		//$('#p2').html(snapshot.val().Player2.Name);
	
}, function (error) {
	console.error(error);
});
