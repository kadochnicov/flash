// function fetchuserData() {
//     return my_promise = new Promise( (resolve, reject) => {
//         setTimeout(() => {
//           let userData = {id: 1, userName: 'Andrew'};
//           resolve(userData);
//         }, 1500)
//     } )
// }

// function fetchuserGames(id) {
//     return promis_user_games = new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             let userGames = ['game1', 'game2'];
//             resolve(userGames);
//         }, 2000 )
//     } )
// }

// let gamesForShow = undefined;

// fetchuserData()
//     .then((userId) => {
//         //console.log(userId);
//         return fetchuserGames(userId)
//     })
//     .then((userGames) => {
//         gamesForShow = userGames;
//         console.log(gamesForShow);
//     })

// console.log('is it start?');
// console.log(gamesForShow);

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>response.json())
    .then(r => console.log(r) )

