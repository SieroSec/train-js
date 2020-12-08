// console.log(_.capitalize("miau"));

$(document).ready(function(){
  // $("button").click(function(){$("p").hide();});
  // $("#miau").click(function(){$("#miau").hide();});
  // $("div.mur").click(function(){$("div.mur").hide();});
  let elem = ($("*").find("*"));
  console.log(elem);
  // console.log(typeof(elem));

  // console.log("Object keys: "+Object.keys(elem));
  // console.log("Obect length: "+Object.keys(elem).length);
  // console.log(elem["0"]);

  for (i=0; i < elem.length; i++) {
    console.log(elem[i]);
    console.log(typeof(elem[i]));
    console.log(Object.keys(elem[i]));
    console.log(Object.prototype.valueOf(elem[i]));
    console.log("-----");
  }

  

  //var myJSON = JSON.stringify(elem);
  // console.log(myJSON);
  //  console.log(Object.keys(elem).forEach(item => {console.log(item)}));

  $("button.hideall").click(function() {
    //$("*").hide();
    $(this).toggle();
  });
});

