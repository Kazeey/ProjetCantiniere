let fetch = require('node-fetch');
const verificationImport = require('../verifiyConnexion');

const baseUrl = 'http://127.0.0.1:8080/lunchtime/';
let emptyValue = "Non renseigné(e)";

methods = {
    login : async function(req, res)
    {
        let isApiAvalaible = await verificationImport.verification();

    }, 

    checkEmail : async function(req, res)
    {
        let isApiAvalaible = await verificationImport.verification();

    },

    forgotPassword : async function(req, res)
    {
        let isApiAvalaible = await verificationImport.verification();

    }
}

exports.data = methods;
