/*
 Author: Ukieweb
 Template: ukieCard
 Version: 1.0
 URL: http://themeforest.net/user/UkieWeb
 */


$(document).ready(function(){

    "use strict";

    /*
     ----------------------------------------------------------------------
     Map
     ----------------------------------------------------------------------
     */
    var map;
    function initialize_map() {

        if ($('.map').length) {
            var myLatLng = new google.maps.LatLng(39.987686, -82.970916);
            var mapOptions = {
                zoom: 7,
                center: myLatLng,
                scrollwheel: false,
                panControl: false,
                zoomControl: true,
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false
            };
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'UkieWeb',
                icon: './assets/img/marker-' + $('#stylesheet-new').attr('data-color') + '.png'
            });
        } else {
            return false;
        }

    }
    google.maps.event.addDomListener(window, 'load', initialize_map);


    /*
     ----------------------------------------------------------------------
     Forms
     ----------------------------------------------------------------------
     */

    /* Email validation */
    function valid_email_address(email) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(email);
    }

    /*
     ----------------------------------------------------------------------
     Contact form validation
     ----------------------------------------------------------------------
     */

    $("#contact-form").submit( function() {


        if ( !valid_email_address( $("#email").val() ) || $("#name").val().length <= 2  )  {

            if ( !valid_email_address( $("#email").val() ) ) {
                $("#email").addClass("error");
            }
            if ( $("#name").val().length <= 2 ){
                $("#name").addClass("error");
            }

        } 

}); // End $(document).ready(function(){