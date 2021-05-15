let p1Score = 0;
let p2Score = 0;
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let r = document.querySelector('#reset');
let scoreBoard = document.querySelector('span');
let slt = document.querySelector('select');
let maxScore = slt.value;
let ms = parseInt(maxScore);

slt.addEventListener('click', function () {
    maxScore = slt.value;
    ms = parseInt(maxScore);
})

b1.addEventListener('click', function () {
    if (p1Score < ms) {
        p1Score++;
        scoreBoard.innerHTML = `${p1Score} to ${p2Score}`;
    }

    if (p1Score === ms) {
        b1.disabled = true;
        b2.disabled = true;
        console.log('p1wins');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span')
        span1.append(`${p1Score}`);
        span1.style.color = '#06d6a0';
        span2.append(`${p2Score}`);
        span2.style.color = '#ef476f';
        scoreBoard.innerHTML = '';
        scoreBoard.append(span1);
        scoreBoard.append(` to `);
        scoreBoard.append(span2);
    }
});

b2.addEventListener('click', function () {
    if (p2Score < ms) {
        p2Score++;
        scoreBoard.innerHTML = `${p1Score} to ${p2Score}`;
    }

    if (p2Score === ms) {
        b1.disabled = true;
        b2.disabled = true;
        console.log('p2wins');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span')
        span1.append(`${p1Score}`);
        span1.style.color = '#ef476f';
        span2.append(`${p2Score}`);
        span2.style.color = '#06d6a0';
        scoreBoard.innerHTML = '';
        scoreBoard.append(span1);
        scoreBoard.append(` to `);
        scoreBoard.append(span2);
    }
});

r.addEventListener('click', function () {
    p1Score = 0;
    p2Score = 0;
    scoreBoard.innerHTML = `${p1Score} to ${p2Score}`;
    b1.disabled = false;
    b2.disabled = false;
});
