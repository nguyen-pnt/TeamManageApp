const express = require('express');
const router = express.Router();
const projectRepo = require('../repos/projectRepo');
const memberRepo = require('../repos/memberRepo');

router.post('/:name', async (req, res) => {
    if (typeof req.params.name === 'undefined'
    ) {
        res.status(422).json({ msg: 'Invalid data' });
        return;
    }

    try {
        await projectRepo.add(req.params.name);
    } catch (error) {
        console.log(err);
        res.status(500).json({ msg: 'View error log on console' });
        return;
    }
    res.status(201).json({ msg: 'success' });
})

router.post('/addmember', async (req, res) => {
    if (typeof req.body.idPro === 'undefined'
    || typeof req.body.idMem === 'undefined'
    ) {
        res.status(422).json({ msg: 'Invalid data' });
        return;
    }

    let { idPro, idMem } = req.body;

    try {
        await memberRepo.updateIdPro(idMem, idPro);
    } catch (error) {
        console.log(err);
        res.status(500).json({ msg: 'View error log on console' });
        return;
    }
    res.status(201).json({ msg: 'success' });
})

router.post('/deletemember/:idMem', async (req, res) => {
    if (typeof req.params.idMem === 'undefined'
    ) {
        res.status(422).json({ msg: 'Invalid data' });
        return;
    }
    
    let idPro = null;
    try {
        await memberRepo.updateIdPro(idMem, idPro);
    } catch (error) {
        console.log(err);
        res.status(500).json({ msg: 'View error log on console' });
        return;
    }
    res.status(200).json({ msg: 'success' });
})

router.get('/:idPro', async (req, res) => {
    if (typeof req.params.idPro === 'undefined'
    ) {
        res.status(422).json({ msg: 'Invalid data' });
        return;
    }

    let projectName = null;
    let listMember = null;
    try {
        projectName = await projectRepo.getName(idPro)[0];
    } catch (error) {
        console.log(err);
        res.status(500).json({ msg: 'View error log on console' });
        return;
    }

    try {
        listMember = await memberRepo.getMembersOfProject(idPro);
    } catch (error) {
        console.log(err);
        res.status(500).json({ msg: 'View error log on console' });
        return;
    }
    res.status(200).json({ name: projectName, listMember: listMember });
})

module.exports = router;