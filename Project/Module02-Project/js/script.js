window.addEventListener('load', function () {
   
    
  Notification.requestPermission().then(function(result) {
    if (result === 'denied') {
      console.log('Permission wasn\'t granted. Allow a retry.');
      return;
    }
    if (result === 'default') {
      console.log('The permission request was dismissed.');
      return;
    }
    // Do something with the granted permission.
  });

  });