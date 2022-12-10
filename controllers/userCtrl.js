const sendMail = require('./sendMail')
const {google} = require('googleapis')
const {OAuth2} = google.auth
const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)
const path =require("path")



const userCtrl = {
    register: async (req, res) => {
        try {
           
            const url = `www.com`
            email="nageshjani4@gmail.com"
            sendMail(email, url, "Verify your email address")
            res.send("done")
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

}






module.exports = userCtrl    
