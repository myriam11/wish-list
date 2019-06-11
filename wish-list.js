

$(document).ready(function(){

    var $wish1 = $('#wish1'),
        $wish2 = $('#wish2'),
        $wish3 = $('#wish3'),

        $envoi = $('#envoi'),
        $reset = $('#rafraichir'),
        $list = $('#list'),


});

function verifier(champ){
    if(champ.val() == ""){ // si le champ est vide
    	$erreur.css('display', 'block'); // on affiche le message d'erreur
        champ.css({ // on rend le champ rouge
    	    borderColor : 'red',
    	    color : 'red'
    	});
    }
}

$envoi.click(function(e){
    e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

    // puis on lance la fonction de vérification sur tous les champs :
    verifier($wish);


});





$reset.click(function(){
    $champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
        borderColor : '#ccc',
    	color : '#555'
    });
    $erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur
});
