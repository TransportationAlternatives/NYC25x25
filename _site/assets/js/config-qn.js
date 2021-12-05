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
            title: 'Prioritize vulnerable pedestrians at points of crossing',
            description: 'The area is home to large populations of people of color and people living in poverty, with walk-to-work rates twice as high as in the rest of the city and two-thirds of households car-free.<br><br><em>&ldquo;Lots of teenagers cross the street here to reach the high schools. Many close calls&rdquo; -Lorraine<br><br>&ldquo;At a minimum, crosswalks need to be widened and straightened to be perpendicular to Northern Blvd, so that pedestrians have the option to cross the shortest possible distance. Sidewalk bumpouts should be built into parking lanes in order to further shorten crossings, as well as increasing pedestrian visibility to drivers.&rdquo; -Eric</em>',
            location: {
                center: { lon: -73.82807, lat: 40.76396 },
                zoom: 17.32,
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
            title: 'A center-running mall is space for people, not parking',
            description: 'Flushing Memorial sits between the two directions of Northern Boulevard and has a lot of potential to be a beautiful median - but is currently flanked by a confusing parking lane which encourages conflicts with drivers.<br><br><em>&ldquo;There should not be parking alongside the mall - it is too unsafe and slows down traffic in the left lane (which is the fast lane). Take that space and widen the mall and add protected bike lanes.&rdquo; -Joby<br><br>&ldquo;Let us get rid of the police cars and personal cars from the sidewalk and City park (memorial) in the median&rdquo; -John C</em>',
            location: {
                center: { lon: -73.82860, lat: 40.76392 },
                zoom: 18.79,
                pitch: 60.00,
                bearing: 45.00
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
            title: 'A boulevard, not a freeway',
            description: 'With the <a href="https://www1.nyc.gov/html/dot/downloads/pdf/smart-truck-management-plan.pdf" target="_blank">fifth-highest truck volumes</a> of any major truck route in the city, it&rsquo;s no wonder that Northern Boulevard feels like a ground-level freeway.<br><br><em>&ldquo;Northern is basically a ground-level freeway. It feels especially hostile to cyclists and pedestrians. Why not make a dedicated bus lane on Northern to cut down on auto traffic. And how about implementing a protected intersection design?&rdquo; -Ben T</em>',
            location: {
                center: { lon: -73.82820, lat: 40.76388 },
                zoom: 18.31,
                pitch: 60.00,
                bearing: 74.92
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
