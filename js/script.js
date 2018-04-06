 // Set the configuration for your app
// TODO: Replace with your project's config object
function getConfig(){
	config = {
	    apiKey: "AIzaSyC1BgxIvL6VqYQ06Bi_GPvyARs9q9YCGQA",
	    authDomain: "teste-a4869.firebaseapp.com",
	    databaseURL: "https://teste-a4869.firebaseio.com",
	    projectId: "teste-a4869",
	    storageBucket: "teste-a4869.appspot.com",
	    messagingSenderId: "107417150791"
	};
	return config;
};

function writeUserData(database, userId, name, email) {
  	database.ref('teste/' + userId).set({
	    username: name,
	    email: email
	});
}

function firebaseteste(firebase, id, msg) {
	// body...
	var commentsRef = firebase.ref('teste/' + id);
	commentsRef.on('child_added', function(data) {
	  addCommentElement(msg);
	});
	/*
	commentsRef.on('child_changed', function(data) {
	  setCommentValues(postElement, data.key, data.val().text, data.val().author);
	});

	commentsRef.on('child_removed', function(data) {
	  deleteComment(postElement, data.key);
	});*/
}

