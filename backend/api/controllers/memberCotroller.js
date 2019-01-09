const express = require('express');
const router = express.Router();
const memberRepo = require('../repos/memberRepo');

router.post('/', async (req, res) => {
    if (typeof req.body.name === 'undefined' 
    || typeof req.body.phone === 'undefined'
    ) {
        res.status(422).json({ msg: 'Invalid data' });
        return;
    }

    try {
        await memberRepo.add(req.body);
    } catch (error) {
        console.log(err);
        res.status(500).json({ msg: 'View error log on console' });
        return;
    }

    res.status(201).json({ msg: 'success' });
})

module.exports = router;