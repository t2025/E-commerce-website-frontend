
$(document).ready(function(){
  $.ajax({
    url:"http://acadprojects.com/py/fabricKart/sort/items",
    type: 'GET',
    data: {
      "sort_by": "relevance",
      "page": 0,
    },
    success:function(response){
      console.log(response);
      var data=response["data"];
      data.forEach(function(product,index){
        var element="<div class='product-container col-md-4 col-xs-12'></div>";
        var thing="<div class='purchasing-item>'</div>";
        var productDiv=$("<div class='productcontainer'></div>").text(product["item_name"]);
        var img=$("<img>").attr("src",product["image"]);
        var brandName=$("<div class='brand-name'></div>").text(product["brand"]);
      var desc=$("<div class='des'></div>").text(product["description"]);
        var costDiv=$("<div class='cost'></div>").text(product["price"]);
        var sellerDiv=$("<div class='seller'></div>").text(product["sold_by"]);
        var quantity=$("<div class='number'></div>").text(product["quantity"]);
        var icon=$("<div class='icon'><i class='fa fa-shopping-cart fa' aria-hidden='true'></i> </div>");

        element=$(element).append(img,productDiv,brandName,desc,costDiv,sellerDiv,quantity,icon);


        $('.product').append(element);
        $(".productcontainer").click(function() {
          var productName=$($(this).parent().find(".productcontainer")).text();
          console.log(productName);
          var imageSource=$($(this).parent().find("img")).attr("src");
          console.log(imageSource);
          var brandName=$($(this).parent().find(".brand-name")).text();
          var desr=$($(this).parent().find(".des")).text();
          var price=$($(this).parent().find(".cost")).text();
            var sell=$($(this).parent().find(".seller")).text();
              var num=$($(this).parent().find(".number")).text();
          localStorage.setItem("productName",productName);
          localStorage.setItem("image",imageSource);

          localStorage.setItem("brandname",brandName);
          localStorage.setItem("description",desr);
          localStorage.setItem("pcost",price);
          localStorage.setItem("soldby",sell);
          localStorage.setItem("quantity",num);
          window.location.href="product.html";



        });






  });
  $(".icon").click(function(){
    var productName=$($(this).parent().find(".productcontainer")).text();
        var price=$($(this).parent().find(".cost")).text();
          var num=$($(this).parent().find(".number")).text();

    var list="<li></li>";
    var costlist="<li></li>";
    var numlist="<li></li>";
    list=$(list).append(productName);
    costlist=$(costlist).append(price);
    numlist=$(numlist).append(num);
    $("#product-list").append(list);
    $("#cost-list").append(costlist);
    $("#quant-list").append(numlist);
alert('Item has been added to cart');
  });




}
});
$.ajax({
  url: "http://acadprojects.com/py/fabricKart/sell",
  type:'POST',
  data: {

  }

});
$.ajax({
  url: "http://acadprojects.com/py/fabricKart/checkout",
  type:'PUT',
  data: {

  }

});

});
