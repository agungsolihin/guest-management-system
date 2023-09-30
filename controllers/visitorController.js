const visitor = require('../models/visitor');
const mongoose = require('mongoose');

/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
    
        const locals = {
            title: 'GMS AAL',
            description: 'Guest Management System'
        }

        res.render('index', locals);
}

/**
 * GET /
 * New Visitor Form
 */

exports.addVisitor = async (req, res) => {
    
    const locals = {
        title: 'Add New Visitor',
        description: 'Guest Management System'
    }

    res.render('visitor/add', locals);
}

/**
 * POST /
 * Create New Visitor Form
 */

exports.postVisitor = async (req, res) => {

    console.log(req.body);

    const newVisitor = new visitor({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        details: req.body.details,
        telephone: req.body.telephone,
        emailBusiness: req.body.emailBusiness,
        idNumber: req.body.idNumber,
        companyName: req.body.companyName,
        userDestination: req.body.userDestination,
        purposeOfVisit: req.body.purposeOfVisit,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    });

    try {
        await visitor.create(newVisitor);
        res.redirect('/');
    } catch (error) {
        console.log(error)
    }
}