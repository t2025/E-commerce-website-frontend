
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
        var productDiv=$("<div class='productcontainer'></div>").text(product["item_name"]);
        var img=$("<img>").attr("src",product["image"]);
        var brandName=$("<div class='brand-name'></div>").text(product["brand"]);
        var icon=  "<div class='icon'><i class='fa fa-shopping-cart' aria-hidden='true'></i></div>"
        var desc=$("<div class='des'></div>").text(product["description"]);
        var costDiv=$("<div class='cost'></div>").text(product["price"]);
        var sellerDiv=$("<div class='seller'></div>").text(product["sold_by"]);
        var quantity=$("<div class='number'></div>").text(product["quantity"]);


        element=$(element).append(img,productDiv,brandName,icon,desc,costDiv,sellerDiv,quantity);
        $('.product').append(element);
        $(".productcontainer").click(function() {
          var productName=$($(this).find(".productcontainer")).text();
          console.log(productName);
          var imageSource=$($(this).find("img")).attr("src");
          console.log(imageSource);
          var brandName=$($(this).find(".brand-name")).text();
          var desr=$($(this).find(".des")).text();
          var price=$($(this).find(".cost")).text();
            var sell=$($(this).find(".seller")).text();
              var num=$($(this).find(".number")).text();
          localStorage.setItem("productName",productName);
          localStorage.setItem("image",imageSource);

          localStorage.setItem("brandname",brandName);
          localStorage.setItem("description",desr);
          localStorage.setItem("pcost",price);
          localStorage.setItem("soldby",sell);
          localStorage.setItem("quantity",num);
          window.location.href="product.html";

        $(".icon").click(function() {
            var productName=$($(this).find(".productcontainer")).text();
            console.log(productName);
            var num=$($(this).find(".number")).text();
            var price=$($(this).find(".cost")).text();
            $("product-list").append(productName);
        });

        });




      });
    }
  });

});
