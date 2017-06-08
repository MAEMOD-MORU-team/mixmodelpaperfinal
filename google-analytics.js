//initial tracking

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-100566348-1', 'auto');
ga('send', 'pageview');


$(document).on('change', "#tab-pane",function() {
    ga('send', 'event', 'tab', 'change tab', 'unspecified');
  });
  
$(document).on('click','button', function() {
    ga('send', 'event', 'button', 'click button','unspecified');
  });
  
$(document).on('click','a', function(event) {
    ga('send', 'event', 'link', 'click link',event.name);
  });
  
$(document).on('click','#eg1', function() {
    ga('send', 'event', 'button', 'click button eg1','eg1');
  });

$(document).on('click','#eg2', function() {
    ga('send', 'event', 'button', 'click button eg2','eg2');
  });

  
$(document).on('shiny:inputchanged', function(event) {
    ga('send', 'event', 'update', event.name, event.value);
  });

$(document).on('change','input:file', function() {
    ga('send', 'event', 'user input file','is uploaded');
  });

$(document).on('shiny:filedownload', function() {
    ga('send', 'event', 'user downloaded', 'downloaded');
  });
  
$(document).on('click','#downloadhistoplot2', function(event){
    ga('send', 'event', 'user downloaded','downloadhistoplot2');
});

$(document).on('click','#resultData', function(event){
    ga('send', 'event', 'user downloaded','resultData');
});