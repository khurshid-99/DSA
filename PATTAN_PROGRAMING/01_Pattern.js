const prompt = require("prompt-sync")();

function P01() {
  const num = Number(prompt("Enter your Number : "));
  for (let i = 0; i <= num; i++) {
    process.stdout.write("* ");
  }
}
// P01();

function p02() {
  const num = Number(prompt("Enter a number : "));

  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
// p02();

function p3(params) {
  const num = Number(prompt("Enter a number : "));
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`*${j} `);
    }
    console.log();
  }
}
// p3()
function p4(params) {
  const num = Number(prompt("Enter a Number : "));
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i + 1; j++) {
      process.stdout.write(`* `);
    }
    console.log();
  }
}
// p4();

function p5() {
  const num = Number(prompt("Enter a Number : "));
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write(`@ `);
    }
    console.log();
  }
}
// p5();
function p6() {
  const num = Number(prompt("Enter a Number : "));

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i - 1; j++) {
      process.stdout.write(` `);
    }
    for (let k = 1; k <= num - i + 1; k++) {
      process.stdout.write(`@ `);
    }
    console.log();
  }
}
// p6();

function p7(params) {
  const num = Number(prompt("Enter a Number : "));

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`  `);
    }
    for (let k = 1; k <= num - i + 1; k++) {
      process.stdout.write(`@ `);
    }
    console.log();
  }
}

// p7();

function p8(params) {
  const num = Number(prompt("Enter a Number : "));

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i + 1; j++) {
      process.stdout.write(`  `);
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write(`@ `);
    }
    console.log();
  }
}
// p8();

function p9(params) {
  const num = Number(prompt("Enter your number : "));
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i == j || i + j == num + 1) {
        process.stdout.write(`* `);
      } else {
        process.stdout.write("  ");
      }
    }
    console.log("");
  }
}
// p9();

function p10(params) {
  const num = Number(prompt("Enter your number : "));
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= 2 * num - 1; j++) {
      if (i == j || j == 2 * num - i) {
        process.stdout.write("* ");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log("");
  }
}
// p10();
function p11(params) {
  const num = Number(prompt("Enter your number : "));
  for (let i = 1; i <= num; i++) {
    process.stdout.write("* ")
    for (let j = 1; j <= num; j++) {
      if () {
        process.stdout.write("* ");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log("");
  }
}
p11();

