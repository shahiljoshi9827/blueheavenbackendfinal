var nodemailer = require('nodemailer');

var demo={

 sendMail:function(demo,callback){   
 var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'help.blueheaven@gmail.com',
    pass: 'asp@1234'
  },callback
});

var mailOptions = {
  from: 'help.blueheaven@gmail.com',
  to: demo.to,
  subject:demo.subject,
  message: demo.message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
}
module.exports=demo;