export const posts = [
    {
        id: '1708632465282150796',
        type: 'poll',
        content: `PROTOTURK'un paylaştığı videoları seviyor musunuz?
Bu anket ders esnasında sorulmuştur.`,
        photos: [
            'https://pbs.twimg.com/media/F7VBIvaW0AIZyiX?format=jpg&name=large'
        ],
        account: {
            avatar: 'data:image/png;base64,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',
            username: 'prototurkcom',
            fullName: './prototurk'
        },
        stats: {
            comments: 43535,
            repost: 3434,
            like: 96946,
            view: 903453
        }
    },
    {
        id: '1708632465282150796',
        type: 'photo',
        content: `Toplu günaydın, ben her sabah spora devam ama her gün post atmıyorum artık, max 4 günde bir atarım çünkü en fazla 4 foto paylaşılıyormuş 🤣`,
        photos: [
            'https://pbs.twimg.com/media/F7VBIvaW0AIZyiX?format=jpg&name=large'
        ],
        account: {
            avatar: 'https://avatars.githubusercontent.com/u/2500557?v=4',
            username: 'tayfunerbilen',
            fullName: 'Tayfun Erbilen'
        },
        stats: {
            comments: 43535,
            repost: 3434,
            like: 96946,
            view: 903453
        }
    },
    {
        id: '1708632465282150796',
        type: 'photo',
        content: `Imagination Land!`,
        photos: [
            'https://pbs.twimg.com/media/F7ZIK8KWgAAP8pH?format=jpg&name=900x900',
            'https://pbs.twimg.com/media/F7VBIvZXEAAIpEM?format=jpg&name=large'
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
            username: 'elonmusk',
            fullName: 'Elon Musk',
            verified: true
        },
        stats: {
            comments: 6573535,
            repost: 343434,
            like: 366946,
            view: 23453453
        }
    },
    {
        id: '1708704613141270652',
        content: `Less than a week since OpenAI started rolling out ChatGPT vision.

And people have been busy executing god-like tasks.

35 truly mind-boggling examples:

(29th is my favorite)`,
        photos: [
            'https://pbs.twimg.com/media/F7VBIvaW0AIZyiX?format=jpg&name=large'
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1696215555148046336/xCMn27ZY_400x400.jpg',
            username: 'sairahul1',
            fullName: 'Sai Rahul',
            verified: true
        },
        stats: {
            comments: 25,
            repost: 12,
            like: 99,
            view: 2341
        }
    },
    {
        id: '1708810187170087410',
        type: 'photo',
        content: `İstanbul'da Cumhuriyet'in 100. yılına özel, 100 gün boyunca Yerebatan Sarnıcı, Şerefiye Sarnıcı, Miniatürk ve Panorama 1453 Tarih Müzesi ücretsiz ziyaret edilebilecek.`,
        photos: [
            'https://pbs.twimg.com/media/F7bpqaKXkAAopDd?format=jpg&name=900x900',
            'https://pbs.twimg.com/media/F7bptMoXYAA7TpB?format=jpg&name=900x900',
            'https://pbs.twimg.com/media/F8tfk2JWwAAlY3f?format=jpg&name=large'
        ],
        account: {
            avatar: 'https://pbs.twimg.com/profile_images/1707827931895017472/1-bUbTT3_400x400.jpg',
            username: 'Darkwebhaber',
            fullName: 'DarkWeb Haber'
        },
        stats: {
            comments: 234234,
            repost: 2324,
            like: 1134124,
            view: 111144
        }
    },
    {
        id: '1708707876628476134',
        type: 'photo',
        content: `OpenAI's latest DALL-E 3 model is officially available free to try on Bing.

The quality is insane, comparable to Midjourney.

This prompt is going viral- mimicking a creepy iPhone capture that looks insanely realistic.

Prompt in ALT tag + more examples in thread:`,
        photos: [
            'https://pbs.twimg.com/media/F7aKxHhaAAAnHlS?format=jpg&name=large',
            'https://pbs.twimg.com/media/F7VBIvaW0AAyXEr?format=jpg&name=large',
            'https://pbs.twimg.com/media/F7VBIvaWAAAWUsx?format=jpg&name=large',
            'https://pbs.twimg.com/media/F7VBIvaWAAAWUsx?format=jpg&name=large',
        ],
        account: {
            avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBgcEBf/EADAQAAEDAgUCBAMJAAAAAAAAAAEAAgMEEQUGEiExQVETFDKRByJxFRYkUmKBobHR/8QAGQEAAwADAAAAAAAAAAAAAAAAAAIEAQMF/8QAHREAAgMAAwEBAAAAAAAAAAAAAAECAxEEEiExE//aAAwDAQACEQMRAD8AxEBOASgJ4CACOHXubhveyc6Fg5I91d8kZFdj8Pm6yV0dGHWaGcvPX9laqv4T4Q5znMqamK/ADgbe6ms5VdbxlUOLZOOoxlzbcJhCtebMoy5dljHmPGgl1aHabHboVWC1bq7I2R7RfhoshKuXWX0iIQnEITiEjQpGjvsE1qlagDaqOlxrDsrYUMEe4sjg+cwxsJe653+a/K6sTxjMTcLpzTwAVL2uL3CIOJt0DSbbpPh3ihfkyjmmNmwh0Lrm/pJAPsj7wB+IMbNUUop4dQaGAlziSuTdqk1nw7VEVKCZXsxUmLYlltzsXiZHL4zRA90ei173uAT0WVPbYkLVc9Zhl+w5oGg/iJ2sab+gAOuVlpGys4sWoerCDmSi54vWiBwQnuCFUSCBSNNgmxRufuBYdyugRhg23PdAGh5EqJ6LCK+ga4Olc6KoELja2pu9u3AXNieOtZI5seHz+O78ziQPp2VMpMWqqGt822TU9rQ0hx9Q2Flb8UxllLhcNe5oEs7AYY3WuSev0Cktrffc3S+m1fn1TzDycxzSVVLCJNp6ca5mDhjX7D+v5VcKBPUT1Es0kjryuu+x9VuFK5jX/pPcf4qYrFhHN9nqOVyVOljczdw2PBHCRMIdBeml1+EqEARuF+UzwwdJI3A5QhAEgFgnXslQsDCeJYHix5B6oQhZMH//2Q==',
            username: 'rowancheung',
            fullName: 'Rowan Cheung',
            verified: true
        },
        stats: {
            comments: 99999,
            repost: 999999,
            like: 999999,
            view: 99999999
        }
    }
]