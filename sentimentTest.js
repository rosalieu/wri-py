var fs = require('fs');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var ml = require('ml-sentiment')()
var analyzer = new Analyzer("English", stemmer, "afinn");


fs.readFile('original_snippets.txt', 'utf8', function(err, data) {
    if (err) throw err;
    const lines = data.split(/\r?\n/)
    
    for (i = 0; i < lines.length; i++) {
        //METHOD ONE: https://www.npmjs.com/package/sentiment
        var result1 = sentiment.analyze(lines[i]).score;

        //METHOD TWO: https://www.npmjs.com/package/natural
        var result2 = analyzer.getSentiment(lines[i].match(/\w+(?:'\w+)*/g))

        //METHOD THREE: https://www.npmjs.com/package/ml-sentiment
        var result3 = ml.classify(lines[i])

        console.log(lines[i] + "@@@" + result1 + "@@@" + result2 + "@@@" + result3);
    }

});
