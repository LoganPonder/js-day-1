//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
    // let arr = str.split(' ');
    // return arr[0] + arr[1][0].toUpperCase() + arr[1].slice(1) + arr[2];

    let final = [];
    for (let char of str) {
      if (char === "n") final.push(char.toUpperCase());
      else if (char === " ");
      else final.push(char);
    }
    return final.join("");
}
