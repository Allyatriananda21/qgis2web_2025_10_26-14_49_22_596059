var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_titik_1 = new ol.format.GeoJSON();
var features_titik_1 = format_titik_1.readFeatures(json_titik_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_1.addFeatures(features_titik_1);
var lyr_titik_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_1, 
                style: style_titik_1,
                popuplayertitle: 'titik',
                interactive: true,
                title: '<img src="styles/legend/titik_1.png" /> titik'
            });
var format_gariskoridor_2 = new ol.format.GeoJSON();
var features_gariskoridor_2 = format_gariskoridor_2.readFeatures(json_gariskoridor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gariskoridor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gariskoridor_2.addFeatures(features_gariskoridor_2);
var lyr_gariskoridor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gariskoridor_2, 
                style: style_gariskoridor_2,
                popuplayertitle: 'garis koridor',
                interactive: true,
                title: '<img src="styles/legend/gariskoridor_2.png" /> garis koridor'
            });
var format_garis_3 = new ol.format.GeoJSON();
var features_garis_3 = format_garis_3.readFeatures(json_garis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_garis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_garis_3.addFeatures(features_garis_3);
var lyr_garis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_garis_3, 
                style: style_garis_3,
                popuplayertitle: 'garis',
                interactive: true,
                title: '<img src="styles/legend/garis_3.png" /> garis'
            });
var format_luasan_4 = new ol.format.GeoJSON();
var features_luasan_4 = format_luasan_4.readFeatures(json_luasan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_luasan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_luasan_4.addFeatures(features_luasan_4);
var lyr_luasan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_luasan_4, 
                style: style_luasan_4,
                popuplayertitle: 'luasan',
                interactive: true,
                title: '<img src="styles/legend/luasan_4.png" /> luasan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_titik_1.setVisible(true);lyr_gariskoridor_2.setVisible(true);lyr_garis_3.setVisible(true);lyr_luasan_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_titik_1,lyr_gariskoridor_2,lyr_garis_3,lyr_luasan_4];
lyr_titik_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'X': 'X', 'Y': 'Y', });
lyr_gariskoridor_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_garis_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_luasan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_titik_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_gariskoridor_2.set('fieldImages', {'id': 'TextEdit', 'Nama': '', 'Panjang': '', });
lyr_garis_3.set('fieldImages', {'id': 'TextEdit', 'Nama': '', 'Panjang': '', });
lyr_luasan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_titik_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_gariskoridor_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_garis_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_luasan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_luasan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});