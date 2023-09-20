
let a = /* document.getElementById('count').innerHTML = */ localStorage.getItem('name');
if (a == null) {
 let count = 0;
        document.getElementById('count').innerHTML = count;
        localStorage.setItem('name', JSON.stringify(count));
document.getElementById('increaseBtn').onclick = function() {
    /*  let click = document.getElementById('click').play(); */
    count += 1;
    document.getElementById('count').innerHTML = count;
    localStorage.setItem('name', JSON.stringify(count));
  }
  document.getElementById('resetBtn').onclick = function() {

    let reset = confirm("Click ok to reset");
    if (reset) {
      count = 0;
      document.getElementById('count').innerHTML = count;
      localStorage.setItem('name', JSON.stringify(count))
    }
    else {
      localStorage.getItem('name');
    }
  
}
  
  
}

else {
  let count = parseInt(a);
  document.getElementById('increaseBtn').onclick = function() {
    /*  let click = document.getElementById('click').play(); */
    count += 1;
    document.getElementById('count').innerHTML = count;
    localStorage.setItem('name', JSON.stringify(count));
  }
  document.getElementById('resetBtn').onclick = function() {

    let reset = confirm("Click ok to reset");
    if (reset) {
      count = 0;
      document.getElementById('count').innerHTML = count;
      localStorage.setItem('name', JSON.stringify(count))
    }
    else {
      localStorage.getItem('name');
    }
  
}}
