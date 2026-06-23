var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var lyr_IDW1_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IDW 1<br />\
    <img src="styles/legend/IDW1_1_0.png" /> 4<br />\
    <img src="styles/legend/IDW1_1_1.png" /> 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IDW1_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531192.769389, -899044.528997, 12545017.431959, -883447.313633]
        })
    });
var lyr_SLOPE1_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE 1<br />\
    <img src="styles/legend/SLOPE1_2_0.png" /> 1<br />\
    <img src="styles/legend/SLOPE1_2_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE1_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531220.852027, -899061.060427, 12545036.623206, -883418.625340]
        })
    });
var lyr_ReprojectedSLOPEEE_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reprojected SLOPEEE<br />\
    <img src="styles/legend/ReprojectedSLOPEEE_3_0.png" /> 1<br />\
    <img src="styles/legend/ReprojectedSLOPEEE_3_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ReprojectedSLOPEEE_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531220.852027, -899054.470651, 12545034.265986, -883418.634881]
        })
    });
var lyr_ReprojectedIDW_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reprojected IDW<br />\
    <img src="styles/legend/ReprojectedIDW_4_0.png" /> 4<br />\
    <img src="styles/legend/ReprojectedIDW_4_1.png" /> 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ReprojectedIDW_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531192.769389, -899052.703519, 12545006.060713, -883447.360325]
        })
    });
var lyr_ReprojectedNDWIIII_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reprojected NDWIIII<br />\
    <img src="styles/legend/ReprojectedNDWIIII_5_0.png" /> -0.169948<br />\
    <img src="styles/legend/ReprojectedNDWIIII_5_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ReprojectedNDWIIII_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531161.079188, -899084.154099, 12545095.897343, -883386.853545]
        })
    });
var lyr_AKL_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'AKL<br />\
    <img src="styles/legend/AKL_6_0.png" /> 3,1<br />\
    <img src="styles/legend/AKL_6_1.png" /> 3,4<br />\
    <img src="styles/legend/AKL_6_2.png" /> 3,7<br />\
    <img src="styles/legend/AKL_6_3.png" /> 4<br />\
    <img src="styles/legend/AKL_6_4.png" /> 4,3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AKL_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531161.079188, -899084.154099, 12545095.897343, -883386.853545]
        })
    });
var lyr_ReprojectedNDWII_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reprojected NDWII<br />\
    <img src="styles/legend/ReprojectedNDWII_7_0.png" /> 4<br />\
    <img src="styles/legend/ReprojectedNDWII_7_1.png" /> 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ReprojectedNDWII_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531192.769389, -899052.703519, 12545006.060713, -883447.360325]
        })
    });
var lyr_ReprojectedIDWW_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reprojected IDWW<br />\
    <img src="styles/legend/ReprojectedIDWW_8_0.png" /> 4<br />\
    <img src="styles/legend/ReprojectedIDWW_8_1.png" /> 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ReprojectedIDWW_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531192.769389, -899052.703519, 12545006.060713, -883447.360325]
        })
    });
var lyr_ReprojectedSLOPEE_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reprojected SLOPEE<br />\
    <img src="styles/legend/ReprojectedSLOPEE_9_0.png" /> 1<br />\
    <img src="styles/legend/ReprojectedSLOPEE_9_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ReprojectedSLOPEE_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531220.852058, -899054.470698, 12545034.266017, -883418.634928]
        })
    });

lyr_Positron_0.setVisible(true);lyr_IDW1_1.setVisible(true);lyr_SLOPE1_2.setVisible(true);lyr_ReprojectedSLOPEEE_3.setVisible(true);lyr_ReprojectedIDW_4.setVisible(true);lyr_ReprojectedNDWIIII_5.setVisible(true);lyr_AKL_6.setVisible(true);lyr_ReprojectedNDWII_7.setVisible(true);lyr_ReprojectedIDWW_8.setVisible(true);lyr_ReprojectedSLOPEE_9.setVisible(true);
var layersList = [lyr_Positron_0,lyr_IDW1_1,lyr_SLOPE1_2,lyr_ReprojectedSLOPEEE_3,lyr_ReprojectedIDW_4,lyr_ReprojectedNDWIIII_5,lyr_AKL_6,lyr_ReprojectedNDWII_7,lyr_ReprojectedIDWW_8,lyr_ReprojectedSLOPEE_9];
