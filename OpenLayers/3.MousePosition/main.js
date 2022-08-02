import Map from 'ol/Map';
import MousePosition from 'ol/control/MousePosition';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {createStringXY} from 'ol/coordinate';
import {defaults as defaultControls} from 'ol/control';

//设置默认显示鼠标位置（右上角）
const mousePosition = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:4326',
})
//自定义显示鼠标位置
const mousePositionControl = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:4326',
    // comment the following two lines to have the mouse position
    // be placed within the map.
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
});

const map = new Map({
    controls: defaultControls().extend([mousePositionControl]),
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    target: 'map',
    view: new View({
        center: [0, 0],
        zoom: 2,
    }),
});
//添加默认显示鼠标位置（右上角）
map.addControl(mousePosition)

const projectionSelect = document.getElementById('projection');
projectionSelect.addEventListener('change', function (event) {
    mousePositionControl.setProjection(event.target.value);
});

const precisionInput = document.getElementById('precision');
precisionInput.addEventListener('change', function (event) {
    const format = createStringXY(event.target.valueAsNumber);
    mousePositionControl.setCoordinateFormat(format);
});