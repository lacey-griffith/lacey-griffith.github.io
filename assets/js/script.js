function openNav() {
    document.getElementById("mySidenav").style.width = "170px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // write into message to landing page //
  document.addEventListener('DOMContentLoaded', function() {
    writeText("#intro", "Hi! My name is Lacey Griffith. Thanks for stopping by, I look forward to connecting!", 0, 95);
});
let writeText = function (target, message, index, interval) {
    if (index < message.length) {
        document.querySelector(target).innerHTML =
            document.querySelector(target).innerHTML + message[index++];
        setTimeout(function () { writeText(target, message, index, interval); }, interval);
    }
}