var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJja3dtZGV5aWsyYjJmMndub2R3cTBuazIyIn0.DaRqJP0ez4gMNtcslbVakQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    chapters: [
        {
            id: 'mn-one',
            alignment: 'left',
            hidden: false,
            title: 'A multimodal cross-town corridor, from river to river',
            description: 'People want to be on 125th street and use many modes to get there. With retail stores, restaurants, subway stations spanning nearly the width of Manhattan, it&rsquo;s a true backbone in a neighborhood with 79 nursing homes, hospitals, childcare centers, and schools. 79% of households within walking distance of 125th do not own a car, and 71% commute by bike or public transit.<br><br><em>&ldquo;Despite unsafe conditions, W125th street is a key bike corridor between East and Central Harlem and the Hudson River Greenway. There are no alternatives because of geography (Morningside Park to the south and St Nicholas Park to the north) and street design (W126th street is a one way street). We need crosstown protected bike lanes providing a safe corridor from the East River to the Hudson River on 125th street or a street next to it (e.g. 126th street).&rdquo; -Erik M</em>',
            location: {
                center: { lon: -73.94505, lat: 40.80874 },
                zoom: 14.46,
                pitch: 0.00,
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
        },
        {
            id: 'mn-two',
            alignment: 'right',
            hidden: false,
            title: 'Tree cover as a strategy for increasing equity',
            description: 'The spatial inequity of 125th Street also affects street trees, which live in <a href="https://www.google.com/maps/place/5th+Ave+%26+W+125th+St,+New+York,+NY+10027/@40.8075161,-73.9449288,3a,75y,203.47h,75.27t/data=!3m6!1e1!3m4!1s68qqKegowpNmxSGNCQ_K3Q!2e0!7i16384!8i8192!4m5!3m4!1s0x89c2f60c8401b2df:0x4e6ed18741df6677!8m2!3d40.8064194!4d-73.9422689" target="_blank">notably small tree pits</a> along this stretch, resulting in a lower survival rate and smaller canopies, less effective at cooling the air. Tree coverage is as low as 10 percent of open space, a third of what it is in the nearby Upper West Side.',
            location: {
                center: { lon: -73.94554, lat: 40.80773 },
                zoom: 16.27,
                pitch: 0.00,
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
        },
        {
            id: 'mn-three',
            alignment: 'left',
            hidden: false,
            title: 'Buses are blocked, despite a bus-only lane',
            description: 'Of the 60 public comments we received for 125th Street, nearly one-third mentioned that despite a dedicated bus lane, transit service is frustratingly unreliable due to cars and trucks double parking and violating the lane. This Community Board also ranks last among bus speed and reliability out of all 59 CBs in the city.<br><br><em>&ldquo;This bus lane is always blocked and becomes useless as busses have to merge into traffic. I sat on the M60 for an hour just to make it from Amsterdam to the MNR station.&rdquo; -Anonymous</em>',
            location: {
                center: { lon: -73.94554, lat: 40.80773 },
                zoom: 18.46,
                pitch: 0.00,
                bearing: 30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
