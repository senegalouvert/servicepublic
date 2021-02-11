# Direction des Sports, de la Jeunesse et de Vie Associative

Mairie de Dakar (MD)  

-----------------------

**Adresse**
-----------

Building communal  
Rue 22 X 11

**Téléphone**
-------------

33 849 08 08 / 76 529 85 04

var latlng = new google.maps.LatLng(14.55,-14.4); //objet contenant des propri�t�s avec des identificateurs pr�d�finis dans Google Maps permettant //de d�finir des options d'affichage de notre carte var options = { center: latlng, zoom: 7, mapTypeId: google.maps.MapTypeId.ROADMAP }; //var i = 0; //constructeur de la carte qui prend en param�tre le conteneur HTML //dans lequel la carte doit s'afficher et les options var carte = new google.maps.Map(document.getElementById("map"), options); var point1= new google.maps.LatLng(14.3691, -14.4); var address1= ""; var infowindow\_message1 = new google.maps.InfoWindow({ content: address1 }); var marqueur1 = new google.maps.Marker({ position: point1, map: carte }); google.maps.event.addListener(marqueur1, 'click', function() { infowindow\_message1.open(carte,marqueur1); $('input\[id=latitude\]').val('14.3691'); $('input\[id=longitude\]').val('-14.4'); $('textarea\[id=descriptif\]').val(''); }); //map.addOverlay(marqueur);