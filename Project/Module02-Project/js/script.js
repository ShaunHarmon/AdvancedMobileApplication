window.addEventListener('load', function () {
   
    
  Notification.requestPermission(function(result) {
    if (result === 'denied') {
      console.log('Permission wasn\'t granted. Allow a retry.');
      
    }
    if (result === 'default') {
      console.log('The permission request was dismissed.');
    
    }
    if(result === 'granted'){   
        
      console.log("GRANTED");
      alert('NEW GALLERY');
    }

  });

  });
