const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('');
templates = {
	template1: '',
};
function sendEmail(data) {
	const msg = {
		to: data.receiver,
		from: 'Sender Name <noreply@test.com>',
		replyTo: 'Test <noreply@test.com>',
		templateId: templates[data.templateName],

		// dynamic_template_data: {
		//
		// },
	};

	sgMail.send(msg, (error, result) => {
		error ? console.log(error) : console.log('Sent successfully!');
	});
}
exports.sendEmail = sendEmail;
