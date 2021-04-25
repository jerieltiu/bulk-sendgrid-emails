var sender = require('./mailer.js');
var receiver = [
	'email1@email.com',
	'email2@email.com',
	'email2@email.com',
	'email3@email.com',
];

receiver.forEach((item, index) => {
	email = item;
	console.log(index);

	var data = {
		templateName: 'template1',
		receiver: email,
	};

	sender.sendEmail(data);
});
