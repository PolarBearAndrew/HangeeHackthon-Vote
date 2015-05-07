require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});
require(
  [
    'echarts',
    'echarts/chart/line',
    'echarts/chart/bar'
  ],
  function(ec) {
    var myChart = ec.init(document.getElementById('main'));
    var option = {
      title: {
        x: 'center',
        text: '投票統計結果',
        subtext: '統計結果',
      },
      tooltip: {
        trigger: 'item'
      },
      toolbox: {
        show: true,
        feature: {
          magicType:{
            show: true,
            type: ['bar', 'line']
          },
          saveAsImage: {
            show: true,
            title: '儲存圖片',
            type: 'png',
            lang: ['點擊儲存']
          }
        }
      },
      grid: {
        borderWidth: 0,
        y: 80,
        y2: 60
      },
      xAxis: [{
        type: 'category',
        show: false,
        data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
      }],
      yAxis: [{
        type: 'value',
        show: true
      }],
      series: [{
        name: '票數',
        type: 'bar',
        itemStyle: {
          normal: {
            color: function(params) {
              // build a color map as your need.
              var colorList = [
                '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
              ];
              return colorList[params.dataIndex]
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{b}\n{c}'
            }
          }
        },
        data: [12, 21, 10, 4, 12, 5, 6, 5, 25, 23, 7],
        markPoint: {
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0)',
            formatter: function(params) {
              return '<img src="' + params.data.symbol.replace('image://', '') + '" style="width: 200px;"/>';
            }
          },
          data: [{
            xAxis: 0,
            y: 370,
            name: 'Line',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 1,
            y: 370,
            name: 'Bar',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 2,
            y: 370,
            name: 'Scatter',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 3,
            y: 370,
            name: 'K',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 4,
            y: 370,
            name: 'Pie',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 5,
            y: 370,
            name: 'Radar',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 6,
            y: 370,
            name: 'Chord',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 7,
            y: 370,
            name: 'Force',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 8,
            y: 370,
            name: 'Map',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 9,
            y: 370,
            name: 'Gauge',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, {
            xAxis: 10,
            y: 370,
            name: 'Funnel',
            symbolSize: 20,
            symbol: 'image://http://www.korkedbats.com/wp-content/uploads/2014/03/James-Harden.jpg'
          }, ]
        }
      }]
    };
    myChart.setOption(option);
    window.onresize = myChart.resize;
  });
