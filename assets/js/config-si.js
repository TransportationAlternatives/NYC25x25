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
            title: 'Crashes are definitively caused by speeding',
            description: 'This area has very high crash rates and unsafe conditions for people on foot, especially school-aged children. <a href="https://www.google.com/maps/@40.5755212,-74.0989355,3a,75y,91.4h,82.58t/data=!3m7!1e1!3m5!1sPLCOoSgqKRUvZNkLFV_LVw!2e0!5s20180701T000000!7i16384!8i8192!5m1!1e1" target="_blank">Speed cameras</a> in this area rank 82nd and 83rd out of nearly 1,000 cameras for most violations per month, beating out locations that boast much higher volumes of traffic.',
            location: {
                center: { lon: -74.10022, lat: 40.57655 },
                zoom: 16.75,
                pitch: 0.00,
                bearing: 37.50
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
            title: 'Transit cannot succeed in a pedestrian-hostile environment',
            description: 'Hyland Avenue is also a critical bus route connecting Northern Staten Island, the Staten Island Railway, and the Staten Island Ferry. The public transit commuter rate in this area is 44% (high for SI), and one in six households do not own a car. Additionally, transit riders on SI have the longest commutes of any type of commuter in the city, at 75 minutes per trip average.',
            location: {
                center: { lon: -74.10260, lat: 40.57761 },
                zoom: 19.20,
                pitch: 60.00,
                bearing: 44.17
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
