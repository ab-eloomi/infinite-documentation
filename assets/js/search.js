

/*-----------------------------
    Search - Interface
------------------------------- */

$('.search').on('click', function(e) {
    // Toggle the search view when clicking the search icon
    $('.SNSearch').toggleClass("active"); 
    e.preventDefault();
});

$(document).keyup(function(e) {
    // Hide the search view with escape key
    if (e.which == 27) $('.SNSearch').removeClass("active");
});