const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chiragy282@gmail.com',
        subject: 'Welcome To the Task-manger app!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}
const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chiragy282@gmail.com',
        subject: 'We are sad that you are leaving',
        text: `${name},we are sorry to have not met your needs/expectations.
        You can help us by providing some feedback in the link below:`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}