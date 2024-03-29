// modal window
(function() {

  'use strict';

  // list out the vars
  var modalOverlay = getId('modal_window'),
  modalOpen = getId('modal_open'),
  modalClose = getId('modal_close'),
  modalHolder = getId('modal_holder'),
  allNodes = document.querySelectorAll("*"),
  modalIsOpen = false,
  lastFocus,
  c;


  // Let's cut down on what we need to type to get an ID
  function getId ( id ) {
    return document.getElementById(id);
  }


  // Let's open the modal
  function showModal () {
    lastFocus = document.activeElement;
    modalOverlay.setAttribute('aria-hidden', 'false');
    modalIsOpen = true;
    modalHolder.setAttribute('tabindex', '0');
    modalHolder.focus();
  }


  // binds to both the button click and the escape key to close the modal window
  // but only if modalOpen is set to true
  function closeModal ( event ) {
    if (modalIsOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
      modalOverlay.setAttribute('aria-hidden', 'true');
      modalHolder.setAttribute('tabindex', '-1');
      modalIsOpen = false;
      lastFocus.focus();
    }
  }


  // Restrict focus to the modal window when it's open.
  // Tabbing will just loop through the whole modal.
  // Shift + Tab will allow backup to the top of the modal,
  // and then stop.
  function focusRestrict ( event ) {
    if ( modalIsOpen && !modalHolder.contains( event.target ) ) {
      event.stopPropagation();
      modalHolder.focus();
    }
  }


  // Close modal window by clicking on the overlay
  modalOverlay.addEventListener('click', function( e ) {
    if (e.target == modalHolder.parentNode) {
       closeModal( e );
     }
  }, false);


  // open modal by btn click/hit
  modalOpen.addEventListener('click', showModal);

  // close modal by btn click/hit
  modalClose.addEventListener('click', closeModal);

  // close modal by keydown, but only if modal is open
  document.addEventListener('keydown', closeModal);

  // restrict tab focus on elements only inside modal window
  for (c = 0; c < allNodes.length; c++) {
    allNodes.item(c).addEventListener('focus', focusRestrict);
  }

})();
