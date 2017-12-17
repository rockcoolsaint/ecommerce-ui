$(document).ready(function() {
	//alert($("#cart-total").html());
	var cart = [];
	var cartTotalItems = $("#cart-total").html();
	$(".glyphicon-plus-sign").on('click', function() {
		var count = 0;

		var index = $(".glyphicon-plus-sign").index(this);

		var clickedPdt = $(this).parents().find(".add-to-cart").siblings(".caption").find(".pdt-name")[index].innerText;
		
		for (var i in cart) {
			if(clickedPdt === cart[i]) {
				count++;
			}
		}

		if (count == 0) {
			cart.push(clickedPdt);
			console.log(cart);
			$("#cart-total").html(++cartTotalItems);
			$("ul#cart-dropdown-menu").append("<li><span class='clicked'>" 
				+ clickedPdt + 
				"</span><span class='glyphicon glyphicon-remove pull-right'></span><input class='pull-right' type='number' min='0' value='1' step='1' width='5px' onkeydown='return false' /></li><li role='separator' class='divider'></li>");
		}else{
			alert('already in your cart');
		}
	});

	$("span.glyphicon.glyphicon-remove").on('click', function() {
		//var removedPdt = $("#cart-dropdown-menu span.glyphicon-remove").parents();
		console.log('remove');
	});

	$("li span.clicked").on('click', function() {
		//var removedPdt = $("#cart-dropdown-menu span.glyphicon-remove").parents();
		console.log('remove');
	});
});