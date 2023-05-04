import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-api-service.service';
import { Movies } from '../model/movies';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  favlist: Array<Movies> ;

  trendingMovieResult = [
    {
        "adult": false,
        "backdrop_path": "/ytdebEE0ndYLSTEctPgh8e0vaBs.jpg",
        "id": 76600,
        "title": "Avatar: The Way of Water",
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "media_type": "movie",
        "genre_ids": [
            878,
            12,
            28
        ],
        "popularity": 5957.435,
        "release_date": "2022-12-14",
        "video": false,
        "vote_average": 7.732,
        "vote_count": 7173
    },
    {
        "adult": false,
        "backdrop_path": "/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",
        "id": 594767,
        "title": "Shazam! Fury of the Gods",
        "original_language": "en",
        "original_title": "Shazam! Fury of the Gods",
        "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
        "poster_path": "/3GrRgt6CiLIUXUtoktcv1g2iwT5.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            35,
            14
        ],
        "popularity": 9435.399,
        "release_date": "2023-03-15",
        "video": false,
        "vote_average": 6.968,
        "vote_count": 898
    },
    {
        "adult": false,
        "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
        "id": 502356,
        "title": "The Super Mario Bros. Movie",
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "media_type": "movie",
        "genre_ids": [
            16,
            12,
            10751,
            14,
            35
        ],
        "popularity": 12929.143,
        "release_date": "2023-04-05",
        "video": false,
        "vote_average": 7.498,
        "vote_count": 909
    },
    {
        "adult": false,
        "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
        "id": 603692,
        "title": "John Wick: Chapter 4",
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            53,
            80
        ],
        "popularity": 2287.138,
        "release_date": "2023-03-22",
        "video": false,
        "vote_average": 8.003,
        "vote_count": 1067
    },
    {
        "adult": false,
        "backdrop_path": "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
        "id": 700391,
        "title": "65",
        "original_language": "en",
        "original_title": "65",
        "overview": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
        "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
        "media_type": "movie",
        "genre_ids": [
            878,
            12,
            53,
            28
        ],
        "popularity": 4510.03,
        "release_date": "2023-03-02",
        "video": false,
        "vote_average": 6.323,
        "vote_count": 547
    },
    {
        "adult": false,
        "backdrop_path": "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
        "id": 677179,
        "title": "Creed III",
        "original_language": "en",
        "original_title": "Creed III",
        "overview": "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damien Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damien — a fighter who has nothing to lose.",
        "poster_path": "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            28
        ],
        "popularity": 5420.625,
        "release_date": "2023-03-01",
        "video": false,
        "vote_average": 7.278,
        "vote_count": 1018
    },
    {
        "adult": false,
        "backdrop_path": "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
        "id": 85937,
        "name": "Demon Slayer: Kimetsu no Yaiba",
        "original_language": "ja",
        "original_name": "鬼滅の刃",
        "overview": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
        "poster_path": "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
        "media_type": "tv",
        "genre_ids": [
            16,
            10759,
            10765
        ],
        "popularity": 437.098,
        "first_air_date": "2019-04-06",
        "vote_average": 8.7,
        "vote_count": 5025,
        "origin_country": [
            "JP"
        ]
    },
    {
        "adult": false,
        "backdrop_path": "/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg",
        "id": 948713,
        "title": "The Last Kingdom: Seven Kings Must Die",
        "original_language": "en",
        "original_title": "The Last Kingdom: Seven Kings Must Die",
        "overview": "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
        "poster_path": "/xUvSeFhdsJbKFOaHnB9TeTZpJKs.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            12,
            36,
            18,
            10752
        ],
        "popularity": 161.147,
        "release_date": "2023-04-14",
        "video": false,
        "vote_average": 7.625,
        "vote_count": 116
    },
    {
        "adult": false,
        "backdrop_path": "/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg",
        "id": 82856,
        "name": "The Mandalorian",
        "original_language": "en",
        "original_name": "The Mandalorian",
        "overview": "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
        "poster_path": "/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
        "media_type": "tv",
        "genre_ids": [
            10765,
            10759,
            18
        ],
        "popularity": 1279.276,
        "first_air_date": "2019-11-12",
        "vote_average": 8.487,
        "vote_count": 8801,
        "origin_country": [
            "US"
        ]
    },
    {
        "adult": false,
        "backdrop_path": "/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg",
        "id": 739405,
        "title": "Operation Fortune: Ruse de Guerre",
        "original_language": "en",
        "original_title": "Operation Fortune: Ruse de Guerre",
        "overview": "Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission when the sale of a deadly new weapons technology threatens to disrupt the world order.",
        "poster_path": "/cOaQU5o7mznZTFb4Xs9c1QlwTze.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            35,
            12
        ],
        "popularity": 223.757,
        "release_date": "2023-01-04",
        "video": false,
        "vote_average": 6.666,
        "vote_count": 471
    },
    {
        "adult": false,
        "backdrop_path": "/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
        "id": 640146,
        "title": "Ant-Man and the Wasp: Quantumania",
        "original_language": "en",
        "original_title": "Ant-Man and the Wasp: Quantumania",
        "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
        "poster_path": "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
        "media_type": "movie",
        "genre_ids": [
            878,
            12,
            28
        ],
        "popularity": 1013.75,
        "release_date": "2023-02-15",
        "video": false,
        "vote_average": 6.321,
        "vote_count": 1279
    },
    {
        "adult": false,
        "backdrop_path": "/4avmIRBBOs9b4DKoenf8SWWJJP7.jpg",
        "id": 726759,
        "title": "Tetris",
        "original_language": "en",
        "original_title": "Tetris",
        "overview": "In 1988, American video game salesman Henk Rogers discovers the video game Tetris. When he sets out to bring the game to the world, he enters a dangerous web of lies and corruption behind the Iron Curtain.",
        "poster_path": "/4F2QwCOYHJJjecSvdOjStuVLkpu.jpg",
        "media_type": "movie",
        "genre_ids": [
            53,
            36,
            18
        ],
        "popularity": 276.952,
        "release_date": "2023-03-15",
        "video": false,
        "vote_average": 7.801,
        "vote_count": 405
    },
    {
        "adult": false,
        "backdrop_path": "/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg",
        "id": 638974,
        "title": "Murder Mystery 2",
        "original_language": "en",
        "original_title": "Murder Mystery 2",
        "overview": "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
        "poster_path": "/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg",
        "media_type": "movie",
        "genre_ids": [
            35,
            9648,
            28
        ],
        "popularity": 3929.039,
        "release_date": "2023-03-28",
        "video": false,
        "vote_average": 6.507,
        "vote_count": 708
    },
    {
        "adult": false,
        "backdrop_path": "/fh7aM10THQzivGU7kAkgKrgzot4.jpg",
        "id": 493529,
        "title": "Dungeons & Dragons: Honor Among Thieves",
        "original_language": "en",
        "original_title": "Dungeons & Dragons: Honor Among Thieves",
        "overview": "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
        "poster_path": "/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg",
        "media_type": "movie",
        "genre_ids": [
            12,
            14,
            35
        ],
        "popularity": 466.897,
        "release_date": "2023-03-23",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 400
    },
    {
        "adult": false,
        "backdrop_path": "/u7OpeS4eckBSR1wFxFTuyy3FjHE.jpg",
        "id": 154385,
        "name": "BEEF",
        "original_language": "en",
        "original_name": "BEEF",
        "overview": "A road rage incident between two strangers — a failing contractor and an unfulfilled entrepreneur — sparks a feud that brings out their darkest impulses.",
        "poster_path": "/4b4v7RnPhNyPEaVGFarEuo74r8W.jpg",
        "media_type": "tv",
        "genre_ids": [
            35,
            18
        ],
        "popularity": 210.773,
        "first_air_date": "2023-04-06",
        "vote_average": 8.42,
        "vote_count": 69,
        "origin_country": [
            "US"
        ]
    },
    {
        "adult": false,
        "backdrop_path": "/aityu1Gma509jInlspHstEt8Jg0.jpg",
        "id": 736790,
        "title": "Chupa",
        "original_language": "en",
        "original_title": "Chupa",
        "overview": "While visiting family in Mexico, a lonely boy befriends a mythical creature hiding on his grandfather's ranch and embarks on the adventure of a lifetime.",
        "poster_path": "/ra3xm8KFAkwK0CdbPRkfYADJYTB.jpg",
        "media_type": "movie",
        "genre_ids": [
            12,
            14,
            10751
        ],
        "popularity": 1453.358,
        "release_date": "2023-04-07",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 118
    },
    {
        "adult": false,
        "backdrop_path": "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
        "id": 100088,
        "name": "The Last of Us",
        "original_language": "en",
        "original_name": "The Last of Us",
        "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
        "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        "media_type": "tv",
        "genre_ids": [
            18
        ],
        "popularity": 1096.587,
        "first_air_date": "2023-01-15",
        "vote_average": 8.756,
        "vote_count": 3208,
        "origin_country": [
            "US"
        ]
    },
    {
        "adult": false,
        "backdrop_path": "/umhjSTT9qDBZFJUUYQ2kVpOkQpY.jpg",
        "id": 1067282,
        "title": "Demon Slayer: Kimetsu no Yaiba -To the Swordsmith Village-",
        "original_language": "ja",
        "original_title": "「鬼滅の刃」上弦集結、そして刀鍛冶の里へ",
        "overview": "After his family is viciously murdered, a kind-hearted boy named Tanjiro Kamado resolves to become a Demon Slayer in hopes of turning his younger sister Nezuko back into a human.  Together with his comrades, Zenitsu and Inosuke, along with one of the top-ranking members of the Demon Slayer Corps, Tengen Uzui, Tanjiro embarks on a mission within the Entertainment District, where they encounter the formidable, high-ranking demons, Daki and Gyutaro.",
        "poster_path": "/o8DB5825myndApdQQHbf4bv1mzL.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            16,
            14
        ],
        "popularity": 1027.726,
        "release_date": "2023-02-03",
        "video": true,
        "vote_average": 7.245,
        "vote_count": 106
    },
    {
        "adult": false,
        "backdrop_path": "/5deKXeVmu3G8821gV8DtKHmRd6r.jpg",
        "id": 958196,
        "title": "Inside",
        "original_language": "en",
        "original_title": "Inside",
        "overview": "An art thief becomes trapped in a New York penthouse after his heist goes awry. Imprisoned with nothing but priceless works of art, he must use all his cunning and invention to survive.",
        "poster_path": "/dXsiWJWwGwYwOQ6DfYFt5pPBMwT.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            53
        ],
        "popularity": 348.011,
        "release_date": "2023-03-09",
        "video": false,
        "vote_average": 5.978,
        "vote_count": 67
    },
    {
        "adult": false,
        "backdrop_path": "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
        "id": 804150,
        "title": "Cocaine Bear",
        "original_language": "en",
        "original_title": "Cocaine Bear",
        "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
        "poster_path": "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
        "media_type": "movie",
        "genre_ids": [
            53,
            35,
            80
        ],
        "popularity": 2021.482,
        "release_date": "2023-02-22",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 783
    }
]

bannerResult = [
  {
      "adult": false,
      "backdrop_path": "/ytdebEE0ndYLSTEctPgh8e0vaBs.jpg",
      "id": 76600,
      "title": "Avatar: The Way of Water",
      "original_language": "en",
      "original_title": "Avatar: The Way of Water",
      "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      "media_type": "movie",
      "genre_ids": [
          878,
          12,
          28
      ],
      "popularity": 5957.435,
      "release_date": "2022-12-14",
      "video": false,
      "vote_average": 7.732,
      "vote_count": 7173
  },
  {
      "adult": false,
      "backdrop_path": "/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",
      "id": 594767,
      "title": "Shazam! Fury of the Gods",
      "original_language": "en",
      "original_title": "Shazam! Fury of the Gods",
      "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
      "poster_path": "/3GrRgt6CiLIUXUtoktcv1g2iwT5.jpg",
      "media_type": "movie",
      "genre_ids": [
          28,
          35,
          14
      ],
      "popularity": 9435.399,
      "release_date": "2023-03-15",
      "video": false,
      "vote_average": 6.968,
      "vote_count": 898
  },
  {
      "adult": false,
      "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      "id": 502356,
      "title": "The Super Mario Bros. Movie",
      "original_language": "en",
      "original_title": "The Super Mario Bros. Movie",
      "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      "media_type": "movie",
      "genre_ids": [
          16,
          12,
          10751,
          14,
          35
      ],
      "popularity": 12929.143,
      "release_date": "2023-04-05",
      "video": false,
      "vote_average": 7.498,
      "vote_count": 909
  }
];


constructor(private service: MovieApiServiceService){
  this.favlist = [];
}
ngOnInit(): void{
  this.favListData();
}

favListData(){
  this.service.favApiData().subscribe(
    (result) =>
    {
      console.log(JSON.parse(result));
      this.favlist = JSON.parse(result);


    }
    ,
    error => {
      console.log(error);

    }
  )
}

}
