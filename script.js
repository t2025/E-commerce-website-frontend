
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
        var icon=  "<i class='fa fa-shopping-cart'id='fa' aria-hidden='true'></i>"

        element=$(element).append(img,productDiv,brandName,icon);
        $('.product').append(element);
        $(".product-container").click(function() {
          var productName=$($(this).find(".productcontainer")).text();
          var imageSource=$($(this).find("img")).attr("src");
          var brandName=$($(this).find(".brand-name")).text();
          localStorage.setItem("productName",productName);
          localStorage.setItem("image",imageSource);

          localStorage.setItem("brandname",brandName);
          windows.location.href="product.html";

        });



      });
    }
  });
});
