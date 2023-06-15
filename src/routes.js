const { Router } = require('express');
const { listUsers } = require('./app/useCases/users/listUsers');

const router = Router();

router.get('/', listUsers);

router.post('/', (req, resp) => {
  resp.status(200).json({ success: 'Create an user' });
});

router.get('/user/:id', (req, resp) => {
  resp.status(200).json({ success: 'Get an user' });
});

router.put('/user/:id', (req, resp) => {
  resp.status(200).json({ success: 'Update an user' });
});

router.delete('/user/:id', (req, resp) => {
  resp.status(200).json({ success: 'Delete an user' });
});

module.exports = router;
