// let body = document.querySelector("body");

// function createLoading (){
//     let loading = document.createElement('div');
//     loading.id = 'load';
//     loading.innerText = 'Loading...'

//     body.append(loading);
// }

// function fetchGames(){
//     return new Promise ( (resolve, reject)=> {
//         setTimeout(()=>{
//              const userGames = [
//                 {id: 1, gameName: 'Spiider Man'},
//                 {id: 2, gameName: 'Hidden City'},
//                 {id: 3, gameName: 'Fortnight'}
//             ]

//             if(Array.isArray(userGames)){
//                 resolve(userGames)
//             } else {
//                 reject('thomsing go wrong!!!')
//             }
           
//         },2000)
//     } )
// }

// function rendreGames(userGames  ){
//     userGames.forEach(el => {
//         const block = document.createElement('div');
//         block.innerText = `games name is ${el.gameName}`;
//         block.classList.add('block');
//         body.append(block);
//     });
// }

// createLoading()

// fetchGames()
//     .then((gameList)=>{
//         rendreGames(gameList);
//     })
//     .catch((txt)=>{
//         alert(txt)
//     })
//     .finally(()=>{
//         document.querySelector('#load').remove();
//     })

function getVideo() {
    return new Promise( (resolve, reject)=> {
        setTimeout( ()=>{
            resolve('videos are loaded')
        }, 1000 )
    } )
}

function getShorts() {
    return new Promise( (resolve, reject)=> {
        setTimeout( ()=>{
            resolve('shorts are loaded')
        }, 2000 )
    } )
}

Promise.all([getVideo(), getShorts()])
    .then( (data)=> {
        console.log(data);
    } ) 