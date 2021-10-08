const list = document.getElementById("list");
const input = document.querySelector("#input");
const button = document.getElementById("button");

const inputTime = document.querySelector("#input-time");
const buttonStart = document.getElementById("button-start");

// input.addEventListener("change", function(ev) {
//     const name = ev.target
//     console.log(ev.target);
// })

const array = [];

button.addEventListener("click", function (ev) {
  array.push(input.value);
  console.log(array);
});

// list.addEventListener("click", function(ev) {
//     ev.currentTarget
//     console.log(ev.currentTarget);
// })

console.log();

buttonStart.addEventListener("click", function (ev) {
  clock.start();
});

const clock = {
  //Було скучно написав прям в консоле)) ^кнопка^
  hour: "00",
  minute: "00",
  second: "00",

  set: (hour, minute, second) => {
    clock.hour = hour;
    clock.minute = minute;
    clock.second = second;
  },

  reset: () => {
    clock.hour = "00";
    clock.minute = "00";
    clock.second = "00";
  },

  clear: () => clearInterval(clock.interval),

  interval: 0,

  start: () => {
    clock.interval = setInterval(() => {
      inputTime.value = clock.hour + ":" + clock.minute + ":" + clock.second;

      if (+clock.second >= 59) {
        clock.second = "00";
      } else {
        clock.second = +clock.second + 1;
        clock.second = "" + clock.second;
        if (clock.second.length === 1) {
          clock.second = "0" + clock.second;
        }
      }

      if (clock.second === "00") {
        if (+clock.minute >= 59) {
          clock.minute = "00";
        } else {
          clock.minute = +clock.minute + 1;
          clock.minute = "" + clock.minute;
          if (clock.minute.length === 1) {
            clock.minute = "0" + clock.minute;
          }
        }
      }

      if (clock.minute === "00" && clock.second === "00") {
        if (+clock.hour >= 23) {
          clock.hour = "00";
        } else {
          clock.hour = +clock.hour + 1;
          clock.hour = "" + clock.hour;
          if (clock.hour.length === 1) {
            clock.hour = "0" + clock.hour;
          }
        }
      }
    }, 1000);
  },
};
