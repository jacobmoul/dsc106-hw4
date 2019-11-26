'use strict';

var bubbleOptions = {
    chart: {
        renderTo: 'bubblechart',
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: "Jake Gyllenhaal's Thrillers are more popular than his Romance movies"
    },
    subtitle: {
        text: 'Rating of Gyllenhaal movies by genre (Source: IMDb)'
    },
    tooltip: {
        useHTML: true,
        formatter: function () {
            return '<b>' + this.point.name + '</b> ('+this.point.year+') '+ Math.log(this.point.value)+
            '/10'}
    },
    plotOptions: {
        packedbubble: {
            minSize: '5%',
            maxSize: '60%',
            zMin: 0,
            zMax: 5000,
            layoutAlgorithm: {
                gravitationalConstant: 0.1,
                splitSeries: true
                // seriesInteraction: false,
                // dragBetweenSeries: true,
                // parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{'name': 'Action',
    'data': [{'name': 'Spider-Man: Far from Home',
      'value': 1998.1958951041172,
      'year': 2019},
     {'name': 'The Day After Tomorrow: Deleted Scenes',
      'value': 897.8472916504176,
      'year': 2018},
     {'name': 'Okja', 'value': 1480.299927584545, 'year': 2017},
     {'name': 'Prince of Persia: The Sands of Time',
      'value': 735.0951892419727,
      'year': 2010},
     {'name': 'Jarhead', 'value': 1096.6331584284585, 'year': 2005}]},
   {'name': 'Horror',
    'data': [{'name': 'Velvet Buzzsaw',
      'value': 298.8674009670603,
      'year': 2019},
     {'name': 'Great Performers: Horror Show',
      'value': 1635.984429995927,
      'year': 2017},
     {'name': 'Life', 'value': 735.0951892419727, 'year': 2017},
     {'name': 'The Shoes: Time to Dance',
      'value': 2697.28232826851,
      'year': 2012}]},
   {'name': 'Drama',
    'data': [{'name': 'The Sisters Brothers',
      'value': 1096.6331584284585,
      'year': 2018},
     {'name': 'Wildlife', 'value': 992.2747156050262, 'year': 2018},
     {'name': 'Stronger', 'value': 992.2747156050262, 'year': 2017},
     {'name': 'Demolition', 'value': 1096.6331584284585, 'year': 2015},
     {'name': 'Southpaw', 'value': 1635.984429995927, 'year': 2015},
     {'name': 'Proof', 'value': 812.4058251675433, 'year': 2005},
     {'name': 'Highway', 'value': 492.7490410932563, 'year': 2002},
     {'name': 'October Sky', 'value': 2440.6019776244984, 'year': 1999},
     {'name': 'Josh and S.A.M.', 'value': 298.8674009670603, 'year': 1993}]},
   {'name': 'Thriller',
    'data': [{'name': 'Nocturnal Animals',
      'value': 1808.0424144560632,
      'year': 2016},
     {'name': 'Everest', 'value': 1211.9670744925763, 'year': 2015},
     {'name': 'Nightcrawler', 'value': 2697.28232826851, 'year': 2014},
     {'name': 'Enemy', 'value': 992.2747156050262, 'year': 2013},
     {'name': 'Prisoners', 'value': 3294.4680752838403, 'year': 2013},
     {'name': 'End of Watch', 'value': 1998.1958951041172, 'year': 2012},
     {'name': 'Source Code', 'value': 1808.0424144560632, 'year': 2011},
     {'name': 'Brothers', 'value': 1211.9670744925763, 'year': 2009},
     {'name': 'Rendition', 'value': 897.8472916504176, 'year': 2007},
     {'name': 'Zodiac', 'value': 2208.347991887209, 'year': 2007},
     {'name': 'The Day After Tomorrow',
      'value': 601.8450378720822,
      'year': 2004},
     {'name': 'Donnie Darko', 'value': 2980.9579870417283, 'year': 2001},
     {'name': 'Homegrown', 'value': 330.2995599096486, 'year': 1998},
     {'name': 'Homicide: Life on the Street',
      'value': 4914.768840299134,
      'year': 1993}]},
   {'name': 'Comedy',
    'data': [{'name': 'Inside Amy Schumer',
      'value': 403.4287934927351,
      'year': 2013},
     {'name': 'Jiminy Glick in Lalawood',
      'value': 244.69193226422038,
      'year': 2004},
     {'name': 'City Slickers', 'value': 812.4058251675433, 'year': 1991}]},
   {'name': 'Romance',
    'data': [{'name': 'Accidental Love',
      'value': 60.34028759736195,
      'year': 2015},
     {'name': 'Love & Other Drugs', 'value': 812.4058251675433, 'year': 2010},
     {'name': 'Brokeback Mountain', 'value': 2208.347991887209, 'year': 2005},
     {'name': 'Moonlight Mile', 'value': 735.0951892419727, 'year': 2002},
     {'name': 'The Good Girl', 'value': 601.8450378720822, 'year': 2002},
     {'name': 'Lovely & Amazing', 'value': 812.4058251675433, 'year': 2001},
     {'name': 'Bubble Boy', 'value': 270.42640742615254, 'year': 2001},
     {'name': 'A Dangerous Woman', 'value': 330.2995599096486, 'year': 1993}]},
   {'name': 'Short',
    'data': [{'name': 'Jay-Z Feat. Beyoncé: Part II - On the Run',
      'value': 200.33680997479166,
      'year': 2014},
     {'name': 'Jamie Foxx Ft. T-Pain: Blame It',
      'value': 221.40641620418717,
      'year': 2009},
     {'name': 'Between the Towers', 'value': 812.4058251675433, 'year': 2005}]}]
};

var goodRadarOptions = {
    chart: {
        renderTo: 'good-radar',
        parallelCoordinates: true,
        parallelAxes: {
          gridLineWidth: 0
        },
        polar: true
      },
    
    xAxis: {
        categories: ['Awards', 'Rating', 'Critic Rating', 'Box Office Opening'],
    labels: {
        enabled: true
        }
    },
    
    yAxis: [{
        min: 0,
        max: 200,
        showLastLabel: true
    }, {
        min: 0,
        max: 10,
        showLastLabel: true
    }, {
        min: 0,
        max: 100,
        showLastLabel: true
    }, {
        min: 10,
        max: 100,
        showLastLabel: true,
        labels: {
            format: '${value} M'
        },
        tooltipPointFormat: '{point.formattedValue}'
    }],

    series: [{
        name: 'Nightcrawler',
        data: [164, 7.9, 76, 10.9]
    }, {
        name: 'Prisoners',
        data: [46, 8.1, 74, 20.8]
    }],
    
    legend: {
            enabled: true
    },

    title: {
        text: "Good ratings and awards did not mean box office wins"
    },
    subtitle: {
        text: "Comparison of well-rated movies"
    }
};

var badRadarOptions = {
    chart: {
        renderTo: 'bad-radar',
        parallelCoordinates: true,
        parallelAxes: {
          gridLineWidth: 0
        },
        polar: true
      },
    
    xAxis: {
        categories: ['Awards', 'Rating', 'Critic Rating', 'Box Office Opening'],
    labels: {
        enabled: true
        }
    },
    
    yAxis: [{
        min: 0,
        max: 200,
        showLastLabel: true
    }, {
        min: 0,
        max: 10,
        showLastLabel: true
    }, {
        min: 0,
        max: 100,
        showLastLabel: true
    }, {
        min: 10,
        max: 100,
        showLastLabel: true,
        labels: {
            format: '${value} M'
        },
        tooltipPointFormat: '{point.formattedValue}'
    }],

    series: [{
        name: 'Bubble Boy',
        data: [1, 5.6, 41, 2]
    }, {
        name: 'The Day After Tomorrow',
        data: [18, 6.4, 47, 85.8]
    }],
    
    legend: {
            enabled: true
    },

    title: {
        text: "Bad ratings did not stop box office wins"
    },
    subtitle: {
        text: "Comparison of poorly-rated movies"
    }
};

function onSuccess() {
    Highcharts.chart(bubbleOptions);
    Highcharts.chart(goodRadarOptions);
    Highcharts.chart(badRadarOptions);
};

document.onload(onSuccess());