//this file holds all of the friend data 

var friends = [
    {name:'Olivia',
     photo:'https://static1.squarespace.com/static/53b599ebe4b08a2784696956/53c987b9e4b02a3a05287045/573e5642ab48dee8fdd818bc/1463704281105/professional-headshots-73.jpg',
     scores: [
        1,	1,	4,	3,	4,	1,	5,	3,	5,	2
 
     ]
     }
//     {name:'Sarah',
//      photo:'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/juink.jpg',
//      scores: [
//         4, 5,
//         3,
//         1,
//         4,
//         4,
//         3,
//         3,
//         4,
//         4        

//      ]
//     },
//     {name:'Christina',
//      photo:'data:image/jpeg;base64,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',
//      scores: [
//         5,
//         4,
//         4,
//         2,
//         3,
//         2,
//         2,
//         2,
//         5,
//         4    
//      ]
//     },
//     {name:'Jenny',
//      photo:'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/juink.jpg',
//      scores: [
//         5,
//         5,
//         5,
//         5,
//         4,
//         5,
//         2,
//         3,
//         3,
//         2       
//      ]
//     },
//     {name:'Stacy',
//      photo:'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/juink.jpg',
//      scores: [
//         4,
//         5,
//         4,
//         5,
//         1,
//         2,
//         3,
//         3,
//         5,
//         2
//      ]
//     },
//     {name:'Emma',
//      photo:'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/juink.jpg',
//      scores: [
//         2,
//         3,
//         4,
//         4,
//         3,
//         3,
//         1,
//         1,
//         4,
//         5      
//      ]
//     },
//     {name:'Rachel',
//      photo:'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/juink.jpg',
//      scores: [
//         4,
//         3,
//         2,
//         5,
//         1,
//         4,
//         1,
//         5,
//         1,
//         1
//      ]
//     },
//     {name:'Chris',
//      photo:'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/juink.jpg',
//      scores: [
//         2,
//         3,
//         2,
//         1,
//         5,
//         4,
//         3,
//         5,
//         4,
//         3
//      ]
//     },
//     {name:'Ben',
//      photo:'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/juink.jpg',
//      scores: [
//         2,
//         3,
//         1,
//         2,
//         2,
//         4,
//         5,
//         5,
//         1,
//         4
//      ]
//     },
//     {name:'Frank',
//     photo:'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/juink.jpg',
//     scores: [
//         1,
//         1,
//         5,
//         4,
//         2,
//         2,
//         3,
//         4,
//         5,
//         4  
//     ]
//    },

];

module.exports = friends;