# countTo

## 设置

|   属性    |            描述            |   类型   | 默认值 |
| :-------: | :------------------------: | :------: | :----: |
| startVal  |           开始值           |  Number  |   0    |
|  endVal   |           结束值           |  Number  |  2017  |
| duration  |      持续时间（毫秒）      |  Number  |  3000  |
| autoplay  |       挂载时自动播放       | Boolean  |  true  |
| decimals  |       显示的小数位数       |  Number  |   0    |
|  decimal  |    进制（？没发现能改）    |  String  |   .    |
| separator | 分隔符(分隔每三位数的符号) |  String  |   ,    |
|  prefix   |            前缀            |  String  |   ''   |
|  suffix   |            后缀            |  String  |   ''   |
| useEasing |     使用缓和功能（？）     | Boolean  |  true  |
| easingFn  |       缓和回调（？）       | Function |   —    |

## 函数

|      函数       |      描述      |
| :-------------: | :------------: |
| mountedCallback | 挂载后返回回调 |
|      start      |    开始计数    |
|      pause      |    暂停技术    |
|      reset      |    重置计数    |
|   pauseResume   | 暂停/返回计数  |

