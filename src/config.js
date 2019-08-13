global.SALT_KEY = 'f5b99242-6504-4ca3-3443334478e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';
dbstring = 'dbstring';
module.exports = {
    connectionString: 'mongodb://' + dbstring,
    sendgridKey: 'chave',
    containerConnectionString: 'connectionString'
}