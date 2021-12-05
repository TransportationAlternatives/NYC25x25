var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJja3dtZGV5aWsyYjJmMndub2R3cTBuazIyIn0.DaRqJP0ez4gMNtcslbVakQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'A huge opportunity for transit',
            description: 'In 2020, NYC DOT built new bus priority lanes along Edward L. Grant Highway, a welcome transformation for tens of thousands of transit riders who represent nearly half of all roadway users during peak hours. Bus speeds have improved from <a href="http://busturnaround.nyc/routes/bx35/" target="_blank">5 mph</a>, yet more can be done - especially for the 78% of households in this neighborhood without cars and 76% who take public transit to work.<br><br><em>&ldquo;Buses are faster with the new bus lane&hellip; but lots of double parking, blocks buses and bikes&rdquo; -Miguel</em>',
            location: {
                center: { lon: -73.92237, lat: 40.83611 },
                zoom: 16.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Expanding public space improvements',
            description: 'The pedestrian plaza created by closing the Cromwell Avenue slip lane offers more space for people, and the community would like to see similar treatments across the rest of the intersection. Unaddressed issues include trucks stopping to make deliveries in the plaza, cars blocking pedestrians and sidewalks, and cyclists feeling unsafe while crossing.<br><br><em>&ldquo;Cars do not yield to pedestrians. Visibility is low - lots of cars stuck in the crosswalk trying to beat the light. Makes crossing the street difficult.&rdquo; -Lucia D</em>',
            location: {
                center: { lon: -73.92237, lat: 40.83611 },
                zoom: 18.00,
                pitch: 60.00,
                bearing: 15.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Designing for seniors and children, our most vulnerable street users',
            description: 'This site is a Vision Zero and a Safe Streets for Seniors priority area, meaning traffic violence is higher than citywide and especially affects a large population of older New Yorkers. With high levels of PM2.5, a pollutant from cars, hospitalizations of childhood asthma are <a target="_blank" href="https://a816-dohbesp.nyc.gov/IndicatorPublic/Report/ServerSideReport.aspx?reportid=78&amp;geotypeid=3&amp;geoentityid=106&amp;boroughid=1">three times higher</a> and adult hospitalizations four times higher than the citywide average.<br><br><em>&ldquo;Kids cross here [at 167th] from the nearby school. Too many turning cars its unsafe for kids to cross safely&rdquo; -Brother &amp; Sister<br><br>&ldquo;Feels okay to cross intersections but you have to rush - harder for seniors&rdquo; -Frank</em>',
            location: {
                center: { lon: -73.92214, lat: 40.83615 },
                zoom: 19.34,
                pitch: 60.00,
                bearing: 30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
