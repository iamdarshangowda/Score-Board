/* Home Functionality */
let hbtn = document.querySelectorAll(".btnh");
let hscore = document.getElementById("hscore");

for (let i = 0; i < hbtn.length; i++) {
  hbtn[i].addEventListener("click", function () {
    hscore.innerHTML = Number(hscore.innerHTML) + Number(hbtn[i].value);
    checkLeading();
  });
}

/* Guest Functionality */

let gbtn = document.querySelectorAll(".btng");
let gscore = document.getElementById("gscore");

for (let i = 0; i < gbtn.length; i++) {
  gbtn[i].addEventListener("click", function () {
    gscore.innerHTML = Number(gscore.innerHTML) + Number(gbtn[i].value);
    checkLeading();
  });
}

/* check leading team */
let home = document.getElementById("home");
let guest = document.getElementById("guest");

function checkLeading() {
  if (Number(gscore.innerHTML) > Number(hscore.innerHTML)) {
    guest.style.color = "green";
  } else {
    guest.style.color = "white";
  }

  if (Number(hscore.innerHTML) > Number(gscore.innerHTML)) {
    home.style.color = "green";
  } else {
    home.style.color = "white";
  }
}

/* new game */
let newgame = document.getElementById("ngbtn");

newgame.addEventListener("click", function () {
  hscore.innerHTML = 0;
  gscore.innerHTML = 0;
  guest.style.color = "white";
  home.style.color = "white";
  localStorage.setItem("list", JSON.stringify([]));
  ol.textContent = "";
});

/* Save Game */

let save = document.getElementById("savebtn");

let ol = document.getElementById("ol");
localStorage.setItem("list", JSON.stringify([]));

save.addEventListener("click", function () {
  let list = JSON.parse(localStorage.getItem("list"));
  let game = {
    home: hscore.innerHTML,
    guest: gscore.innerHTML,
  };
  list.push(game);
  localStorage.setItem("list", JSON.stringify(list));
  list.map((score) => {
    let li = document.createElement("li");
    li.innerHTML = `Home: ${score.home} Guest: ${score.guest}`;
    ol.replaceChildren(li);
  });
});
