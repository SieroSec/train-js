$(document).ready(function(){
  // let elem = ($("*").find("*"));
  let elem = ($("*").find("*"));
  console.log(elem.length);
  console.log(elem);
  // for (i=0; i < elem.length; i++) {
  //   console.log(elem[i]);
  // }
  
  // play with jQuery ajax:
  // $(selector).load(URL,data,callback);
  // The required URL parameter specifies the URL you wish to load.
  // The optional data parameter specifies a set of querystring key/value pairs to send along with the request.
  // The optional callback parameter is the name of a function to be executed after the load() method is completed.
  // responseTxt - contains the resulting content if the call succeeds
  // statusTxt - contains the status of the call
  // xhr - contains the XMLHttpRequest object

  $("button").click(function() {
    $("div.ajax").load("ajax1.txt", function(responseTxt, statusTxt, xhr){
      console.log(xhr);
      if(statusTxt == "success")
      console.log("STATUS: " + xhr.status + ", " + xhr.statusText);
      if(statusTxt == "error")
        console.log("STATUS: " + xhr.status + ", " + xhr.statusText);
    });
  })

});

