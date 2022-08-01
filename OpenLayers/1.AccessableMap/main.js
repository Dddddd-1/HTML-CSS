import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import * as ol from "ol";

new ol.Map({

})
//创建地图
const map = new Map({
    //设置地图图层
    layers: [
        // 创建一个使用Open Street Map地图源的瓦片图层
        new TileLayer({
            source: new OSM(),
        }),
    ],
    // 让id为map的div作为地图的容器
    target: 'map',
    // 设置显示地图的视图
    view: new View({
        //视图初始中心
        center: [0, 0],
        zoom: 2,
    }),
});

document.getElementById('zoom-out').onclick = function () {
    const view = map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
    const view = map.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom + 1);
};