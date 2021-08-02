document.addEventListener("keypress", function (event) {
    sound(event.key);
});

function buttonAnimation(currentKey) {
    let action = document
        .querySelector("." + currentKey);
    action
        .classList.add("pressed");
}

let beeps
beeps = document.querySelectorAll(".beep").length;

for (let j = 0;
     j < beeps;
     j++) {
    document.querySelectorAll(".beep")[j]
        .addEventListener("click", function() {
        const beep = this.innerHTML;
        sound(beep);
    });
}

function sound(beep) {
    switch (beep) {
        case "q":
            const beep1 = new Audio("buttons/beep1.wav");
            beep1.play().then(() => {});
            return;
        case "w":
            const beep2 = new Audio("buttons/beep2.wav");
            beep2.play().then(() => {});
            return;
        case "e":
            const beep3 = new Audio("buttons/beep3.wav");
            beep3.play().then(() => {});
            return;
        case "r":
            const beep4 = new Audio("buttons/beep4.wav");
            beep4.play().then(() => {});
            return;
        case "t":
            const beep5 = new Audio("buttons/beep5.wav");
            beep5.play().then(() => {});
            return;
        case "y":
            const beep6 = new Audio("buttons/beep6.wav");
            beep6.play().then(() => {});
            return;
        case "u":
            const beep7 = new Audio("buttons/beep7.wav");
            beep7.play().then(() => {});
            return;
        case "i":
            const beep8 = new Audio("buttons/beep8.wav");
            beep8.play().then(() => {});
            return;
        case "o":
            const beep9 = new Audio("buttons/beep9.wav");
            beep9.play().then(() => {});
            return;
        case "p":
            const beep10 = new Audio("buttons/beep10.wav");
            beep10.play().then(() => {});
            return;
        case "a":
            const beep11 = new Audio("buttons/beep11.wav");
            beep11.play().then(() => {});
            return;
        case "s":
            const beep12 = new Audio("buttons/beep12.wav");
            beep12.play().then(() => {});
            return;
        case "d":
            const beep13 = new Audio("buttons/beep13.wav");
            beep13.play().then(() => {});
            return;
        case "f":
            const beep14 = new Audio("buttons/beep14.wav");
            beep14.play().then(() => {});
            return;
        case "g":
            const beep15 = new Audio("buttons/beep15.wav");
            beep15.play().then(() => {});
            return;
        case "h":
            const beep16 = new Audio("buttons/beep16.wav");
            beep16.play().then(() => {});
            return;
        case "j":
            const beep17 = new Audio("buttons/beep17.wav");
            beep17.play().then(() => {});
            return;
        case "k":
            const beep18 = new Audio("buttons/beep18.wav");
            beep18.play().then(() => {});
            return;
        case "l":
            const beep19 = new Audio("buttons/beep19.wav");
            beep19.play().then(() => {});
            return;
        case "z":
            const beep20 = new Audio("buttons/beep20.wav");
            beep20.play().then(() => {});
            return;
        case "x":
            const beep21 = new Audio("buttons/beep21.wav");
            beep21.play().then(() => {});
            return;
        case "c":
            const beep22 = new Audio("buttons/beep22.wav");
            beep22.play().then(() => {});
            return;
        case "v":
            const beep23 = new Audio("buttons/beep23.wav");
            beep23.play().then(() => {});
            return;
        case "b":
            const beep24 = new Audio("buttons/beep24.wav");
            beep24.play().then(() => {});
            return;
        case "n":
            const beep25 = new Audio("buttons/beep25.wav");
            beep25.play().then(() => {});
            return;
        case "m":
            const beep26 = new Audio("buttons/beep26.wav");
            beep26.play().then(() => {});
            return;

        default:
            const boop = new Audio("buttons/boop.wav");
            boop.play().then(() => {});
    }
}
