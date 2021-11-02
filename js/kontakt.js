$(document).ready(function(e) {
    $('#contactForm').submit(function(e) {
        e.preventDefault();

        var fname = $("input[name=firstname]").val().trim();
        var lname = $("input[name=lastname]").val().trim();
        var email = $("input[name=email]").val().trim();
        var subject = $("input[name=subject]").val();

        if(fname == "" || lname == "" || email == "" || subject == "") {
            alert('Niste popunili sva polja.');
        }else {
            alert('Uspešno poslati podaci.');
        }
    });
});