// iteration method

function powA (x, n) {
    let rez = x;

    for (let i = 1; i < n ; i++) {
        rez *= x;
    }

    console.log(rez)
}

powA(2,4)