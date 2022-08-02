import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {Control, defaults as defaultControls} from 'ol/control';

//
// Define rotate to north control.
//
//该extends 关键字用于创建另一个类（父类）的子类。子类继承了另一个类的所有方法。继承对于代码可重用性很有用：在创建新类时重用现有类的属性和方法。
class RotateNorthControl extends Control {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
        //如果没有参数，则options初始化成一个空对象。
        const options = opt_options || {};
        //创建一个元素结点添加到文档中。
        const button = document.createElement('button');
        //获取某元素的HTML内容
        button.innerHTML = 'N';
        //设置或返回元素的类属性。
        const element = document.createElement('div');
        element.className = 'rotate-north ol-unselectable ol-control';
        //附加一个节点（元素）作为元素的最后一个子元素。
        element.appendChild(button);
        //该super()方法引用父类。通过调用super()构造方法中的方法，我们调用了父类的构造方法，并获得了对父类的属性和方法的访问。
        super({
            element: element,
            target: options.target,
        });
        //将事件处理程序附加到元素。（事件类型，运行函数，事件传播类型）
        //有两种事件传播的方法：冒泡和捕获。
        //在冒泡中，最内侧元素的事件会首先被处理，然后是更外侧的
        //在捕获中，最外侧元素的事件会首先被处理，然后是更内侧的
        button.addEventListener('click', this.handleRotateNorth.bind(this), false);
        console.log(this)
    }

    handleRotateNorth() {
        this.getMap().getView().setRotation(0);
    }
}

//
// Create map, giving it a rotate to north control.
//

const map = new Map({
    controls: defaultControls().extend([new RotateNorthControl()]),
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    target: 'map',
    view: new View({
        center: [0, 0],
        zoom: 3,
        rotation: 1,
    }),
});