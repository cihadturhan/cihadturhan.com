CV = {
    contact: {
        name: 'Cihad Turhan',
        cv: 'cv.js',
        links: [{
                name: "Mail",
                icon: "img/social/email.svg",
                color: "#0C9688",
                href: 'mailto:contact@cihadturhan.com',
                size: 56
            }, {
                name: "Twitter",
                icon: "img/social/twitter.svg",
                size: 28,
                href: 'https://twitter.com/CihadTurhan',
                color: "#2CA9E1"
            }, {
                name: "Facebook",
                icon: "img/social/facebook.svg",
                size: 28,
                href: 'https://facebook.com/cihadturhan',
                color: "#3B5999"
            }, {
                name: "Github",
                icon: "img/social/github.svg",
                size: 28,
                href: 'https://github.com/cihadturhan',
                color: "#0A0F19"
            }, {
                name: "Codepen",
                icon: "img/social/codepen.svg",
                size: 28,
                href: 'http://codepen.io/cihadturhan/',
                color: "#1E8CBE"
            }, {
                name: "Medium",
                icon: "img/social/medium.svg",
                size: 28,
                href: 'https://medium.com/@cihadturhan',
                color: "#041904"
            }, {
                name: "Pocket",
                icon: "img/social/pocket.svg",
                href: 'http://sharedli.st/cihadturhan',
                size: 28,
                color: "#EE4056"
            },
            {
                name: "Dribble",
                icon: "img/social/dribble.svg",
                href: 'https://dribbble.com/cihadturhan',
                size: 28,
                color: "#EA4C89"
            }],
        passiveLinks: []
    },
    skills: [
        {name: "HTML",value: 90}, 
        {name: "CSS",value: 90}, 
        {name: "jQuery",value: 90}, 
        {name: "Sketch",value: 80}, 
        {name: "PHP",value: 60}, 
        {name: "WebGL",value: 90}, 
        {name: "D3",value: 90}, 
        {name: "Node.js",value: 60}, 
        {name: "Angular.js",value: 50}, 
        {name: "Swift",value: 40}, 
    
    ],
    about: {
        love: [
            {name: 'Data Visulization',value: 9,desc: 'Without visualization, data is nothing.',id: 'datavis'}, 
            {name: 'Physics',value: 8,desc: 'Definitely pleased to graduate.',id: 'physics'}, 
            {name: 'Red Pandas',value: 5,desc: 'They have fluffy tails.',id: 'redpanda'}, 
            {name: 'Games',value: 4,desc: 'Who doesn\'t love to play either',id: 'game'}, 
            {name: 'My PC & Mac',value: 3,desc: 'PC for code, Mac for design.',id: 'pcmac'}, 
            {name: 'Family & Friends',value: 10,desc: 'They make my life complete',id: 'family'}, 
            {name: 'Myself',value: 1,desc: 'Sometimes I love myself',id: 'me1'}
        ],
        hate: [
            {name: 'Site Builders',value: 5,desc: 'Never offer me wordpress etc job!',id: 'wordpress'}, 
            {name: 'Prate',value: 4,desc: 'Life is too short to speak much.',id: 'prate'}, 
            {name: 'Politics',value: 9,desc: 'Please...',id: 'politics'}, 
            {name: 'Rush',value: 3,desc: 'Rush kills creativity. Slow down.',id: 'rush'}, 
            {name: 'Others\' work',value: 7,desc: 'Who loves to do others\' work anyway?',id: 'otherworks'}, 
            {name: 'Myself',value: 1,desc: 'Sometimes I hate myself',id: 'me2'}
        ]
    },
    labs: [{
            name: 'Overwerk 2M',
            description: 'Yes 2 MILLION particles, in realtime! I\'m pushing the limits of WebGL with a audio-visual experiment. It\'s still a work-in-progress project but will be released very soon. This project is collabrated with <a href="https://soundcloud.com/overwerk" target="_blank">Overwerk</a> and I really appreciate him to let me have a chance to use his songs to visualize. ',
            difficulty: 3.5,
            tags: ['Web Audio API', 'WebGL', 'GLSL'],
            backgroundLink: 'img/lab/overwerk-2m.png',
            refs: [
 
            ],
            url: '/lab/overwerk-2m/'
        },
		{
            name: 'Kinetic Typography in 3D',
            description: 'Kinetic typography school project based on the scene at the End of Line Club in Tron - Legacy movie.',
            difficulty: 4.0,
            tags: ['After Effects', 'Kinetic Typography', 'Camera', 'Motion Graphics'],
            backgroundLink: 'img/lab/tron-legacy.png',
            refs: [
                {type: 'video',url: 'https://www.youtube.com/watch?v=nMR-PgPJOyM'}
            ],
            url: 'https://youtu.be/_mZaioAFjEY'
        },
		{
            name: 'Hydrogen Atom',
            description: 'A WebGL experiment which visualizes probablity distribution of Hydrogen atom calculated by its wavefunction. To summarize, the probablity of an electron to be at a point depends on the density of the dots when the core of atom is placed at origin of the grid. Zoom in and out to see seperation of probablities.',
            difficulty: 4.5,
            tags: ['Quantum Mechanics', 'WebGL', 'ShaderParticleEngine'],
            backgroundLink: 'img/lab/h-atom.png',
            refs: [
                {type: 'src',url: 'https://github.com/cihadturhan/h-prob-density'}, 
                {type: 'image',url: 'http://en.wikipedia.org/wiki/File:Hydrogen_Density_Plots.png'}, 
                {type: 'doc',url: 'http://physicsworld.com/cws/article/news/2013/may/23/quantum-microscope-peers-into-the-hydrogen-atom'}, 
            ],
            url: 'http://cihadturhan.github.io/h-prob-density/'
        }, 
        {
            name: 'Gravional Lensing',
            description: 'A simple canvas demo to show how a supermassive blackhole warps the vision when it\'s floating in the space.  Here is a <a href="http://iopscience.iop.org/0264-9381/32/6/065001/pdf/0264-9381_32_6_065001.pdf" target="_blank"> an article (pdf) </a> if you are interested. Examine the images instead of reading boring long scientific stuff.',
            difficulty: 2.5,
            tags: ['Astronomy', 'Canvas', 'Image Processing'],
            backgroundLink: 'img/lab/gravitional-lensing.png',
            refs: [
                {type: 'video',url: 'http://youtu.be/FCoxYlpJq9s?t=1m13s'}, 
                {type: 'image',url: 'http://upload.wikimedia.org/wikipedia/commons/d/d6/BlackHole_Lensing.gif'}
            ],
            url: '/lab/gravitional-lensing/'
        }, 
        {
            name: 'Chart Transition',
            description: 'Interactive chart transition from one to another with a smooth transition.',
            difficulty: 2.5,
            tags: ['D3'],
            backgroundLink: 'img/lab/charttransition.png',
            refs: [
               
            ],
            url: '/lab/charttransition/'
        }, 
        {
            name: '3D CSS Paper Plane',
            description: 'Paper plane animation made with rotate3d property comes with CSS3',
            difficulty: 2.5,
            tags: ['CSS3'],
            backgroundLink: 'img/lab/cssplane.png',
            refs: [
            
            ],
            url: '/lab/cssplane/'
        }, 
        {
            name: 'Rating Analysis',
            description: 'A small side project made with D3 to visualize daily top 100 TV ratings ordered by AMR%.',
            difficulty: 3,
            tags: ['D3', 'TV', 'Rating'],
            backgroundLink: 'img/lab/rating-analysis.png',
            refs: [
                {type: 'doc',url: 'http://sbtanaliz.com/news.php?nid=4'}
            ],
            url: '/lab/sortedbars/'
        }, 
        {
            name: 'Jquery Aim',
            description: 'A proof of concept that anticipates user intent in lieu of rollovers or clicks. See references for code and article',
            difficulty: 2.0,
            tags: ['UX', 'jQuery', 'Fitts\' Law'],
            backgroundLink: 'img/lab/jquery-aim.png',
            refs: [
                {type: 'doc',url: 'https://medium.com/@cihadturhan/a-ux-idea-i-know-where-you-are-aiming-3e00d152afb2'}, 
                {type: 'src',url: 'https://github.com/cihadturhan/jquery-aim'}
            
            ],
            url: 'http://cihadturhan.github.io/jquery-aim/examples/dropdown.html'
        }, 
        {
            name: 'Yes/No',
            description: 'Simple recreation of YES/NO Shape by <a href="http://en.wikipedia.org/wiki/Markus_Raetz" target="_blank">Markus Reatz</a> in WebGL',
            difficulty: 1.0,
            tags: ['WebGL', '3dsMax'],
            backgroundLink: 'img/lab/yesno.png',
            refs: [
                {type: 'video',url: 'https://www.youtube.com/watch?v=eO1yYBm5wSo'}
            
            ],
            url: '/lab/yesno/'
        }, 
        {
            name: 'Rain-Bros SVG',
            description: 'SVG version of animation done by <a href="https://www.twitter.com/somethingsavage">@somethingsavage</a>',
            difficulty: 2.5,
            tags: ['CSS3', 'SVG', 'Illustrator'],
            backgroundLink: 'img/lab/colorwavelengths.png',
            refs: [
                {type: 'video',url: 'https://d13yacurqjgara.cloudfront.net/users/6108/screenshots/1515226/_rain-bros_master-dribbblr.gif'}, 
                {type: 'doc',url: 'https://dribbble.com/shots/1515226-Rain-Bros'}
            
            ],
            url: '/lab/colorwavelengths/'
        }
    ],
    works: [
        {
            name: 'Disap',
            description: 'A Social Media Analitics web app built on custom developed module system to ensure high performance and stability.',
            timeSpent: 1200,
            startDate: 'Nov 2013',
            endDate: 'May 2014',
            tags: ['PHP', 'MySQL', 'Elasticsearch', 'jQuery', 'Angular.js', 'Bootstrap', 'Custom Modules', 'SVG', 'Canvas', 'Leaflet', 'Highcharts', 'Twitter API', 'D3.js', 'Google Maps', 'Slickgrid'],
            backgroundLink: 'img/works/disap-icon-blur.png',
            foregroundLink: 'img/works/disap.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundY: 0,
                    backgroundX: 0
                }, 
                {
                    left: 284,
                    top: 111,
                    width: 473,
                    height: 48,
                    backgroundX: -175,
                    backgroundY: -918,
                    z: 30
                }, 
                {
                    left: 7,
                    top: 39,
                    width: 136,
                    height: 453,
                    backgroundX: -10,
                    backgroundY: -625,
                    z: 40
                }, {
                    left: 163,
                    top: 66,
                    width: 717,
                    height: 38,
                    backgroundX: -173,
                    backgroundY: -1268,
                    z: 30
                }, {
                    left: 163,
                    top: 168,
                    width: 715,
                    height: 283,
                    backgroundX: -175,
                    backgroundY: -975,
                    z: 50
                },  //green
                {
                    left: 225,
                    top: 179,
                    width: 619,
                    height: 240,
                    backgroundX: -175,
                    backgroundY: -1321,
                    z: 60
                },  //yellow
                {
                    left: 188,
                    top: 194,
                    width: 650,
                    height: 218,
                    backgroundX: -173,
                    backgroundY: -1579,
                    z: 80
                },  //red
                {
                    left: 345,
                    top: 247,
                    width: 493,
                    height: 177,
                    backgroundX: -173,
                    backgroundY: -1812,
                    z: 100
                }, {
                    left: 163,
                    top: 460,
                    width: 715,
                    height: 142,
                    backgroundX: -175,
                    backgroundY: -625,
                    z: 30
                }
            ],
            backgroundImg: null,
            foregroundImg: null
        }, 
        {
            name: 'Sorate',
            description: 'An innovative hybrid web application which gathers and relates Twitter vs TV Ratings data.',
            timeSpent: 1000,
            startDate: 'Jun 2013',
            endDate: 'Oct 2014',
            tags: ['PHP', 'MySQL', 'jQuery', 'jQuery UI', 'Custom Modules', 'SVG', 'Canvas', 'Highcharts', 'Twitter API', 'D3.js', 'Transit.js'],
            backgroundLink: 'img/works/sorate-icon-blur.png',
            foregroundLink: 'img/works/sorate.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundY: 0,
                    backgroundX: 0
                }, 
                {
                    left: 2,
                    top: 47,
                    width: 104,
                    height: 527,
                    backgroundX: 0,
                    backgroundY: -612,
                    z: 40
                }, 
                {
                    left: 102,
                    top: 45,
                    width: 794,
                    height: 47,
                    backgroundX: -106,
                    backgroundY: -612,
                    z: 20
                }, 
                {
                    left: 857,
                    top: 50,
                    width: 33,
                    height: 42,
                    backgroundX: -109,
                    backgroundY: -664,
                    z: 40
                }, 
                {
                    left: 168,
                    top: 98,
                    width: 220,
                    height: 220,
                    backgroundX: -142,
                    backgroundY: -665,
                    z: 40
                }, 
                {
                    left: 388,
                    top: 99,
                    width: 220,
                    height: 220,
                    backgroundX: -358,
                    backgroundY: -665,
                    z: 60
                }, 
                {
                    left: 607,
                    top: 98,
                    width: 220,
                    height: 440,
                    backgroundX: -575,
                    backgroundY: -665,
                    z: 80
                }, 
                {
                    left: 166,
                    top: 319,
                    width: 440,
                    height: 220,
                    backgroundX: -141,
                    backgroundY: -879,
                    z: 100
                }, 
                {
                    left: 10,
                    top: 8,
                    width: 122,
                    height: 32,
                    backgroundX: -158,
                    backgroundY: -1104,
                    z: 40
                }
            ]
        }, {
            name: 'Eksenlive',
            description: 'First and unique Live TV Rating Measurement Platform in the world. It measures rating of more than 200 channels in realtime and provides live video streaming.',
            timeSpent: 1440,
            startDate: 'Jun 2012',
            endDate: 'Jan 2013',
            tags: ['PHP', 'MySQL', 'jQuery', 'Flotcharts', 'Highcharts', 'Video Streaming', 'Realtime'],
            backgroundLink: 'img/works/eksenlive-icon-blur.png',
            foregroundLink: 'img/works/eksenlive.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 177,
                    top: 223,
                    width: 565,
                    height: 29,
                    backgroundX: -2,
                    backgroundY: -603,
                    z: 40
                }, {
                    left: 85,
                    top: 85,
                    width: 752,
                    height: 130,
                    backgroundX: 0,
                    backgroundY: -633,
                    z: 20
                }, {
                    left: 178,
                    top: 251,
                    width: 565,
                    height: 14,
                    backgroundX: -1,
                    backgroundY: -769,
                    z: 30
                }, {
                    left: 178,
                    top: 280,
                    width: 565,
                    height: 16,
                    backgroundX: -1,
                    backgroundY: -783,
                    z: 30
                }, {
                    left: 186,
                    top: 328,
                    width: 213,
                    height: 202,
                    backgroundX: -3,
                    backgroundY: -811,
                    z: 100
                }, {
                    left: 397,
                    top: 389,
                    width: 187,
                    height: 139,
                    backgroundX: -216,
                    backgroundY: -874,
                    z: 80
                }, {
                    left: 582,
                    top: 439,
                    width: 183,
                    height: 89,
                    backgroundX: -403,
                    backgroundY: -924,
                    z: 60
                }
            ]
        }, {
            name: 'Eksenplus',
            description: 'An experimental but unique web app which analyses previous and current status of any TV program and predicts the rating the future episodes. In addition, the app provides the reason why rating mesurement increased or decreased.',
            timeSpent: 480,
            startDate: 'Feb 2013',
            endDate: 'Apr 2013',
            tags: ['PHP', 'jQuery', 'SVG', 'Canvas', 'Highcharts', 'Twitter API', 'D3.js', 'Swiper'],
            backgroundLink: 'img/works/eksenplus-icon-blur.png',
            foregroundLink: 'img/works/eksenplus.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 799,
                    top: 387,
                    width: 70,
                    height: 22,
                    backgroundX: -820,
                    backgroundY: -606,
                    z: 10
                }, {
                    left: 0,
                    top: 75,
                    width: 585,
                    height: 502,
                    backgroundX: -0,
                    backgroundY: -1058,
                    z: 20
                }, {
                    left: 12,
                    top: 83,
                    width: 585,
                    height: 502,
                    backgroundX: -0,
                    backgroundY: -600,
                    z: 40
                }, {
                    left: 29,
                    top: 104,
                    width: 585,
                    height: 473,
                    backgroundX: -0,
                    backgroundY: -1568,
                    z: 70
                }, {
                    left: 0,
                    top: 80,
                    width: 585,
                    height: 473,
                    backgroundX: -314,
                    backgroundY: -2026,
                    z: 130
                }
            ]
        }, {
            name: 'Hayatimin Soundtracki',
            description: 'An upcoming web experiment which involves WebGL visualization and WebAudio signal processing. I and <a href="https://twitter.com/ademilter" target="_blank">@ademilter</a> collabrated on the frontend side.',
            timeSpent: 180,
            startDate: 'Feb 2015',
            endDate: 'Mar 2015',
            tags: ['WebGL', 'WebAudio API', 'jQuery', 'Polyfills'],
            backgroundLink: 'img/works/vdf-icon-blur.png',
            foregroundLink: 'img/works/vdf.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 0,
                    top: 505,
                    width: 900,
                    height: 65,
                    backgroundX: -0,
                    backgroundY: -600,
                    z: 20
                }, {
                    left: 722,
                    top: 520,
                    width: 111,
                    height: 31,
                    backgroundX: 0,
                    backgroundY: -665,
                    z: 40
                }, {
                    left: 13,
                    top: 445,
                    width: 216,
                    height: 45,
                    backgroundX: -114,
                    backgroundY: -665,
                    z: 20
                }, {
                    left: 0,
                    top: 60,
                    width: 896,
                    height: 473,
                    backgroundX: 0,
                    backgroundY: -730,
                    z: 100
                }, {
                    left: 201,
                    top: 66,
                    width: 498,
                    height: 473,
                    backgroundX: 0,
                    backgroundY: -1212,
                    z: 70
                }, {
                    left: 260,
                    top: 113,
                    width: 381,
                    height: 379,
                    backgroundX: -520,
                    backgroundY: -1216,
                    z: 40
                }, {
                    left: 318,
                    top: 170,
                    width: 259,
                    height: 255,
                    backgroundX: -639,
                    backgroundY: -1600,
                    z: 10
                }, {
                    left: 204,
                    top: 102,
                    width: 490,
                    height: 394,
                    backgroundX: -0,
                    backgroundY: -1685,
                    z: 140
                }, {
                    left: 87,
                    top: 412,
                    width: 723,
                    height: 86,
                    backgroundX: -178,
                    backgroundY: -2157,
                    z: 160
                }
            ]
        }, {
            name: 'T****',
            description: 'Ongoing personal project which I\'m doing in my spare time. It will be an anonymous chat application and will be released in iOS platform. ',
            timeSpent: 100,
            startDate: 'Jan 2015',
            endDate: '-',
            tags: ['Swift', 'Node.js', 'Socket.io', 'Realtime'],
            backgroundLink: 'img/works/tickr-icon-blur.png',
            foregroundLink: 'img/works/tickr.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 344,
                    top: 19,
                    width: 474,
                    height: 568,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 120
                }, {
                    left: 207,
                    top: 86,
                    width: 487,
                    height: 103,
                    backgroundX: 0,
                    backgroundY: -1168,
                    z: 140
                }, {
                    left: 339,
                    top: 289,
                    width: 224,
                    height: 224,
                    backgroundX: -477,
                    backgroundY: -603,
                    z: 150
                }, {
                    left: 76,
                    top: 20,
                    width: 527,
                    height: 580,
                    backgroundX: 0,
                    backgroundY: -1271,
                    z: 90
                }, {
                    left: 274,
                    top: 9,
                    width: 468,
                    height: 587,
                    backgroundX: 0,
                    backgroundY: -1851,
                    z: 60
                }, {
                    left: 0,
                    top: 0,
                    width: 521,
                    height: 600,
                    backgroundX: -379,
                    backgroundY: -2400,
                    z: 30
                }
            ]
        }, {
            name: 'More?',
            description: 'Of course there is more, contact me if you are interested.',
            timeSpent: 1,
            startDate: 'Jan 2015',
            endDate: '',
            tags: ['...'],
            backgroundLink: 'img/works/more-icon-blur.png',
            foregroundLink: 'img/works/more.png',
            positions: [
                {
                    left: 0,
                    top: 0,
                    width: 900,
                    height: 600,
                    backgroundX: 0,
                    backgroundY: 0
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 20
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 20
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 21
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 22
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 23
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 24
                }, {
                    left: 378,
                    top: 80,
                    width: 144,
                    height: 393,
                    backgroundX: 0,
                    backgroundY: -600,
                    z: 25
                }
            
            ]
        }
    ]
};
