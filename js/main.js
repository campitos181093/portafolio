(function($) {

	"use strict";	

  
    $('.navigation').singlePageNav({
        currentClass : 'active'
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });

    // Get the modal
	var modalDryve = document.getElementById("modalDryve");
	var modalFILEY = document.getElementById("modalFILEY");

	// Get the button that opens the modal
	var btnDryve = document.getElementById("btnDryve");
	var btnFILEY = document.getElementById("btnFILEY");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btnDryve.onclick = function() {
	  modalDryve.style.display = "block";
	}
	btnFILEY.onclick = function() {
	  modalFILEY.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modalDryve.style.display = "none";
	  modalFILEY.style.display = "none";

	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modalDryve) {
	    modalDryve.style.display = "none";
	  }
	  if (event.target == modalFILEY) {
	    modalFILEY.style.display = "none";
	  }
	}



})(jQuery);






