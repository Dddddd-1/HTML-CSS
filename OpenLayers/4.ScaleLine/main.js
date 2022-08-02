import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import proj4 from 'proj4';
import {ScaleLine} from 'ol/control';
import {fromLonLat, transformExtent} from 'ol/proj';
import {register} from 'ol/proj/proj4';

//定义投影（学习）
proj4.defs(
    'Indiana-East',
    'PROJCS["IN83-EF",GEOGCS["LL83",DATUM["NAD83",' +
    'SPHEROID["GRS1980",6378137.000,298.25722210]],PRIMEM["Greenwich",0],' +
    'UNIT["Degree",0.017453292519943295]],PROJECTION["Transverse_Mercator"],' +
    'PARAMETER["false_easting",328083.333],' +
    'PARAMETER["false_northing",820208.333],' +
    'PARAMETER["scale_factor",0.999966666667],' +
    'PARAMETER["central_meridian",-85.66666666666670],' +
    'PARAMETER["latitude_of_origin",37.50000000000000],' +
    'UNIT["Foot_US",0.30480060960122]]'
);
//使在 proj4 中定义的投影（带有proj4.defs()）在 OpenLayers 中可用
register(proj4);

const map = new Map({
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    target: 'map',
    view: new View({
        //投影，默认值为EPGS-3857
        projection: 'Indiana-East',
        //将经纬度坐标转换为不同的投影
        center: fromLonLat([-85.685, 39.891], 'Indiana-East'),
        zoom: 7,
        //将范围从源投影转换为目标投影
        extent: transformExtent(
            [-172.54, 23.81, -47.74, 86.46],
            'EPSG:4326',
            'Indiana-East'
        ),
        minZoom: 6,
    }),
});

map.addControl(
    new ScaleLine({
        //比例尺单位
        //units: 'us',//英里、英尺、英寸（美式）
        //units: 'degrees'//度数，度分秒
        //units: 'imperial'//英里、英尺、英寸(英式)
        //units:'nautical'//航海 海里
        units:'metric',//米制
        bar: true,
        steps: 4,
        text: true
    })
);
