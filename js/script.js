//$Id$
(function($) { 
//$(alert("Hello, World!"));

$(document).ready(function() {
/*  $(".group-ref-txn-dir input.form-text,.group-ref-txn-ref input.form-text,.group-ref-txn-tech input.form-text").css({
    "background-color": "#990000",
    "color": "#FFFFFF"
  }); */
    $(".group-ref-txn-dir input.form-text,.group-ref-txn-ref input.form-text,.group-ref-txn-tech input.form-text").click(function(){
      var oldValue = $(this).val();
      if (!oldValue) {
        var oldValue = 0;
      }
   	  var newVal = parseFloat(oldValue) + 1;
   	  $(this).val(newVal);
    });
});

/*$(document).ready(function() {
 alert($('field-ref-txn-dir-person-add-more-wrapper').length + ' elements!'); 
});*/ 

})(jQuery);