'use strict';

const Lodash = require('lodash');
const Path = require('path');
const Package = require('../../../package');

exports.register = (server, options, next) => {

    server.route({
        method: 'GET',
        path: '/version',
        handler: function (request, reply) {
            let nodeModules = '../../../node_modules/';
            let packages = { [Package.name]: Package.version };

            Lodash.forEach(Package.dependencies, (value, name) => {
                let depPackage = require(`${nodeModules}${name}/package`);
                packages[name] = depPackage.version;
            })

            return reply(packages);
        }
    });

    return next();
};


exports.register.attributes = {
    pkg: require('../package.json')
};
