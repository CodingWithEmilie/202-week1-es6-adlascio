//Print only items (emojis) in the console. Not the arrays.

const printItems = function (array) {
  for(const el of array){
    if(Array.isArray(el)){
      printItems(el);
    }
    console.log(el);
  }
};

const array = ["😎", "💩", "🤗", "😼", "😂"];
printItems(array);

const array2 = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array2);

const array3 = [
  "😎",
  [
    ["💩", ["🤗"]],
    [[["😼"]], "😂"],
  ],
];
printItems(array3);