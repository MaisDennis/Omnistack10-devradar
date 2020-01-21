const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// index, show, store, update, destroy

module.exports = {

  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {
    // console.log(request.body);
    const { github_username, techs, latitude, longitude } = request.body;

    // const dev = await Dev.findOne({github_username });
    let dev = await Dev.findOne({github_username });

    // evitar cadastro duplo no MongoDB
    if (!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      
      // console.log(apiResponse.data)
      const { name = login, avatar_url, bio } = apiResponse.data;
    
      // const techsArray = techs.split(',').map(tech => tech.trim());
      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })

      //filtrar as conexões que estão há no max 10km de distancia e que o novo dev tenha pelo menos uma das tecnologias filtradas.
    
      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      )
      // console.log(sendSocketMessageTo);
      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }

    // console.log(name, avatar_url, bio, github_username);
    // return response.json({ message: 'Hello Omnistack'});
    return response.json(dev);
  },

  async update(request, response) {
    const { github_username, techs, latitude, longitude, name, avatar_url, bio,
    } = request.body;
    
    const dev = await Dev.findOne({github_username });
  
    const techsArray = parseStringAsArray(techs);

    const locationUpdate = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
  
    const devUpdate = await Dev.update({
      techs: techsArray,
      location: locationUpdate,
      name,
      avatar_url,
      bio,
    });
  
    return response.json({github_username, techs, latitude, longitude, name, avatar_url, bio});
    // return response.json({devUpdate});
  },

  async delete(request, response) {
    const { github_username } = request.params;

    const dev = await Dev.findOne({github_username });
    await dev.save();
    return response.json(dev);

  },
}