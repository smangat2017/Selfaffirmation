var api_key = 'key-73e15458e534ee382ea7d282839a1093';
var domain = 'kudositforward.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var mailcomposer = require("mailcomposer");

exports.sendWriting = function(recipient,message,name){
	var mail = mailcomposer({
		from: 'selfaffirmation@kudositforward.com',
		to: recipient,
		subject: 'Self Affirmation Activity Response',
		body: '',
		html: name + " <br> " + message,
	 });
	mail.build(function(mailBuildError, message) {
		var dataToSend = {
			to: recipient,
			message: message.toString('ascii')
		};
		mailgun.messages().sendMime(dataToSend, function (sendError, body) {
			if (sendError) {
				return;
			}
		});
	});
}

exports.sendWritingConfirmation = function(recipient,message,name){
	var mail = mailcomposer({
		from: 'selfaffirmation@kudositforward.com',
		to: recipient,
		subject: 'Thank You For Submitting a Response',
		body: '',
		html: "Thank you " + name + "! Here's what you wrote for reference: <br> <br>" + message,
	 });
	mail.build(function(mailBuildError, message) {
		var dataToSend = {
			to: recipient,
			message: message.toString('ascii')
		};
		mailgun.messages().sendMime(dataToSend, function (sendError, body) {
			if (sendError) {
				return;
			}
		});
	});
}
