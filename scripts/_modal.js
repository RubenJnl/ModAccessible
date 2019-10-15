// helper function to place modal window as the first child
// of the #page node
var modal = {
  settings : { 
      modalid : 'modal_window',
      pageid : 'page'
  },
  objects : {
      m : '',
      p : ''
  }
}

function initialiseModal(obj){
  // if (obj !== 'undefined'){
  //   modal.settings.modalid = obj.modalid,
  //   modal.settings.pageid = obj.pageid;
  // }

  modal.objects.m = document.getElementById(modal.settings.modalid);
  modal.objects.p = document.getElementById(modal.settings.pageid);
  
  swap();

}

function swap () {
  modal.objects.p.parentNode.insertBefore(modal.objects.m , modal.objects.p);
}
