/*(function () {
  var CONST = {
    PARAM_CHANGE: "ParamChange",
    BODY_HEIGHT: "bodyHeight"
  }
  
  //mutation observer
  var observer;
  // Select the node that will be observed for mutations
  var targetNode = document.documentElement || document.body;
  var oldHeight = 0; 
  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true, attributeFilter: ['height'] };
  
  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
      // Use traditional 'for loops' for IE 11
      //for(let mutation of mutationsList) { 
     let mutation = 0; 
        for(mutation=0; mutation<mutationsList.length; mutation++){
          //if(mutation.type === 'attributes' || mutation.type === 'childList' ){
            var contentHeight = document.querySelector('body > div').scrollHeight;
           if(contentHeight !== oldHeight){
              oldHeight = contentHeight;
              
             parent.postMessage({
                type: CONST.BODY_HEIGHT,
                payload:  contentHeight
              }, '*');
            
           } else {
            observer.disconnect();
           }
         // } 
      }
  };
  
  
  
  
  var isIE11 = !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/));
  
  if (isIE11) {
    if (typeof window.attachEvent == "undefined" || !window.attachEvent) 
    window.attachEvent = window.addEventListener; 
  }
  /*
  function checkUrlChange(payload){
   var intrvl = setInterval(function(){
      var newPayload = location.search.slice(1).split("&");
      if(JSON.stringify(newPayload)!==JSON.stringify(payload)){
        clearInterval(intrvl);
        oldHeight = 0;
        observer = new MutationObserver(callback);
  // Start observing the target node for configured mutations
        observer.observe(document.querySelector('body'), config);
        parent.postMessage({
          type: CONST.PARAM_CHANGE,
          payload: newPayload
        }, '*');
        checkUrlChange(newPayload);
      }
    }, 1000);
  }
  * /
  function initUrlUpdateListener() {
    if (window.addEventListener) {
      window.addEventListener('load', listener);
    } else if (window.attachEvent) {
      window.attachEvent('onload', listener);
    }
    function listener(){
      targetNode = document.body;
      parent.postMessage({
        type: CONST.BODY_HEIGHT,
        payload:   document.querySelector('body > div').scrollHeight
      }, '*');
     // oldHeight = 0;
    // observer = new MutationObserver(callback);
  // Start observing the target node for configured mutations
  //   observer.observe(document.querySelector('body'), config);
   
        var payload = ''; 
        payload =  location.search.slice(1).split("&");
        parent.postMessage({
          type: CONST.PARAM_CHANGE,
          payload: payload
        }, '*');     
    }
      
  }
  initUrlUpdateListener();
  }());
*/
