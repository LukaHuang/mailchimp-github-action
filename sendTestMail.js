const { API_KEY, SERVER_PREFIX } = require('./config')
const mailchimp = require('@mailchimp/mailchimp_marketing')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

mailchimp.setConfig({
  apiKey: API_KEY,
  server: SERVER_PREFIX,
})

const run = async (campaignId, mail) => {
  try {
    console.log('Send a testing email...')
    await mailchimp.campaigns.sendTestEmail(campaignId, {
      test_emails: [mail],
      send_type: 'html',
    })
    console.log('Success!')
  } catch (e) {
    console.log(e)
  }
}

module.exports = { run }