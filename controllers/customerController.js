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
        tel: req.body.tel,
        email: req.body.email,
    });

    try {
        await customer.create(newCustomer);
        res.redirect('/');
    } catch (error) {
        console.log(error)
    }
}