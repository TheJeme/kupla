document.getElementById('passwordbutton').addEventListener('click', function() {
  if (!document.getElementById('masterpassword').value.length == 0 && !document.getElementById('service').value.length == 0){
    applyHash();
  }
});

function applyHash() {
  var masterPassword = document.getElementById('masterpassword').value;
  var service = document.getElementById('service').value.toUpperCase();
  var secretPassword = md5(masterPassword + service + "kupla");

  var halflength = Math.ceil(secretPassword.length / 2);   
  var leftsecretpassword = secretPassword.slice(0,halflength);
  var rightsecretpassword = secretPassword.slice(halflength,secretPassword.length - 10);



  var tempInput = document.createElement("input");  
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = leftsecretpassword + rightsecretpassword.toUpperCase() + "!";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  document.getElementById("poplabel").innerHTML = "Password copied to clipboard!";
}