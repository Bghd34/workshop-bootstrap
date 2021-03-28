

function validateForm() {

    var bok = true; // si c'eatir toujours 'true' on valide le formulaire sinon nons

    if (document.getElementById('recherche').value == '') {

        $(document).ready(function(){
            $("#myModal").modal();
        });
        bok = false;
    }

    return bok;
}



