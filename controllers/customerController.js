const customer = require('../models/customer');
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
 * New Customer Form
 */

exports.addCustomer = async (req, res) => {
    
    const locals = {
        title: 'Add New Customer',
        description: 'Guest Management System'
    }

    res.render('customer/add', locals);
}

/**
 * POST /
 * Create New Customer Form
 */

exports.postCustomer = async (req, res) => {

    console.log(req.body);

    const newCustomer = new customer({
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
        await customer.create(newCustomer);
        res.redirect('/');
    } catch (error) {
        console.log(error)
    }
}