
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
        var desc=$("<div class='des'></div>").text(product["description"]);
        var costDiv=$("<div class='cost'></div>").text(product["price"]);
        var sellerDiv=$("<div class='seller'></div>").text(product["sold_by"]);
        var productnum=$("<div class='number'></div>").text(product["quantity"]);
        var icon=$("<div class='icon'><i class='fa fa-shopping-cart fa' aria-hidden='true'></i> </div>");

        element=$(element).append(img,productDiv,brandName,desc,costDiv,sellerDiv,productnum,icon);


        $('.product').append(element);
        $(".productcontainer").click(function() {
          var productName=$($(this).parent().find(".productcontainer")).text();

          var imageSource=$($(this).parent().find("img")).attr("src");

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
          localStorage.setItem("itemnumber",num);
          window.location.href="product.html";



        });


});
}



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






$("#searchbutton").click(function(){
var searchquery= $("#search").val();
$(".container").empty();

$.ajax({
  url:"http://acadprojects.com/py/fabricKart/filter/items",
  type: "POST",
  beforeSend: function(xhr) {
    xhr.setRequestHeader("Content-type", "application/json");
  },
  data : JSON.stringify({
    "page" : 0,
    "filters":[
    {
      "name" : "brand",
      "value": "pepe"
    },
  ]
}),
success: function(response) {
  console.log(response);
  $("#sell-myntra").show();


   var data=response["data"];
console.log("data");

   data.forEach(function(product,index){
      var element="<div class='product-container col-md-4 col-xs-12'></div>";


      var productDiv=$("<div class='productcontainer'></div>").text(product["item_name"]);
      console.log(productDiv);
      var img=$("<img>").attr("src",product["image"]);
      console.log(img);
      var brandName=$("<div class='brand-name'></div>").text(product["brand"]);
      var desc=$("<div class='des'></div>").text(product["description"]);
      var costDiv=$("<div class='cost'></div>").text(product["price"]);
      var sellerDiv=$("<div class='seller'></div>").text(product["sold_by"]);
      var productnum=$("<div class='number'></div>").text(product["quantity"]);
      var icon=$("<div class='icon'><i class='fa fa-shopping-cart fa' aria-hidden='true'></i> </div>");

      element=$(element).append(img,productDiv,brandName,desc,costDiv,sellerDiv,productnum,icon);


      $('.brandfilter').append(element);
      $(".productcontainer").click(function() {
        var productName=$($(this).parent().find(".productcontainer")).text();

        var imageSource=$($(this).parent().find("img")).attr("src");

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
        localStorage.setItem("itemnumber",num);
        window.location.href="product.html";



      });




  });
}
});
});
});
$("#sellbutton").click(function() {
  var namefield= $("#pname").val();
  var brandfield=$("#bname").val();
  var categoryfield=$("#category").val();
  var pricefield=$("#price").val();
  var discountfield=$("#discount").val();
  var descrfield=$("#description").val();
  var sellerfield=$("#seller").val();
  var sellbody="item_name" +namefield  +  "brand"+brandfield +  "size"+ "42"+"price"+ pricefield+"sold_by"+sellerfield+"quantity"+ "22"+"gender"+ "male"+"item_code"+ "AP-11" + "item_category"+ categoryfield+ "image" +""  +"description"+descrfield;
  $.ajax({
    url: "http://acadprojects.com/py/fabricKart/sell",
    type: "POST",

    data : sellbody,
    success:function(response){
      alert(response);
    }

});
alert("sold");
});
