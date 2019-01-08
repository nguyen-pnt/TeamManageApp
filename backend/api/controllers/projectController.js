const express = require('express');
const router = express.Router();
const projectRepo = require('../repos/projectRepo');

router.post('/:name', async (req, res) => {
    let add = await projectRepo.add(req.params.name);
    console.log(add);
    res.status(201).json({msg: 'success', data: add});
})

module.exports = router;