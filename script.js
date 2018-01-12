document.addEventListener("DOMContentLoaded", function() {
  let body = document.body;

  let button = document.createElement("button");
  let buttonText = document.createTextNode("Add Square!");
  let container = document.createElement("header");
  button.appendChild(buttonText);
  body.appendChild(button);
  button.style.display = "block";
  body.appendChild(container);

  button.addEventListener("click", function() {
    let div = document.createElement("div");
    let boxCounter = document.getElementsByClassName("box").length;
    div.id = boxCounter;
    div.className = "box";

    div.addEventListener("mouseover", function() {
      document.getElementById(boxCounter).innerHTML = boxCounter;
    });
    div.addEventListener("mouseout", function() {
      document.getElementById(boxCounter).innerHTML = "";
    });

    container.appendChild(div);

    let colors = [
      "red",
      "yellow",
      "blue",
      "orange",
      "green",
      "brown",
      "purple",
      "grey",
      "black",
      "pink"
    ];

    div.onclick = function() {
      let rand = colors[Math.floor(Math.random() * colors.length)];
      div.style.backgroundColor = rand;
    };

    div.ondblclick = function() {
      if (div.id % 2 === 0) {
        if (div.nextSibling == null) {
          alert("There is no square to be deleted!");
        } else {
          div.nextSibling.remove();
          alert("The square to the right has been deleted!");
        }
      } else {
        if (div.previousSibling == null) {
          alert("There is no square to be deleted!");
        } else {
          div.previousSibling.remove();
          alert("The square to the left has been deleted!");
        }
      }
    };
  });
});
