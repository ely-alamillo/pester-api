const express = require('express');
const mailSender = require('@sendgrid/mail');
mailSender.setApiKey(process.env.TEST_KEY);

const router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ success: true });
});

router.get('/pester', function(req, res, next) {
  var mailOptions = {
    to: '95697549150@messaging.sprintpcs.com ',
    from: 'pester@annoying.com',
    subject: '🔥🔥🔥🔥',
    text: 'HI 🤪 🤓 😤 👻'
  };
  // const emails = [mailOptions, mailOptions, mailOptions];
  const emails = [];
  const limit = 8;
  [...Array(limit).keys()].forEach(() => {
    emails.push(mailOptions);
  });
  mailSender
    .send(emails)
    .then(res => {
      return res.json({ res });
    })
    .catch(e => res.json({ e }));
  // res.json({ sent: true });
});

module.exports = router;
