const gameObject =()=>{

    let allan = {
        "name": "Alan Anderson",
        "number": 0,
        "shoe": 16,
        "points": 22,
        "rebounds": 12,
        "assists": 12,
        "steals": 3,
        "blocks": 1,
        "slamDunks": 1
    }

    let reggie = {
        "name": "Reggie Evans",
        "number": 30,
        "shoe": 14,
        "points": 12,
        "rebounds": 12,
        "assists": 12,
        "steals": 12,
        "blocks": 12,
        "slamDunks": 7
    }
    let brook = {
        "name": "Brook Lopez",
        "number": 11,
        "shoe": 17,
        "points": 17,
        "rebounds": 19,
        "assists": 10,
        "steals": 3,
        "blocks": 1,
        "slamDunks": 15
    }
    let mason = {
        "name": "Mason Plumlee",
        "number": 1,
        "shoe": 19,
        "points": 26,
        "rebounds": 12,
        "assists": 6,
        "steals": 3,
        "blocks": 8,
        "slamDunks": 5
    }
    let jason = {
        "name": "Jason Terry",
        "number": 31,
        "shoe": 15,
        "points": 19,
        "rebounds": 2,
        "assists": 2,
        "steals": 4,
        "blocks": 11,
        "slamDunks": 1
    }
    let jeff = {
        "name": "Jeff Adrien",
        "number": 4,
        "shoe": 18,
        "points": 10,
        "rebounds": 1,
        "assists": 1,
        "steals": 2,
        "blocks": 7,
        "slamDunks": 2
    }
    let bismak = {
        "name": "Bismak Biyombo",
        "number": 0,
        "shoe": 16,
        "points": 12,
        "rebounds": 4,
        "assists": 7,
        "steals": 7,
        "blocks": 15,
        "slamDunks": 10
    }
    let desagna = {
        "name": "DeSagna Diop",
        "number": 2,
        "shoe": 14,
        "points": 24,
        "rebounds": 12,
        "assists": 12,
        "steals": 4,
        "blocks": 5,
        "slamDunks": 5
    }
    let ben = {
        "name":"Ben Gordon",
        "number": 8,
        "shoe": 15,
        "points": 33,
        "rebounds": 3,
        "assists": 2,
        "steals": 1,
        "blocks": 1,
        "slamDunks": 0
    }
    let brendan = {
        "name":"Brendan Haywood",
        "number": 33,
        "shoe": 15,
        "points": 6,
        "rebounds": 12,
        "assists": 12,
        "steals": 22,
        "blocks": 5,
        "slamDunks": 12
    }
    
    const retObj = {
        home: {
            teamName: "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Allan Anderson": allan,
                "Reggie Evans": reggie,
                "Brook Lopez": brook,
                "Mason Plumlee": mason,
                "Jason Terry": jason
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": jeff,
                "Bismak Biyombo": bismak,
                "DeSagna Diop": desagna,
                "Ben Gordon": ben,
                "Brendan Haywood": brendan
            }
        }
    }
    return retObj;
    }

    let g = gameObject();
    let numPointsScored = (player)=>{
        for(let key in g) {
            let a =  g[key].players[player];
            if(a) return a.points
        }
    }
    

}    