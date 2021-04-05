function openNav() {
    document.getElementById("mySidenav").style.width = "120px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // write into message to landing page //
  document.addEventListener('DOMContentLoaded', function() {
    writeText("#intro", "Hello! Thanks for stopping by, I look forward to connecting! -Lacey", 0, 85);
});
let writeText = function (target, message, index, interval) {
    if (index < message.length) {
        document.querySelector(target).innerHTML =
            document.querySelector(target).innerHTML + message[index++];
        setTimeout(function () { writeText(target, message, index, interval); }, interval);
    }
}