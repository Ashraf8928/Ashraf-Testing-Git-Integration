$(document).ready(function() {
    
    var $voiceSearchButton = $('#voice-src-btn');
    var $voiceSearchInput = $('#voiceSearchInput');

    
    if ('webkitSpeechRecognition' in window) {
      var recognition = new webkitSpeechRecognition();

      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

    
      recognition.onstart = function() {
        $voiceSearchButton.find('img').attr('src', 'path/to/listening-icon.png');
      };

      
      recognition.onend = function() {
        $voiceSearchButton.find('img').attr('src', 'path/to/voice-icon.png');
      };

      // Process the recognized speech
      recognition.onresult = function(event) {
        var result = event.results[0][0].transcript;
        $voiceSearchInput.val(result);
       
        predictiveSearch(result);
      };

    
      $voiceSearchButton.click(function() {
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