// helper function to place modal window as the first child
// of the #page node
function initialiseModal(obj){
  var modalid = 'modal_window' , pageid = 'page';
  
  var m = document.getElementById(modalid),
      p = document.getElementById(pageid);

}

function swap () {
  p.parentNode.insertBefore(m, p);
}

swap();

