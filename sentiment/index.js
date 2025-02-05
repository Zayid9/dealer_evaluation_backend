const natural = require('natural');

const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
const analyzeSentiment = (text) => analyzer.getSentiment(text.split(' '));

module.exports = analyzeSentiment;