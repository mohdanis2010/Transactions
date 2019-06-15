module.exports = (app) => {
    const transaction = require('../controllers/trans.controller')

    app.post('/addTrans', transaction.create);

    app.get('/getTrans', transaction.findAll);


}