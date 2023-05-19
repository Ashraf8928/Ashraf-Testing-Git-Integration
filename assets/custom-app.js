$(document).ready(function() {
    
    var $voiceSearchButton = $('#voice-src-btn');
    var $voiceSearchInput = $('#Search-In-Modal');

    
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

      recognition.onresult = function(event) {
        var result = event.results[0][0].transcript;
        $voiceSearchInput.val(result);
       
        predictiveSearch(result);
      };

    
      $voiceSearchButton.on('click',function() {
        alert("This is Testing Alert");
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