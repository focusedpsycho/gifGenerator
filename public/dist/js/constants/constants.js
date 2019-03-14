angular.module('emotionGIFGenerator')
.constant('config', {
    appName: 'emotionGIFGenerator',
    appVersion: 1.0,
    giphyBaseUrl:"https://api.giphy.com/v1/gifs/search",
    apiKey: 'CpnjeLOGKnDfxJFh9zRolOJ8utKnpkOG'
})

.constant('categories',{
    allCategories: [ "angry",
    "bored",
    "disappointed",
    "drunk",
    "embarrassed",
    "excited",
    "frustrated",
    "happy",
    "hungry",
    "inspired",
    "lonely",
    "love",
    "nervous",
    "pain",
    "reaction",
    "relaxed",
    "sad",
    "sassy",
    "scared",
    "shocked",
    "sick",
    "stressed",
    "surprised",
    "suspicious",
    "tired",
    "unimpressed"
        ],
    limit: 4
    
})