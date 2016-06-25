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

// setting up firbase:
var config = {
	apiKey: "AIzaSyB6HuNjqAv9CXCWCqLfdHRwLIl4xb8Hv4U",
    authDomain: "fir-app-6bf97.firebaseapp.com",
    databaseURL: "https://fir-app-6bf97.firebaseio.com",
    storageBucket: "fir-app-6bf97.appspot.com",
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref();

function clearForm() {
	$('.username').val('');
}

var users = 0;
var name = $('.username').val();

$('#playerSubmit').on('submit', function () {
	
	if(users == 0){
		console.log(users);
		$('#p1').html(this.name);
		dbRef.push(this.name);
		console.log('Player 1: ' + name);
		users++;
		clearForm();
	}else if(users == 1){
		console.log(users);
		$('#p2').html(this.name);
		dbRef.push(this.name);
		console.log('Player 2: ' + name);
		users++;
		clearForm();
	}else if(users >=2){
		console.log('There are already 2 players playing!');
		clearForm();
	}
	return false;
});

dbRef.on('child_added', function (snapshot) {
	console.log(snapshot.val());
}, function (error) {
	console.error(error);
});