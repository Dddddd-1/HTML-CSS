import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {FullScreen, defaults as defaultControls} from 'ol/control';

const view = new View({
    center: [-9101767, 2822912],
    zoom: 14,
});

const map = new Map({
    controls: defaultControls().extend([
        new FullScreen({
            //要全屏显示的元素。如果未提供，则包含地图视口的元素将全屏显示。
            source: 'fullscreen',
        }),
    ]),
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    target: 'map',
    view: view,
});