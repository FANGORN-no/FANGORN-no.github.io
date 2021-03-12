Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fordeling av medier en gjennomsnittsdag (9-79 år)'
    },
    xAxis: {
        categories: ['1991', '2000', '2018', '2019']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'medie fordeling i prosent av befolkningen'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Papravis',
        data: [84, 77, 30, 27]
    }, {
        name: 'Fjernsyn',
        data: [81, 82, 60, 48,]
    }, {
        name: 'Radio',
        data: [71, 57, 50, 48]
    }, {
        name: 'Lydmedier',
        data: [43, 50, 51, 55]
    }, {
        name: 'Ukeblad',
        data: [21, 17, 5, 4]
    }, {
        name: 'Bøker',
        data: [24, 20, 24, 25]
    }, {
        name: 'Tidsskrift',
        data: [18, 14, 6, 7]
    }, {
        name: 'Tegneserieblad',
        data: [11, 9, 3, 3]
    }, {
        name: 'Serier/film/video',
        data: [10, 10, 37, 43]
    }, {
        name: 'Internett',
        data: [null, 27, 91, 90]
    }
]
});