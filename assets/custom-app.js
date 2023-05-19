$(document).ready(function() {
    if ('webkitSpeechRecognition' in window) {
      var recognition = new webkitSpeechRecognition();
  
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
  
      recognition.onstart = function() {
        $('#voiceSearchButton').text('Listening...');
      };
  
      recognition.onend = function() {
        $('#voiceSearchButton').text('Voice Search');
      };
  
   
      recognition.onresult = function(event) {
        var result = event.results[0][0].transcript;
        $('#voiceSearchInput').val(result);
        
        predictiveSearch(result);
      };
  
    
      $('#voiceSearchButton').click(function() {
        if (recognition.running) {
          recognition.stop();
        } else {
          recognition.start();
        }
      });
    } else {
      alert('Web Speech API is not supported in this browser.');
    }
  });
  
  function predictiveSearch(query) {
    renderSearchResults(resultsMarkup);
  }