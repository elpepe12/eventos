firebase.initializeApp({
    apiKey: 'AIzaSyB8hBsHUDUUl16Y0EAuXoJjAPxZDpy0_go', // Se obtiene desde configuracion del proyecto
    authDomain: 'notifica-eventos.firebaseapp.com',
    projectId: 'notifica-eventos'
});

var db = firebase.firestore();

writeSomething = () => db.collection("users").add({
        first: document.getElementById("nombre").value,
        last: document.getElementById("ape").value,
        email: document.getElementById("correo").value,
        cate1: document.getElementById("catrock").value, 
        cate2: document.getElementById("catsalsa").value,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) { //Cuando no se ejecuta el then,hace un llamado
        console.error("Error adding document: ", error);
    });

readAll = () => db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first}`);
        });
    });