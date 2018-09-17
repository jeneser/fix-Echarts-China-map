/* eslint-disable */
// Fix for 东沙群岛及其附近岛屿
// by wangyazhe(wangyazhe@baidu.com)
// GeoJson坐标点绘制工具
// http://geojson.io

// var Region = require('../Region');
// var zrUtil = require('zrender/src/core/util');

// var geoCoord = [126, 25];

var points = [
    [
        [115.7080078125, 20.848545148787238],
        [115.93872070312499, 20.848545148787238],
        [115.93872070312499, 21.06399706324597],
        [115.7080078125, 21.06399706324597],
        [115.7080078125, 20.848545148787238]
    ],
    [
        [115.72998046875, 20.396123272467616],
        [115.960693359375, 20.396123272467616],
        [115.960693359375, 20.612219573881042],
        [115.72998046875, 20.612219573881042],
        [115.72998046875, 20.396123272467616]
    ],
    [
        [116.5704345703125, 20.555652403773365],
        [116.82861328125001, 20.555652403773365],
        [116.82861328125001, 20.771523019513364],
        [116.5704345703125, 20.771523019513364],
        [116.5704345703125, 20.555652403773365]
    ]
];

function _default(geo) {
    if (geo.map === 'china') {
        for (var i = 0, len = geo.regions.length; i < len; ++i) {
            if (geo.regions[i].name === '广东') {
                for (var j = 0, jLen = points.length; j < jLen; j++) {
                    geo.regions[i].geometries.push({
                        type: 'polygon',
                        exterior: points[j]
                    });
                }
            }
        }
    }
}

module.exports = _default;
