var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJja3dtZGV5aWsyYjJmMndub2R3cTBuazIyIn0.DaRqJP0ez4gMNtcslbVakQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    chapters: [
        {
            id: 'bk-one',
            alignment: 'left',
            hidden: false,
            title: '10 fatal crashes in 2021 alone',
            description: 'In the last 5 years, there have also been 75 reported injuries at Flatbush and Atlantic Avenue, ranking this site as one of the top 20% of most dangerous intersections in the city.<br><br><em>&ldquo;Terrifying. I ride on the sidewalk if absolutely necessary. I avoid walking along here because it is so unpleasant as well. Atlantic is terrible.&rdquo; -Em<br><br>&ldquo;I avoid Atlantic at all costs. Feels the most dangerous on the northside as a pedestrian I feel like, because cars speed so fast on Atlantic and these streets are angled so they do not slow down when turning right.&rdquo; -Anonymous</em>',
            location: {
                center: { lon: -73.97253, lat: 40.68255 },
                zoom: 16.31,
                pitch: 38.25,
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
            id: 'bk-two',
            alignment: 'right',
            hidden: false,
            title: '69% of households within walking distance of Atlantic Avenue do not own a car',
            description: 'Atlantic Ave-Barclays Center is one of the busiest subway stations in New York, with 44,000 daily riders, 98% of whom walk to the station &mdash; where sidewalks are sometimes only five feet wide. <br><br><em>&ldquo;Sidewalk on this block is too narrow for volume of pedestrians, especially given proximity to South Oxford Park.&rdquo; -Stephanie<br><br>&ldquo;There is no bike parking here even though there are tons of stores &mdash; Target, Uniqlo, Sephora, etc!&rdquo; -Alison</em>',
            location: {
                center: { lon: -73.97741, lat: 40.68405 },
                zoom: 18.00,
                pitch: 8.29,
                bearing: 45.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bk-three',
            alignment: 'left',
            hidden: false,
            title: 'A Vision Zero Priority Area',
            description: 'Atlantic Avenue is 117 feet wide. Over 80% of this public space is dedicated to moving or storing vehicles, 18% for pedestrians, 0% for buses, and 0% for cyclists. The avenue&rsquo;s car and parking lanes stretch 94 feet, which could fit a nine-lane highway.<br><br><em>&ldquo;I walk through here everyday and there are a lot of close calls due to speeding. The current median just has trash and broken glass...could be utilized for the public in a way that could discourage speeding.&rdquo; -Isaiah<br><br>&ldquo;With six travel lanes, two parking lanes, one turning lane, and a very narrow median on the east mean there is often not enough time to cross safely&rdquo; -David H</em>',
            location: {
                center: { lon: -73.97593, lat: 40.68365 },
                zoom: 18.11,
                pitch: 0.00,
                bearing: 15.00
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
            id: 'bk-four',
            alignment: 'right',
            hidden: false,
            title: 'Car-centric infrastructure leads to negative externalities',
            description: '<a target="_blank" href="https://a816-dohbesp.nyc.gov/IndicatorPublic/Report/ServerSideReport.aspx?reportid=78&amp;geotypeid=3&amp;geoentityid=203&amp;boroughid=2">Asthma hospitalizations</a> in this area are 2x higher than the citywide average, due to <a target="_blank" href="https://www1.nyc.gov/html/dot/downloads/pdf/smart-truck-management-plan.pdf">disproportionate exposure</a> to noise, particulate matter, and emissions from engines. The lack of permeable surfaces led to 12+ inches of flooding reported <a href="https://experience.arcgis.com/experience/7c260f80c5d44d948d45051d7a2d6d77/page/page_0/?views=view_2" target="_blank" class="scroll-link">during Hurricane Ida</a>. The community boards here rate high on the <a target="_blank" href="https://visualizenyc.net/theme/climate-change/">Climate Change Vulnerability Index</a>, due to high surface temperatures and low <a target="_blank" href="https://tree-map.nycgovparks.org/tree-map/borough/3">tree coverage</a>, <a target="_blank" href="https://communityprofiles.planning.nyc.gov/brooklyn/3">street cleanliness</a>, and <a target="_blank" href="https://communityprofiles.planning.nyc.gov/brooklyn/8">access to green space</a>',
            location: {
                center: { lon: -73.96663, lat: 40.68158 },
                zoom: 19.45,
                pitch: 60.00,
                bearing: -75.37
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
