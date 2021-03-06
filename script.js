// side nav event
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//ready function
$(document).ready(function(){
// cart form event
  $(".cart").click(function(){
    $("#cart").show();
});
//sell form event
$("#sell").click(function(){
  $("#sell-myntra").show();
});
$("#cartid").click(function(){
  $("#cart").show();
});
// close sell form
$("#close").click(function(){
  $("#sell-myntra").hide();
});
// close cart form
$("#closecart").click(function(){
  $("#cart").hide();
});
// validation of form
// sort api call
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
            var idno=$("<div class='product-id'></div>").text(product["id"]);
            var icon=$("<div class='icon'><i class='fa fa-shopping-cart fa' aria-hidden='true'></i> </div>");
            element=$(element).append(img,productDiv,brandName,desc,costDiv,sellerDiv,productnum,icon,idno);
            $('.product').append(element);
        $(".productcontainer").click(function() {
          var productName=$($(this).parent().find(".productcontainer")).text();
          var imageSource=$($(this).parent().find("img")).attr("src");
          var brandName=$($(this).parent().find(".brand-name")).text();
          var desr=$($(this).parent().find(".des")).text();
          var price=$($(this).parent().find(".cost")).text();
          var sell=$($(this).parent().find(".seller")).text();
          var num=$($(this).parent().find(".number")).text();
          var i=$($(this).parent().find(".product-id")).text();
          localStorage.setItem("productName",productName);
          localStorage.setItem("image",imageSource);
          localStorage.setItem("brandname",brandName);
          localStorage.setItem("description",desr);
          localStorage.setItem("pcost",price);
          localStorage.setItem("soldby",sell);
          localStorage.setItem("itemnumber",num);
          localStorage.setItem("productid",i)
          window.location.href="product.html";
    });
});
//appending items in cart
$(".icon").click(function(){
      var productName=$($(this).parent().find(".productcontainer")).text();
      var price=$($(this).parent().find(".cost")).text();
      var num=$($(this).parent().find(".number")).text();
      var idnum=$($(this).parent().find(".product-id")).text();
      localStorage.setItem("idpro",idnum);
      localStorage.setItem("numpro",num);
      var list="<li></li>";
      var costlist="<li></li>";
      var numlist="<li></li>";
      var id="<div></div>";
      list=$(list).append(productName);
      costlist=$(costlist).append(price);
      numlist=$(numlist).append(num);
      id=$(id).append(idnum);
      $(".id-div").append(id);
      $("#product-list").append(list);
      $("#cost-list").append(costlist);
      $("#quant-list").append(numlist);
      alert('Item has been added to cart');
    });
}
});
//product page appending items
$(".product-name").append(localStorage.getItem("productName"));
  var image=$("<img>").attr("src",localStorage.getItem("image"));
$(".image").append(image);
$(".brandname").append(localStorage.getItem("brandname"));
$(".descr").append(localStorage.getItem("description"));
$(".soldby").append(localStorage.getItem("soldby"));
$(".quant").append(localStorage.getItem("itemnumber"));
$(".price").append(localStorage.getItem("pcost"));

$("#cartbutton").click(function(){
  alert('The item has been added to cart');
});
//filter items
$("#searchbutton").click(function(){
   var searchquery= $("#search").val();
   $(".product").empty();
//filter api brand
$.ajax({
  url:"http://acadprojects.com/py/fabricKart/filter/items",
  type: "POST",
  beforeSend: function(xhr) {
    xhr.setRequestHeader("Content-type", "application/json");
  },
  data : JSON.stringify({
    "page" : 0,
    "filters":[
    {  "name" : "brand",
      "value": [searchquery]
   }
 ]
}),
success: function(response) {
      console.log(response);
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
});
$("#searchbutton").click(function(){
var searchquery= $("#search").val();
$(".product").empty();
//filter api productName
$.ajax({
  url:"http://acadprojects.com/py/fabricKart/filter/items",
  type: "POST",
  beforeSend: function(xhr) {
    xhr.setRequestHeader("Content-type", "application/json");
  },
  data : JSON.stringify({
    "page" : 0,
    "filters":[
    {  "name" : "item_name",
      "value": [searchquery]
  },
]
}),
success: function(response) {
          console.log(response);
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
});
      $("#searchbutton").click(function(){
      var searchquery= $("#search").val();
      var searchname=$("#search").val();
      $(".product").empty();
      //filter api item category
      $.ajax({
        url:"http://acadprojects.com/py/fabricKart/filter/items",
        type: "POST",
        beforeSend: function(xhr) {
          xhr.setRequestHeader("Content-type", "application/json");
        },
        data : JSON.stringify({
          "page" : 0,
          "filters":[
          {  "name" : "item_category",
            "value": [searchquery]
        }

      ]
      }),
      success: function(response) {
        console.log(response);
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
});
//sell api call
$("#sellbutton").click(function(event) {
      event.preventDefault();
      //validation of sell form
      var prname=document.forms["Sellform"]["productname"].value;
      var brname =document.forms["Sellform"]["brandname"].value;
      var categoryvar=document.forms["Sellform"]["category"].value;
      var descrvar=  document.forms["Sellform"]["description"].value;
      var discountvar=document.forms["Sellform"]["discount"].value;
      var pricevar=document.forms["Sellform"]["price"].value;
      var sellvar=document.forms["Sellform"]["seller"].value;
  if(prname==""){
      alert("All fields are mandatory");
      return false;
}
if(brname==""){
    alert("All fields are mandatory");
    return false;
}
if(categoryvar==""){
    alert("All fields are mandatory");
    return false;
}
if(descrvar==""){
    alert("All fields are mandatory");
    return false;
}
if(discountvar==""){
    alert("All fields are mandatory");
    return false;
}
if(pricevar==""){
    alert("All fields are mandatory");
    return false;
}
  var namefield= $("#pname").val();
  var brandfield=$("#bname").val();
  var categoryfield=$("#category").val();
  var pricefield=$("#price").val();
  var discountfield=$("#discount").val();
  var descrfield=$("#description").val();
  var sellerfield=$("#seller").val();
$.ajax({
    url: "http://acadprojects.com/py/fabricKart/sell",
    type: "POST",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Content-type", "application/json");
    },
    data : JSON.stringify({
    "item_name" : namefield,
    "brand": brandfield,
    "size": "42",
    "price": pricefield,
    "sold_by": sellerfield,
    "quantity": "22",
    "gender": "male",
    "item_code": "AP-11",
    "item_category": categoryfield,
    "image": "",
    "brand": brandfield,
    "description": descrfield
  }),
      success:function(response){
      console.log(response);
    }
});
alert("product sold suucessfully");
$("#sell-myntra").hide();
});
//reloading items by site logo
$(".site-logo").click(function(){
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
});
$("#paybutton").click(function(event){
  event.preventDefault();
  //validation of cart form
  var addressfield=$("#address").val();
  var x=document.forms["cartform"]["name"].value;
  var y=document.forms["cartform"]["email"].value;
  var z=document.forms["cartform"]["number"].value;
    if(x==""){
      alert("All fields are mandatory");
      return false;
}
if(y==""){
    alert("All fields are mandatory");
    return false;
}
if(z==""){
    alert("All fields are mandatory");
    return false;
}
  var a=parseInt(localStorage.getItem("idpro"));
  var b=parseInt(localStorage.getItem("numpro"));
  var abc={"address":{"value":addressfield},
  "items":[{"id":a,"quantity":b } ]
};
console.log(abc);
//checkout api call
  $.ajax({
    url :"https://acadprojects.com/py/fabricKart/checkout",
    type: "PUT",
    beforeSend:function(xhr){
      xhr.setRequestHeader("Content-type","application/json")
    },
    data : JSON.stringify(abc),


    success: function(response){
      console.log(response);
    }

  });

$("#cart").hide();
$(".notification").show();
});
$("#notifyclose").click(function(){
  $(".notification").hide();
   });
});
