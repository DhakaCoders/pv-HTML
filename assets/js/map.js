$(function() {
   //create empty LatLngBounds object
var bounds = new google.maps.LatLngBounds();
var infowindow = new google.maps.InfoWindow();

    // Snazzy Map Style - https://snazzymaps.com/style/8097/wy
    var mapStyle = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#4b3829"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#382f2d"},{"visibility":"on"},{"saturation":"0"},{"lightness":"0"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#382f2d"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#4a4140"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#4a4140"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#4a4140"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#4a4140"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"off"},{"color":"#d3b9b9"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"visibility":"off"},{"color":"#7c5656"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"color":"#8a3d3d"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"},{"color":"#a63c3c"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#392718"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#4a3728"},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#4a3728"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"color":"#8e7974"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ff0000"},{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"on"},{"color":"#584f4e"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#ff0000"},{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"color":"#584f4e"},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"hue":"#ff0000"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#ff0000"},{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#cbdade"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#392718"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#7d93a8"}]}];
    var center = { lat: 19.476160, lng: -99.273460 };
    // Create the map
    var map = new google.maps.Map($('#storeMap')[0], {
        zoom: 14,
        styles: mapStyle,
        center: center
    });
    var infocontent = 
    '<div class="overview-grid-box-btm-inr">'+
    '<span>2/4</span>'+
     '<div class="overview-grid-box-chart-tp-dsc">'+
       '<h5 class="overview-grid-box-chart-tp-title">Patra lorem ipsum</h5>'+
       '<h2 class="overview-grid-box-chart-title-1">Kalogerostani <b>100kW</b></h2>'+
     '</div>'+
     '<div class="overview-grid-box-chart-inr">'+
        '<span><i><img src="assets/images/chart-time.svg"></i>5 min ago</span>'+
       '<div class="overview-grid-box-chart clearfix">'+
         '<div class="overview-grid-box-chart-lft">'+
           '<img src="assets/images/chart-icon-lft.png">'+
           '<h5 class="overview-grid-box-chart-lr-title">Power</h5>'+
           '<span>226 kW</span>'+
         '</div>'+
         '<div class="overview-grid-box-chart-rgt">'+
           '<img src="assets/images/chart-icon-rgt.png">'+
           '<h5 class="overview-grid-box-chart-lr-title">Irradiance</h5>'+
           '<span>226 W/m<sup>2</sup></span>'+
         '</div>'+
       '</div>'+
     '</div>'+
     '<div class="overview-grid-box-chart-btm-dsc clearfix">'+
       '<h5 class="chart-btm-dsc-title">10.550,54 kWh <b>today</b></h5>'+
       '<a href="#">'+
       '</a>'+
     '</div>'+
   '</div>';
    var placements = [
        { iwcontent: infocontent, uitype: 'custom-window box1', type: 'top', LatLng: { lat: 19.476130, lng: -99.233460 }, marker: 'assets/images/map-marker1.png' },
        { iwcontent: infocontent, uitype: 'custom-window box2', type: 'top', LatLng: { lat: 19.470910, lng: -99.269390 }, marker: 'assets/images/map-marker2.png' },
        { iwcontent: infocontent, uitype: 'custom-window box1', type: 'top', LatLng: { lat: 19.473280, lng: -99.273460 }, marker: 'assets/images/map-marker3.png' },
        { iwcontent: infocontent, uitype: 'custom-window box2', type: 'top', LatLng: { lat: 19.476160, lng: -99.254210 }, marker: 'assets/images/map-marker1.png' }
    ];
    $.each(placements, function(i, e) {
    //Marker
        var marker = new google.maps.Marker({
            map: map,
            icon: e.marker,
            animation: google.maps.Animation.DROP,
            position: e.LatLng
        });
    bounds.extend(marker.position);
    //Info
        // Set up a close delay for CSS animations
        var info = null;
        var closeDelayed = false;
        var closeDelayHandler = function() {
            $(info.getWrapper()).removeClass('active');
            setTimeout(function() {
                closeDelayed = true;
                info.close();
            }, 300);
        };
        // Add a Snazzy Info Window to the marker
        info = new SnazzyInfoWindow($.extend({}, {
            marker: marker,
            content: e.iwcontent,
            wrapperClass: e.uitype,
            placement: e.type,
            closeWhenOthersOpen: true,
            offset: {
                top: '-55px'
            },
            edgeOffset: {
                top: 50,
                right: 60,
                bottom: 50
            },
            border: false,
            closeButtonMarkup: '<button type="button" class="custom-close">&#215;</button>',
            callbacks: {
                open: function() {
                    $(this.getWrapper()).addClass('open');
                },
                afterOpen: function() {
                    var wrapper = $(this.getWrapper());
                    wrapper.addClass('active');
                    wrapper.find('.custom-close').on('click', closeDelayHandler);
                },
                beforeClose: function() {
                    if (!closeDelayed) {
                        closeDelayHandler();
                        return false;
                    }
                    return true;
                },
                afterClose: function() {
                    var wrapper = $(this.getWrapper());
                    wrapper.find('.custom-close').off();
                    wrapper.removeClass('open');
                    closeDelayed = false;

                }
            }
        }));
        // Open the Snazzy Info Window
        //info.open();
    });
    map.fitBounds(bounds);

});
