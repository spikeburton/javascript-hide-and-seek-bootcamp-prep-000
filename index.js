function getFirstSelector(sel) {
  return document.querySelector(sel);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll("ul.ranked-list li");

  for(let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild() {
  var cur = document.querySelector('#grand-node');
  var next = [];

  for(let i = 0; i < cur.length; i++) {
    if(!cur[0].hasChildNodes()) {
      return cur[i];
    }
  }
}
