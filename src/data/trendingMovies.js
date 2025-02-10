const trendingMovies = [
   
    {
        "adult": false,
        "backdrop_path": "/h7r6LZ32dgLwtwSW3CxoWIYD9pr.jpg",
        "genre_ids": [
            27,
            14
        ],
        "id": 426063,
        "original_language": "en",
        "original_title": "Nosferatu",
        "overview": "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
        "popularity": 859.647,
        "poster_path": "/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
        "release_date": "2024-12-25",
        "title": "Nosferatu",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 1923
    },
    {
        "adult": false,
        "backdrop_path": "/3SOunz2Z0qcOVlrkYFj20HquziB.jpg",
        "genre_ids": [
            878,
            12,
            28,
            18,
            10770
        ],
        "id": 1114894,
        "original_language": "en",
        "original_title": "Star Trek: Section 31",
        "overview": "Emperor Philippa Georgiou joins a secret division of Starfleet tasked with protecting the United Federation of Planets and faces the sins of her past.",
        "popularity": 717.563,
        "poster_path": "/sqiCinCzUGlzQiFytS30N1nO3Pt.jpg",
        "release_date": "2025-01-15",
        "title": "Star Trek: Section 31",
        "video": false,
        "vote_average": 4.6,
        "vote_count": 123
    },
    {
        "adult": false,
        "backdrop_path": "/cA88pwGnHa64BBcU3R1oCcJH9Qc.jpg",
        "genre_ids": [
            28,
            27,
            53
        ],
        "id": 970450,
        "original_language": "en",
        "original_title": "Werewolves",
        "overview": "A year after a supermoon’s light activated a dormant gene, transforming humans into bloodthirsty werewolves and causing nearly a billion deaths, the nightmare resurfaces as the supermoon rises again. Two scientists attempt to stop the mutation but fail and must now struggle to reach one of their family homes.",
        "popularity": 653.458,
        "poster_path": "/cRTctVlwvMdXVsaYbX5qfkittDP.jpg",
        "release_date": "2024-12-04",
        "title": "Werewolves",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 270
    },
    {
        "adult": false,
        "backdrop_path": "/8dqZsevb5E8x29OFyr1neSp7bc9.jpg",
        "genre_ids": [
            27,
            878
        ],
        "id": 933260,
        "original_language": "en",
        "original_title": "The Substance",
        "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
        "popularity": 630.258,
        "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
        "release_date": "2024-09-07",
        "title": "The Substance",
        "video": false,
        "vote_average": 7.138,
        "vote_count": 3686
    },
    {
        "adult": false,
        "backdrop_path": "/u7AZ5CdT2af8buRjmYCPXNyJssd.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 1160956,
        "original_language": "zh",
        "original_title": "熊猫计划",
        "overview": "International action star Jackie Chan is invited to the adoption ceremony of a rare baby panda, but after an international crime syndicate attempts to kidnap the bear, Jackie has to save the bear using his stunt work skills.",
        "popularity": 858.76,
        "poster_path": "/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg",
        "release_date": "2024-10-01",
        "title": "Panda Plan",
        "video": false,
        "vote_average": 5.821,
        "vote_count": 28
    },
    {
        "adult": false,
        "backdrop_path": "/pqulyfkug9A7TmmRn5zrbRA8TAY.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 1255788,
        "original_language": "fr",
        "original_title": "Le Jardinier",
        "overview": "Every year the Prime Minister has a list of all kinds of troublemakers eliminated in the name of the famous Reason of State. Serge Shuster, Special Adviser to the President of the Republic, finds himself on this list, better known as the Matignon List.  Condemned to certain death and at the heart of an implacable plot and a state secret that also put his family in danger, Serge, his wife and children have only one hope left - their gardener, Léo, who hates it when « slugs » invade his garden... Especially those that want to kill innocent families.",
        "popularity": 610.049,
        "poster_path": "/5T9WR7vIOnHm6xhVt5zBuPbBgt1.jpg",
        "release_date": "2025-01-30",
        "title": "The Gardener",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 52
    },
    {
        "adult": false,
        "backdrop_path": "/bVUB4WI2vTq46OHu2o1n9HdoloQ.jpg",
        "genre_ids": [
            18
        ],
        "id": 1300607,
        "original_language": "es",
        "original_title": "Los dos hemisferios de Lucca",
        "overview": "Determined to help her son, who has cerebral palsy, Bárbara takes her family to India for an experimental treatment.",
        "popularity": 629.769,
        "poster_path": "/fX3Q5hxUAUs1k8JQkNTwFpBd6BC.jpg",
        "release_date": "2025-01-30",
        "title": "Lucca's World",
        "video": false,
        "vote_average": 7.695,
        "vote_count": 41
    },
    {
        "adult": false,
        "backdrop_path": "/rn8Sg6C8aWKRWdqY4hIpmOaiuqS.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 710295,
        "original_language": "en",
        "original_title": "Wolf Man",
        "overview": "With his marriage fraying, Blake persuades his wife Charlotte to take a break from the city and visit his remote childhood home in rural Oregon. As they arrive at the farmhouse in the dead of night, they're attacked by an unseen animal and barricade themselves inside the home as the creature prowls the perimeter. But as the night stretches on, Blake begins to behave strangely, transforming into something unrecognizable.",
        "popularity": 776.426,
        "poster_path": "/vtdEHG1j07PqLlVyhKNZRHTPKGt.jpg",
        "release_date": "2025-01-15",
        "title": "Wolf Man",
        "video": false,
        "vote_average": 6.242,
        "vote_count": 186
    },
    {
        "adult": false,
        "backdrop_path": "/au3o84ub27qTZiMiEc9UYzN74V3.jpg",
        "genre_ids": [
            28,
            878,
            53
        ],
        "id": 1035048,
        "original_language": "en",
        "original_title": "Elevation",
        "overview": "A single father and two women venture from the safety of their homes to face monstrous creatures to save the life of a young boy.",
        "popularity": 556.493,
        "poster_path": "/tnfc0NJ3BzhJrGJhkkEd6MHBdq5.jpg",
        "release_date": "2024-11-07",
        "title": "Elevation",
        "video": false,
        "vote_average": 6.33,
        "vote_count": 469
    },
    {
        "adult": false,
        "backdrop_path": "/ie8OSgIHEl6yQiGJ90dsyBWOpQA.jpg",
        "genre_ids": [
            16,
            14,
            12,
            10751,
            28
        ],
        "id": 839033,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The War of the Rohirrim",
        "overview": "A sudden attack by Wulf, a clever and traitorous lord of Rohan seeking vengeance for the death of his father, forces Helm Hammerhand, the King of Rohan, and his people to make a daring last stand in the ancient stronghold of the Hornburg.",
        "popularity": 517.78,
        "poster_path": "/cXzCOx1hUuU9CfmiEv6rXjb6EqU.jpg",
        "release_date": "2024-12-05",
        "title": "The Lord of the Rings: The War of the Rohirrim",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 406
    },
    {
        "adult": false,
        "backdrop_path": "/1pmXyN3sKeYoUhu5VBZiDU4BX21.jpg",
        "genre_ids": [
            16,
            878,
            10751
        ],
        "id": 1184918,
        "original_language": "en",
        "original_title": "The Wild Robot",
        "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
        "popularity": 496.678,
        "poster_path": "/9w0Vh9eizfBXrcomiaFWTIPdboo.jpg",
        "release_date": "2024-09-12",
        "title": "The Wild Robot",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 4225
    },
    {
        "adult": false,
        "backdrop_path": "/4cp40IyTpFfsT2IKpl0YlUkMBIR.jpg",
        "genre_ids": [
            18,
            35,
            10749
        ],
        "id": 1064213,
        "original_language": "en",
        "original_title": "Anora",
        "overview": "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.",
        "popularity": 457.308,
        "poster_path": "/7MrgIUeq0DD2iF7GR6wqJfYZNeC.jpg",
        "release_date": "2024-10-14",
        "title": "Anora",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 951
    },
    {
        "adult": false,
        "backdrop_path": "/xaNBpBkONtupAVJqQBIW5EZa7xi.jpg",
        "genre_ids": [
            35
        ],
        "id": 996821,
        "original_language": "en",
        "original_title": "You're Cordially Invited",
        "overview": "When two weddings are accidentally booked on the same day at the same venue, each bridal party is challenged with preserving their family's special moment while making the most of the unanticipated tight quarters. In a hilarious battle of determination and grit, the father of the bride and sister of the other bride chaotically go head-to-head as they stop at nothing to uphold an unforgettable celebration for their loved ones.",
        "popularity": 388.354,
        "poster_path": "/muXnwAdVdEEktto0NBNMyqK3uQH.jpg",
        "release_date": "2025-01-29",
        "title": "You're Cordially Invited",
        "video": false,
        "vote_average": 5.879,
        "vote_count": 198
    },
    {
        "adult": false,
        "backdrop_path": "/sc1abgWNXc29wSBaerrjGBih06l.jpg",
        "genre_ids": [
            878,
            27,
            35
        ],
        "id": 1084199,
        "original_language": "en",
        "original_title": "Companion",
        "overview": "During a weekend getaway at a secluded lakeside estate, a group of friends finds themselves entangled in a web of secrets, deception, and advanced technology. As tensions rise and loyalties are tested, they uncover unsettling truths about themselves and the world around them.",
        "popularity": 354.637,
        "poster_path": "/oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg",
        "release_date": "2025-01-22",
        "title": "Companion",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 171
    },
    {
        "adult": false,
        "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
        "genre_ids": [
            28,
            878,
            35,
            10751
        ],
        "id": 939243,
        "original_language": "en",
        "original_title": "Sonic the Hedgehog 3",
        "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
        "popularity": 3180.548,
        "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
        "release_date": "2024-12-19",
        "title": "Sonic the Hedgehog 3",
        "video": false,
        "vote_average": 7.784,
        "vote_count": 1574
    },
    {
        "adult": false,
        "backdrop_path": "/v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
        "genre_ids": [
            28,
            12,
            53
        ],
        "id": 539972,
        "original_language": "en",
        "original_title": "Kraven the Hunter",
        "overview": "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
        "popularity": 1872.423,
        "poster_path": "/nrlfJoxP1EkBVE9pU62L287Jl4D.jpg",
        "release_date": "2024-12-11",
        "title": "Kraven the Hunter",
        "video": false,
        "vote_average": 6.599,
        "vote_count": 1085
    },
    {
        "adult": false,
        "backdrop_path": "/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 993710,
        "original_language": "en",
        "original_title": "Back in Action",
        "overview": "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
        "popularity": 1238.258,
        "poster_path": "/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
        "release_date": "2025-01-15",
        "title": "Back in Action",
        "video": false,
        "vote_average": 6.642,
        "vote_count": 807
    },
    {
        "adult": false,
        "backdrop_path": "/qSOMdbZ6AOdHR999HWwVAh6ALFI.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 1249289,
        "original_language": "en",
        "original_title": "Alarum",
        "overview": "Two married spies caught in the crosshairs of an international intelligence network will stop at nothing to obtain a critical asset. Joe and Lara are agents living off the grid whose quiet retreat at a winter resort is blown to shreds when members of the old guard suspect the two may have joined an elite team of rogue spies, known as Alarum.",
        "popularity": 1200.04,
        "poster_path": "/v313aUGmMNj6yNveaiQXysBmjVS.jpg",
        "release_date": "2025-01-16",
        "title": "Alarum",
        "video": false,
        "vote_average": 5.872,
        "vote_count": 129
    },
    {
        "adult": false,
        "backdrop_path": "/ybSA7fUbYHw8VeRiSJ7tgKJnYWZ.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 1410082,
        "original_language": "en",
        "original_title": "Sniper: The Last Stand",
        "overview": "To stop an arms dealer from unleashing a deadly superweapon, Ace sniper Brandon Beckett and Agent Zero are deployed to Costa Verde to lead a group of elite soldiers against an unrelenting militia. Taking an untested sniper under his wing, Beckett faces his newest challenge: giving orders instead of receiving them. With both time and ammo running low in a race to save humanity, the team must overcome all odds just to survive.",
        "popularity": 1068.877,
        "poster_path": "/TVvIyCsFCmLk9MRLbAZi4X8f32.jpg",
        "release_date": "2025-01-21",
        "title": "Sniper: The Last Stand",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 66
    },
    {
        "adult": false,
        "backdrop_path": "/hctfNoMpQGfn3VXdBYb9p0P5bT5.jpg",
        "genre_ids": [
            18
        ],
        "id": 1097549,
        "original_language": "en",
        "original_title": "Babygirl",
        "overview": "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much younger intern.",
        "popularity": 860.842,
        "poster_path": "/A8HbTd0FemZyFCh5qvJFpHGiwF8.jpg",
        "release_date": "2024-12-25",
        "title": "Babygirl",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 376
    },
]

export default trendingMovies;
