document.addEventListener('DOMContentLoaded', function() {
    var voiceSearchButton = document.getElementById('voice-src-btn');
    var voiceSearchInput = document.getElementById('Search-In-Modal');

    // Check if the browser supports the Web Speech API
    if ('webkitSpeechRecognition' in window) {
      var recognition = new webkitSpeechRecognition();

      // Set the recognition parameters
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      // When speech recognition starts, update the button image
      recognition.onstart = function() {
        voiceSearchButton.querySelector('img').src = 'https://cdn.shopify.com/s/files/1/0768/2103/7376/files/svgviewer-output.svg?v=1684532444';
      };

      // When speech recognition ends, update the button image
      recognition.onend = function() {
        voiceSearchButton.querySelector('img').src = 'https://cdn.shopify.com/s/files/1/0768/2103/7376/files/svgviewer-output.svg?v=1684532444';
      };

      // Process the recognized speech
      recognition.onresult = function(event) {
        var result = event.results[0][0].transcript;
        voiceSearchInput.value = result;
        // Trigger the predictive search with the recognized speech as the search query
        predictiveSearch(result);
      };

      // Start or stop listening when the button is clicked
      voiceSearchButton.addEventListener('click', function() {
        //alert("Click");
        if (recognition.running) {
        //  alert("Click RRstop");
          recognition.stop();
        } else {
         // alert("Click RRstart");
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