import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {OverviewMap, ZoomSlider, FullScreen,ZoomToExtent, defaults as defaultControls} from 'ol/control';

//新建全屏显示控件
const fullScreen = new FullScreen()
//新建缩放滑块控件
const zoomSlider = new ZoomSlider()
//新建改变视图控件
const zoomToExtent = new ZoomToExtent({
    //设置缩放范围
    extent: [
        813079.7791264898, 5929220.284081122, 848966.9639063801,
        5936863.986909639,
    ]
})
//新建鹰眼控件
const overviewMap = new OverviewMap({
    layers:[
        new TileLayer({
            source: new OSM(),
        })
    ]
})

const map = new Map({
    //defaults 默认会添加三个控件：缩放、右下角的标签以及重置旋转（发生旋转时才显示）
    //extend：将元素添加到数组的末尾。给默认控件添加元素。
    /*controls: defaultControls().extend(
        [
            //添加一个控件按钮，按下后将视图改为特定范围
            new ZoomToExtent({
                //设置缩放范围
                extent: [
                    813079.7791264898, 5929220.284081122, 848966.9639063801,
                    5936863.986909639,
                ],
            }),
        ]),*/
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

//添加控件顺序越往前，在地图上显示越靠后
//添加全屏显示控件
map.addControl(fullScreen)
//添加缩放滑块控件
map.addControl(zoomSlider)
//添加改变视图按钮（与上一个控件的默认位置冲突）
map.addControl(zoomToExtent)
//添加鹰眼控件
map.addControl(overviewMap)