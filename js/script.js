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

function writeUserData(database, name, email) {
	
	// Cria uma referencia para o nó 'users'
	var users = database.ref('users');
	userId = users.numChildren() + 1;
  	users.ref('teste/' + userId).set({
	    username: name,
	    email: email
	});
}

function _initFirebase(database){

	// Cria uma referencia para o nó 'users'
	var users = database.ref('users');

	// Retorna os 3 primeiros usuarios
	//var users = database.ref('users').limitToFirst(3);

	// Retorna os 3 ultimos usuarios
	// var users = database.ref('users').limitToLast(3);

	// Retorna todos os itens com chave/valor que começa com 'got'
	// Testes não concluidos
	// var users = database.ref('users').startAt('got');

	// Retorna todos os itens com chave/valor que terminam com 'ria'
	// Testes não concluidos
	// var users = database.ref('users').endAt('ria');

	// Retorna todos os itens com chave/valor iguais a 'teste 1'
	// Testes não concluidos
	// var users = database.ref('users').equalTo('teste 1');

	// Retorna dados ordenados por ''
	// Testes não concluidos
	// var users = database.ref('users').orderByChild();

	// Retorna dados ordenado pela chave
	// Testes não concluidos
	// var users = database.ref('users').orderByKey();

	// Retorna dados ordenados pelo valor 
	// Testes não concluidos
	// var users = database.ref('users').orderByValue();


	// Atualiza lista quando um usuario é adicionado
	users.on('child_added', function(data){    
		$("#data").append(addP(data.key, data.val().name, data.val().email || ""));;
	});	

	// Atualiza lista quando um usuario é deletado
	users.on('child_removed', function(data) {
		$("#"+data.key).remove();
	});

	// Atualiza a lista quando um usuario é modificado
	users.on('child_changed', function(data){
		$("#"+data.key).remove();
		$("#data").append(addP(data.key, data.val().name, data.val().email || ""));;
	});			
}

function addP(key, name, email){
	return "<p id=\""+key+"\">"+name+"<br>"+email+"</p>";
}

function removeUsers(){
	firebase.database().ref('users/'+userId);
	adaRef.remove()
	  .then(function() {
	    console.log("Remove succeeded.")
	  })
	  .catch(function(error) {
	    console.log("Remove failed: " + error.message)
	  });
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
