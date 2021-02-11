# Service civique national

**Adresse**
-----------

26 - 28, rue Felix Faure - BP 22 682 - Dakar

**Téléphone**
-------------

823 18 06 / 823 18 07

**Télécopie**
-------------

823 18 09

**Adresse électronique**
------------------------

[civisme@laposte.sn](../../../services/civismelapostesn.md)

Directeur : Colonel Kisma Mamadou SOW

var latlng = new google.maps.LatLng(14.55,-14.4); //objet contenant des propri�t�s avec des identificateurs pr�d�finis dans Google Maps permettant //de d�finir des options d'affichage de notre carte var options = { center: latlng, zoom: 7, mapTypeId: google.maps.MapTypeId.ROADMAP }; //var i = 0; //constructeur de la carte qui prend en param�tre le conteneur HTML //dans lequel la carte doit s'afficher et les options var carte = new google.maps.Map(document.getElementById("map"), options); var point1= new google.maps.LatLng(14.8582, -15.8722); var address1= "Service civique Touba"; var infowindow\_message1 = new google.maps.InfoWindow({ content: address1 }); var marqueur1 = new google.maps.Marker({ position: point1, map: carte }); google.maps.event.addListener(marqueur1, 'click', function() { infowindow\_message1.open(carte,marqueur1); $('input\[id=latitude\]').val('14.8582'); $('input\[id=longitude\]').val('-15.8722'); $('textarea\[id=descriptif\]').val('Service civique Touba'); }); //map.addOverlay(marqueur); var point2= new google.maps.LatLng(13.7724, -13.6419); var address2= "Service civique Tamba"; var infowindow\_message2 = new google.maps.InfoWindow({ content: address2 }); var marqueur2 = new google.maps.Marker({ position: point2, map: carte }); google.maps.event.addListener(marqueur2, 'click', function() { infowindow\_message2.open(carte,marqueur2); $('input\[id=latitude\]').val('13.7724'); $('input\[id=longitude\]').val('-13.6419'); $('textarea\[id=descriptif\]').val('Service civique Tamba'); }); //map.addOverlay(marqueur);