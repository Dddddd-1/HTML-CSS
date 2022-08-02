//地图容器
import Map from 'ol/Map';
//OSM地图资源
import OSM from 'ol/source/OSM';
//图层
import TileLayer from 'ol/layer/Tile';
//视角
import View from 'ol/View';
//交互
import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
} from 'ol/interaction';
//控件
import {OverviewMap, defaults as defaultControls} from 'ol/control';


const rotateWithView = document.getElementById('rotateWithView');

//新建概览图控件
const overviewMapControl = new OverviewMap({
    // see in overviewmap-custom.html to see the custom CSS used
    //设置类名
    className: 'ol-overviewmap ol-custom-overviewmap',
    //设置图层
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    //用于展开的概览图按钮的文本标签
    collapseLabel: '\u00BB',
    //用于折叠的概览图按钮的文本标签
    label: '\u00AB',
    //控件是否应该开始折叠（展开）
    collapsed: false,
});

rotateWithView.addEventListener('change', function () {
    //设置概览地图视图是否应与主地图视图一起旋转。
    overviewMapControl.setRotateWithView(this.checked);
});

const map = new Map({
    //默认控件添加概览图
    controls: defaultControls().extend([overviewMapControl]),
    //默认交互，添加已有交互：拖拽旋转。
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    target: 'map',
    view: new View({
        center: [500000, 6000000],
        zoom: 7,
    }),
});