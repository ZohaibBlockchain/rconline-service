import express from 'express';
const app = express();
import cors from 'cors';
import getMeta from './lib.js';



app.use(cors());
app.use(express.json());
const allowedOrigin = '127.0.0.1';
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


process.on('uncaughtException', function (err) {
    console.log(err.message);
});

process.on('TypeError', function (err) {
    Errorlogger(err.message);
});

// Routes
app.get('/', (req, res) => {

    const items = [
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
        {
            name: 'TEST APP',
            thumbnail: 'https://handy-games.com/wp-content/uploads/2019/09/ENDLING_FeaturedImage_NEW_500x403.jpg',
            arrImgs: ['', ''],
            description: 'Test App description',
            appLink: 'Applink',
            genre: ['RPG', 'ARCADE', 'Role-Playing'],
            Ctype: 'GBA',
        },
    ];

    const jsonString = JSON.stringify(items);
    console.log(jsonString);

    res.status(200).send('Welcome to the retro online service');
});


app.get('/api/v1/getmeta', async (req, res) => {

    res.status(200).send(await getMeta());
});