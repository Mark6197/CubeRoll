function RollCubes() {
    var first = Math.floor(Math.random() * 6) + 1;
    var second = Math.floor(Math.random() * 6) + 1;
    let div = document.getElementById("images");
    div.innerHTML = "";
    div.innerHTML = `<img src="/Images/Countdown.GIF" alt="Countdown" ">`
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (first != second) {

                resolve([first, second]);
            }
            else
                reject(first);
        }, 3000);
    });
}

let btn = document.getElementById("btn");
btn.onclick = () => {
    RollCubes().then(arr => {
        var text = `<li>Resloved! ${arr[0]}, ${arr[1]}</li>`;
        let list = document.getElementById("list");
        list.innerHTML += text;
        let div = document.getElementById("images");
        div.innerHTML = "";
        div.innerHTML = `<img src="/Images/Dice${arr[0]}.JPG" alt="Dice ${arr[0]}" width="100" height="100"">`
        div.innerHTML += `<img src="/Images/Dice${arr[1]}.JPG" alt="Dice ${arr[1]}" width="100" height="100"">`
    }).catch((first) => {
        var text = `<li>Rejected! ${first}</li>`;
        let list = document.getElementById("list");
        list.innerHTML += text;
        let div = document.getElementById("images");
        div.innerHTML = "";
        div.innerHTML = `<img src="/Images/Dice${first}.JPG" alt="Dice ${first}" width="100" height="100"">`
    })
}

