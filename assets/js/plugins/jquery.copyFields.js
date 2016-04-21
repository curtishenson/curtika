// Requires a checkbox with data-copy-fields attribute
// and shipping fields to match billing fields preceded by "shipping_"

// <form>
//   <fieldset id="billing_info">
//      <legend>Billing Information</legend>
//
//     <label for="name">Your Name</label>
//     <input type="text" name="name" id="name" value="">
//
//     <label for="email">Email</label>
//     <input type="email" name="email" id="email" value="">
//   </fieldset>
//
//   <fieldset>
//     <legend>Shipping Information</legend>
//
//     <label class="whole">
//       <input data-copy-fields="#billing_info" type="checkbox">
//     </label>
//
//     <label for="shipping_name">Name</label>
//     <input type="text" name="shipping_name" id="shipping_name" value="">
//
//     <label for="shipping_company">Company</label>
//     <input type="text" name="shipping_email" id="shipping_company" value="">
//
//  </form>


;(function( $ ) {

    $.fn.copyFields = function()
    {
      var source = $(this).data('copyFields'),
          target = $(this).parents('fieldset');

      $(":input", source).each(function() {
  			var value = $(this).val(),
  					name = $(this).attr('name');

  			$(target).find("[name=shipping_"+name+"]").val(value).change();
  		})

      return this;
    }

    //
    // Data API
    //
    $(document).ready(function () {
      $('[data-copy-fields]').change(function () {
        $(this).copyFields()
      })
    })

})( jQuery );
