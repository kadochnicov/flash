// function fetchUserData(callback) {

//     setTimeout( ()=> {
//         const data = {id: 1, name: 'Anderew'};
//         callback(data);
//     } , 3000);

// }

// function fetchUserGames (id , callback2) {

//     setTimeout(() => {
//         const games = ['game1', 'game2'];
//         callback2(games);
//     }, 3000);

// }

// function run() {
//     fetchUserData((info) => {
//         console.log(info);

//         fetchUserGames(info.id, (data)=> {
//             console.log(data);
//         })
//     });

// }

// console.log('ee')

// run()


// function run() {
//     const prom = new Promise((resolve, reject) => {
//         /// fetch
//         setTimeout(() => {
//             const data = {id : 1, nam : 'andrew'};
//             resolve(data);
//         }, 1000);

//     });

//     prom.then((userData) => {
//         console.log(userData);
//     })
// }


function run() {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            data = {id: 1, userName: 'Andrew'};
            resolve(data);
        },1500)
    })

    prom.then((userD) => {console.log(userD)})
}

run()