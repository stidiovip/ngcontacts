const express = require('express');
const router = express.Router();

const Data = require('./contact-data');
const Service = require('./contact-service');
const service = new Service( new Data() );

const _ = require('lodash');

/**
 * Will get the list of contacts
 */
router.get('/contacts', (req, res) => {
    res.json(service.getContacts());
});

/**
 * Will get the list of contacts
 */
router.post('/contacts', (req, res) => {
    res.json(service.addContact(req.body));
});

/**
 * Will update contact
 */
router.put('/contacts', (req, res) => {
    res.json(service.updateContact(req.body));
});

/**
 * Will delete a contact
 */
router.delete('/contacts/:id', (req, res) => {
    let contact = service.findContactById(req.params.id);
    service.deleteContact(contact);
    res.status(200).end("OK");
});

module.exports = router;