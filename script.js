// 初始化所有图表
document.addEventListener('DOMContentLoaded', function() {
    // 初始化图表
    initGoldenRatioChart();
    initCompositionChart();
    initPaintingAnalysis();
    initElementDistribution();
    initDynastyComparison();
    
    // 初始化交互功能
    initNavIndicator();
    initChartTools(); // 保留其他图表的工具功能
    initScrollObserver();
});

// 黄金分割分析图表
function initGoldenRatioChart() {
    const chartDom = document.getElementById('goldenRatioChart');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                let result = params[0].name + '<br/>';
                params.forEach(item => {
                    result += item.marker + item.seriesName + ': ' + item.value + '%<br/>';
                });
                return result;
            }
        },
        legend: {
            data: ['接近黄金分割', '偏离黄金分割'],
            textStyle: {
                fontSize: 12
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['宋代', '元代', '明代', '清代'],
            axisLine: {
                lineStyle: {
                    color: '#8c2318'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '比例(%)',
            axisLine: {
                lineStyle: {
                    color: '#8c2318'
                }
            }
        },
        series: [
            {
                name: '接近黄金分割',
                type: 'bar',
                stack: 'total',
                emphasis: {
                    focus: 'series'
                },
                data: [78, 65, 72, 60],
                itemStyle: {
                    color: '#8c2318'
                },
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            {
                name: '偏离黄金分割',
                type: 'bar',
                stack: 'total',
                emphasis: {
                    focus: 'series'
                },
                data: [22, 35, 28, 40],
                itemStyle: {
                    color: '#d4b78c'
                },
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 构图特点图表
function initCompositionChart() {
    const chartDom = document.getElementById('compositionChart');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                fontSize: 12
            }
        },
        series: [
            {
                name: '构图类型',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 35, name: 'S形构图', itemStyle: { color: '#8c2318' } },
                    { value: 25, name: '三角形构图', itemStyle: { color: '#d4b78c' } },
                    { value: 20, name: '对角线构图', itemStyle: { color: '#7a6a53' } },
                    { value: 15, name: '散点式构图', itemStyle: { color: '#a67c52' } },
                    { value: 5, name: '其他', itemStyle: { color: '#bfbfbf' } }
                ]
            }
        ]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 经典画作分析图表
function initPaintingAnalysis() {
    const chartDom = document.getElementById('paintingAnalysis');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['黄金分割应用度', '构图复杂度'],
            textStyle: {
                fontSize: 12
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['《溪山行旅图》', '《富春山居图》', '《千里江山图》', '《清明上河图》', '《秋山问道图》'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: {
                    lineStyle: {
                        color: '#8c2318'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '黄金分割应用度',
                min: 0,
                max: 100,
                interval: 20,
                axisLine: {
                    lineStyle: {
                        color: '#8c2318'
                    }
                }
            },
            {
                type: 'value',
                name: '构图复杂度',
                min: 0,
                max: 10,
                interval: 2,
                axisLine: {
                    lineStyle: {
                        color: '#7a6a53'
                    }
                }
            }
        ],
        series: [
            {
                name: '黄金分割应用度',
                type: 'bar',
                data: [85, 78, 92, 65, 80],
                itemStyle: {
                    color: '#8c2318'
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            },
            {
                name: '构图复杂度',
                type: 'line',
                yAxisIndex: 1,
                data: [8.2, 7.5, 9.0, 8.8, 6.5],
                itemStyle: {
                    color: '#7a6a53'
                },
                lineStyle: {
                    width: 3
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}'
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 元素分布分析图表
function initElementDistribution() {
    const chartDom = document.getElementById('elementDistribution');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: ['宋代', '元代'],
            bottom: 10,
            textStyle: {
                fontSize: 12
            }
        },
        radar: {
            indicator: [
                { name: '山体', max: 100 },
                { name: '水体', max: 100 },
                { name: '树木', max: 100 },
                { name: '建筑', max: 100 },
                { name: '人物', max: 100 },
                { name: '云雾', max: 100 }
            ],
            shape: 'circle',
            splitNumber: 5,
            axisName: {
                color: '#333',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(140, 35, 24, 0.1)',
                        'rgba(140, 35, 24, 0.2)',
                        'rgba(140, 35, 24, 0.4)',
                        'rgba(140, 35, 24, 0.6)',
                        'rgba(140, 35, 24, 0.8)'
                    ].reverse()
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(212, 183, 140, 0.1)', 'rgba(212, 183, 140, 0.2)', 
                            'rgba(212, 183, 140, 0.4)', 'rgba(212, 183, 140, 0.6)', 
                            'rgba(212, 183, 140, 0.8)'].reverse()
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(140, 35, 24, 0.5)'
                }
            }
        },
        series: [
            {
                name: '元素分布',
                type: 'radar',
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                },
                data: [
                    {
                        value: [85, 70, 80, 45, 30, 65],
                        name: '宋代',
                        areaStyle: {
                            color: 'rgba(140, 35, 24, 0.3)'
                        },
                        lineStyle: {
                            color: '#8c2318',
                            width: 2
                        },
                        itemStyle: {
                            color: '#8c2318'
                        }
                    },
                    {
                        value: [75, 65, 75, 35, 25, 75],
                        name: '元代',
                        areaStyle: {
                            color: 'rgba(212, 183, 140, 0.3)'
                        },
                        lineStyle: {
                            color: '#d4b78c',
                            width: 2
                        },
                        itemStyle: {
                            color: '#d4b78c'
                        }
                    }
                ]
            }
        ]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 朝代对比图表
function initDynastyComparison() {
    const chartDom = document.getElementById('dynastyComparison');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['水平分割', '垂直分割', '对角线分割'],
            textStyle: {
                fontSize: 12
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#8c2318'
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['清代', '明代', '元代', '宋代'],
            axisLine: {
                lineStyle: {
                    color: '#8c2318'
                }
            }
        },
        series: [
            {
                name: '水平分割',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'insideRight',
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                data: [40, 35, 30, 25],
                itemStyle: {
                    color: '#8c2318'
                }
            },
            {
                name: '垂直分割',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'insideRight',
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                data: [30, 35, 40, 45],
                itemStyle: {
                    color: '#d4b78c'
                }
            },
            {
                name: '对角线分割',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    position: 'insideRight',
                    formatter: '{c}%'
                },
                emphasis: {
                    focus: 'series'
                },
                data: [30, 30, 30, 30],
                itemStyle: {
                    color: '#7a6a53'
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 导航指示器交互
function initNavIndicator() {
    const indicators = document.querySelectorAll('.indicator-item');
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            // 移除所有active状态
            indicators.forEach(item => item.classList.remove('active'));
            // 添加当前active状态
            this.classList.add('active');
            
            // 获取目标区域
            const target = this.getAttribute('data-target');
            scrollToSection(target);
        });
    });
}

function scrollToSection(sectionId) {
    let targetElement;
    switch(sectionId) {
        case 'intro':
            targetElement = document.querySelector('.intro');
            break;
        case 'analysis':
            targetElement = document.querySelector('.dashboard');
            break;
        case 'comparison':
            targetElement = document.querySelector('.methodology');
            break;
        default:
            return;
    }
    
    if (targetElement) {
        targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 图表工具按钮功能 - 保留其他图表的工具功能
function initChartTools() {
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const chartContainer = this.closest('.chart-container');
            if (!chartContainer) return;
            
            const chart = chartContainer.querySelector('.chart');
            
            if (this.textContent === '🔍') {
                // 放大功能
                chartContainer.classList.toggle('zoomed');
                if (chartContainer.classList.contains('zoomed')) {
                    this.textContent = '📋';
                    this.title = '缩小查看';
                } else {
                    this.textContent = '🔍';
                    this.title = '放大查看';
                }
            } else if (this.textContent === '↺') {
                // 重置功能
                const chartId = chart.id;
                resetChart(chartId);
            } else if (this.textContent === '📋') {
                // 缩小功能
                chartContainer.classList.remove('zoomed');
                this.textContent = '🔍';
                this.title = '放大查看';
            }
        });
    });
}

function resetChart(chartId) {
    // 根据图表ID重置对应的图表
    const chartDom = document.getElementById(chartId);
    if (!chartDom) return;
    
    const chart = echarts.getInstanceByDom(chartDom);
    if (chart) {
        chart.clear();
        // 重新初始化图表
        switch(chartId) {
            case 'goldenRatioChart':
                initGoldenRatioChart();
                break;
            case 'compositionChart':
                initCompositionChart();
                break;
            case 'paintingAnalysis':
                initPaintingAnalysis();
                break;
            case 'elementDistribution':
                initElementDistribution();
                break;
            case 'dynastyComparison':
                initDynastyComparison();
                break;
        }
    }
}

// 滚动监听 - 更新导航指示器状态
function initScrollObserver() {
    const sections = {
        intro: document.querySelector('.intro'),
        analysis: document.querySelector('.dashboard'),
        comparison: document.querySelector('.methodology')
    };
    
    // 检查所有必要的元素是否存在
    if (!sections.intro || !sections.analysis || !sections.comparison) {
        console.warn('某些页面元素未找到，滚动监听可能无法正常工作');
        return;
    }
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = Object.keys(sections).find(
                    key => sections[key] === entry.target
                );
                if (sectionId) {
                    updateActiveIndicator(sectionId);
                }
            }
        });
    }, observerOptions);
    
    Object.values(sections).forEach(section => {
        if (section) observer.observe(section);
    });
}

function updateActiveIndicator(sectionId) {
    const indicators = document.querySelectorAll('.indicator-item');
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
        if (indicator.getAttribute('data-target') === sectionId) {
            indicator.classList.add('active');
        }
    });
}

// 导出数据功能
function initExportFunction() {
    // 可以添加数据导出功能
    console.log('数据导出功能已准备就绪');
}