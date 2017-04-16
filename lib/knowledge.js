'use strict'

const Promise = require('bluebird');
const validation = require('./validations.js');
const helpers = require('./helpers.js');
const request = require('request');

class Knowledge {

    constructor (options) {
        this.server_key = options.serverKey;
    }

    types (){
        return {
            book: 'Book',
            bookSeries: 'BookSeries',
            educationalOrganization: 'EducationalOrganization',
            event: 'Event',
            governmentOrganization: 'GovernmentOrganization',
            localBusiness: 'LocalBusiness',
            movies: 'Movie', 
            movieSeries: 'MovieSeries',
            musicAlbum: 'MusicAlbum', 
            musicGroup: 'MusicGroup',
            musicRecording: 'MusicRecording',
            organization: 'Organization',
            periodical: 'Periodical',
            person: 'Person',
            place: 'Place',
            sportsTeam: 'SportsTeam',
            tvEpisode: 'TVEpisode',
            tvSeries: 'TVSeries',
            videoGame: 'VideoGame',
            videoGameSeries: 'VideoGameSeries',
            webSite: 'WebSite'
        };
    }

    buildParams (query, types, limit, indent) {

        validation.validateQuery(query);
        validation.validateTypesArray(types);

        return {
            query,
            limit: limit || 20,
            indent: indent || true,
            key: this.server_key,
            types
        };
    }

    request (parameters) {
        const url = helpers.buildUrl(parameters);

        return new Promise((resolve, reject) => {
            return request.get({url, json: true }, (err,httpResponse,body) => {
                if (err || httpResponse.statusCode !== 200) {
                    reject(err || body);
                } else{
                    resolve(body);
                }
            });
        });
    }
}

module.exports = Knowledge;