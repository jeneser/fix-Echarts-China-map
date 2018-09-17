/* eslint-disable */
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// Fix for 钓鱼岛
// var Region = require('../Region');
/* eslint-disable */
// var zrUtil = require('zrender/src/core/util');
// var geoCoord = [126, 25];
// var points = [[[123.45165252685547, 25.73527164402261], [123.49731445312499, 25.73527164402261], [123.49731445312499, 25.750734064600884], [123.45165252685547, 25.750734064600884], [123.45165252685547, 25.73527164402261]]];

// fix 钓鱼岛及台湾附近岛屿
// by wangyazhe(wangyazhe@baidu.com)
// GeoJson坐标点绘制工具
// http://geojson.io

var points = [
    // 钓鱼岛及其附近岛屿
    [
        [123.387451171875, 25.681137335685307],
        [123.585205078125, 25.681137335685307],
        [123.585205078125, 25.809781975840405],
        [123.387451171875, 25.809781975840405],
        [123.387451171875, 25.681137335685307]
    ],
    // 赤尾屿及其附近岛屿
    [
        [123.99169921875, 25.90864446329127],
        [124.222412109375, 25.90864446329127],
        [124.222412109375, 26.066652138577403],
        [123.99169921875, 26.066652138577403],
        [123.99169921875, 25.90864446329127]
    ],
    // 台湾海峡诸岛屿
    [
        [119.454345703125, 23.52370005882413],
        [119.66308593749999, 23.52370005882413],
        [119.66308593749999, 23.69483472220595],
        [119.454345703125, 23.69483472220595],
        [119.454345703125, 23.52370005882413]
    ],
    //   台湾右侧诸岛屿
    [
        [121.46484375, 21.963424936844223],
        [121.66259765625001, 21.963424936844223],
        [121.66259765625001, 22.13653163760967],
        [121.46484375, 22.13653163760967],
        [121.46484375, 21.963424936844223]
    ]
];

function _default(geo) {
    if (geo.map === 'china') {
        for (var i = 0, len = geo.regions.length; i < len; ++i) {
            if (geo.regions[i].name === '台湾') {
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
