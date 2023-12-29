let output = document.querySelector("#output");

async function filterArr(arr) {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr.filter((el) => el % 2 !== 0));
    }, 1000);
  });

  const data = await p1;

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data.map((element) => {
          return element * 2;
        })
      );
    }, 2000);
  });

  const final = await p2;
  output.innerHTML = final;
}