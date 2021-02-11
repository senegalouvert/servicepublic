# Direction de la Police des étrangers et des Titres de voyage

Direction générale de la Police nationale (DGPN)  
Ministère de l'Intérieur (MINT)  

-------------------------------------------------------------------------------------

**Adresse**
-----------

Dieuppeul  
Allées Sérigne Ababacar Sy - Dakar

**Téléphone**
-------------

33 869 30 01 / 33 864 51 26

Directeur : Mame Seydou NDOUR

var latlng = new google.maps.LatLng(14.55,-14.4); //objet contenant des propri�t�s avec des identificateurs pr�d�finis dans Google Maps permettant //de d�finir des options d'affichage de notre carte var options = { center: latlng, zoom: 7, mapTypeId: google.maps.MapTypeId.ROADMAP }; //var i = 0; //constructeur de la carte qui prend en param�tre le conteneur HTML //dans lequel la carte doit s'afficher et les options var carte = new google.maps.Map(document.getElementById("map"), options); var point1= new google.maps.LatLng(14.7154, -17.4515); var address1= ""; var infowindow\_message1 = new google.maps.InfoWindow({ content: address1 }); var marqueur1 = new google.maps.Marker({ position: point1, map: carte }); google.maps.event.addListener(marqueur1, 'click', function() { infowindow\_message1.open(carte,marqueur1); $('input\[id=latitude\]').val('14.7154'); $('input\[id=longitude\]').val('-17.4515'); $('textarea\[id=descriptif\]').val(''); }); //map.addOverlay(marqueur);