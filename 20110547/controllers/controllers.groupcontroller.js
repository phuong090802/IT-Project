const { myGroup } = require('../models/models.groups');

function getGroup(req, res) {
    res.json(myGroup);
}

function getMemberById(req, res) {
    const id = Number(req.params.id);
    const member = myGroup.find(member => member.id === id);
    if (member) {
        res.json(member);
    } else {
        res.status(400).json({ error: 'No valid' });
    }
}

function addMember(req, res) {
    const id = Number(req.params.id);
    const ids = myGroup.map(member => member.id);
    if (!ids.includes(id) && (id === 20110471 || id === 20110494 || id === 20110547)) {
        const name = req.body.name;
        myGroup.push({ id: id, name: name });
        res.status(201).json(myGroup);
    }
    else {
        res.status(400).end('Not valid');
    }
}

function sendMessageById(req, res) {
    const id = Number(req.params.id);
    const member = myGroup.find(member => member.id === id);
    if (member) {
        res.type('.html');
        res.write(`<html><body><ul><li>${member.name}</li></ul></body></html>`);
        res.end();
    } else {
        res.statusCode = 400;
        res.end('Not valid');
    }
}

function sendMessageAll(req, res) {
    let text = '';
    for (const item of myGroup) {
        text += `<li>${item.name}</li>`;
    }
    res.type('.html');
    res.write(`<html><body><ul>${text}</ul></body></html>`);
    res.end();
}

module.exports = {
    getGroup,
    getMemberById,
    addMember,
    sendMessageById,
    sendMessageAll
}