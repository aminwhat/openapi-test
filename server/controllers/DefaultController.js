/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DefaultService');
const postsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.postsGET);
};

const postsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.postsPOST);
};

const usersGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersGET);
};

const usersIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersIdGET);
};

const usersPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersPOST);
};


module.exports = {
  postsGET,
  postsPOST,
  usersGET,
  usersIdGET,
  usersPOST,
};
