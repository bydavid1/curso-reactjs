const initialState = {
  user: {},
  playing: {},
  lists: {
    mylist: [],
    trends: [
      {
        id: 2,
        slug: 'tvshow-2',
        title: 'In the Dark',
        type: 'Scripted',
        language: 'English',
        year: 2009,
        contentRating: '16+',
        duration: 164,
        cover:
          'https://cdn.pixabay.com/photo/2012/12/20/10/12/align-fingers-71282_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 3,
        slug: 'tvshow-3',
        title: 'Instinct',
        type: 'Adventure',
        language: 'English',
        year: 2002,
        contentRating: '16+',
        duration: 137,
        cover:
          'https://cdn.pixabay.com/photo/2020/11/15/22/08/person-5747420_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 4,
        slug: 'tvshow-4',
        title: 'Grand Hotel',
        type: 'Comedy',
        language: 'English',
        year: 2014,
        contentRating: '16+',
        duration: 163,
        cover:
          'https://cdn.pixabay.com/photo/2020/04/02/19/39/dog-4996559_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 5,
        slug: 'tvshow-5',
        title: 'Stargate Atlantis',
        type: 'Scripted',
        language: 'English',
        year: 2014,
        contentRating: '16+',
        duration: 194,
        cover:
          'https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 6,
        slug: 'tvshow-6',
        title: 'Final Space',
        type: 'Scripted',
        language: 'English',
        year: 2017,
        contentRating: '16+',
        duration: 124,
        cover:
          'https://cdn.pixabay.com/photo/2020/11/06/03/43/protective-suit-5716753_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 7,
        slug: 'tvshow-7',
        title: 'The InBetween',
        type: 'Drama',
        language: 'English',
        year: 2011,
        contentRating: '16+',
        duration: 179,
        cover:
          'https://cdn.pixabay.com/photo/2019/12/26/10/44/horse-4720178_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
    ],
    originals: [
      {
        id: 8,
        slug: 'tvshow-8',
        title: 'Stargate Atlantis',
        type: 'Action',
        language: 'English',
        year: 2012,
        contentRating: '16+',
        duration: 148,
        cover:
          'https://cdn.pixabay.com/photo/2011/12/14/12/11/astronaut-11080_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 9,
        slug: 'tvshow-9',
        title: 'Alien Highway',
        type: 'Action',
        language: 'English',
        year: 2019,
        contentRating: '16+',
        duration: 128,
        cover:
          'https://cdn.pixabay.com/photo/2020/10/23/09/02/mountain-5678172_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 10,
        slug: 'tvshow-10',
        title: 'Elementary',
        type: 'Animation',
        language: 'English',
        year: 2011,
        contentRating: '16+',
        duration: 346,
        cover:
          'https://cdn.pixabay.com/photo/2020/10/01/17/11/temple-5619197_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 11,
        slug: 'tvshow-11',
        title: 'Strange Angel',
        type: 'War',
        language: 'English',
        year: 2015,
        contentRating: '16+',
        duration: 226,
        cover:
          'https://cdn.pixabay.com/photo/2020/10/23/16/50/woman-5679284_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 12,
        slug: 'tvshow-12',
        title: 'Private Eyes',
        type: 'Comedy',
        language: 'English',
        year: 2018,
        contentRating: '16+',
        duration: 190,
        cover:
          'https://cdn.pixabay.com/photo/2020/04/04/17/06/street-5003132_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        id: 13,
        slug: 'tvshow-13',
        title: 'NCIS: Los Angeles',
        type: 'Drama',
        language: 'English',
        year: 2010,
        contentRating: '16+',
        duration: 160,
        cover:
          'https://cdn.pixabay.com/photo/2015/03/26/09/48/chicago-690364_960_720.jpg',
        description: 'Vestibulum ac est lacinia nisi venenatis tristique',
        source:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
    ],
  },
};

export default initialState;
