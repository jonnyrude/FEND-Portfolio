document.addEventListener("DOMContentLoaded", function() {

    $("#menuB").on('click', function(e) {
        console.log("event triggered\n", this);
        $("#menu-small").toggleClass('open');
        e.stopPropagation();
        });
});