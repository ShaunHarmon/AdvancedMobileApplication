window.addEventListener('load', function () {
   
    
  Notification.requestPermission(function(result) {
    if (result === 'denied') {
      console.log('Permission wasn\'t granted. Allow a retry.');
      return;
    }
    if (result === 'default') {
      console.log('The permission request was dismissed.');
      return;
    }
    if(result === 'granted'){
      var notification = new Notification("NEW GALLERY!");
      
    }
  });

  });
