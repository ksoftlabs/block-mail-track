var pattern = ["*://*.googleusercontent.com/proxy/*"];
var redirectUrl="";

function redirect(requestDetails) {
  if(requestDetails.url.indexOf("mailtrack")==-1){
    redirectUrl=redirectUrl.replace("https://","https://rsz.io/");
    console.log(requestDetails);
  } else {
    redirectUrl="https://ksoftlabs.com/wp-content/uploads/2018/10/MailTrackBlocked.jpg";
    console.log("Redirecting "+ requestDetails.url +" to "+redirectUrl);
  }
  

  return {
    redirectUrl : redirectUrl
  };
  
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:pattern},
  ["blocking"]
);