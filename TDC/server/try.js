import smtp from 'smtp.js';


const email = {

  from: 'tdcdev@topdatacoach.com',
  to: 'anshumanrai180@gmail.com',
  subject: 'Test email',
  text: 'This is a test email sent from the browser'

}


smtp.sendMail(email)
  .then(info =&gt; console.log(info))
  .catch(err =&gt; console.error(err)) 