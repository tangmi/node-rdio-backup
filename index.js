const config = require('config');
const express = require('express');
const rdio_type = require('./rdio_type');

const Rdio = require('rdio')({
	rdio: {
		clientId: config.rdio.client_id,
		clientSecret: config.rdio.client_secret,
	}
});

console.log('using config:')
console.log(JSON.stringify(config, null, 2));

const rdio = new Rdio();

const app = express()
	.use(require('morgan')('dev'))
	.set('view engine', 'hbs')
	.set('views', __dirname + '/views')
	.get('/', (req, res) => res.redirect('/favorites'))
	.get('/auth', (req, res) => {
		const oauth_url = 'https://www.rdio.com/oauth2/authorize?response_type=code&client_id=' + config.rdio.client_id + '&redirect_uri=' + config.rdio.redirect_uri;

		if (!req.query.code) {
			return res.redirect(oauth_url);
		}

		rdio.getAccessToken({
			code: req.query.code,
			redirect: config.rdio.redirect_uri,
		}, (err) => {
			if (err) return res(err);

			res.redirect('/')
		});
	})
	.get('/favorites', (req, res) => {
		rdio.request({
			method: 'getFavorites',
			types: 'artists,labels,playlists,stations,tracksAndAlbums',
			sortOrder: 'playCount',
			// count: 25,
			count: 9999999999999,
		}, function(err, response) {
			if (err) {
				if (err.statusCode == 401) {
					return res.redirect('/auth');
				} else {
					return res.send(err);
				}
			}

			const rdio_types = response.result.map(rdio_type.make);

			const albums = rdio_types.filter(el => el instanceof rdio_type.Album);
			const tracks = rdio_types.filter(el => el instanceof rdio_type.Track);
			const artists = rdio_types.filter(el => el instanceof rdio_type.Artist);
			const playlists = rdio_types.filter(el => el instanceof rdio_type.Playlist);

			res.render('favorites', {
				artists,
				albums,
				tracks,
				playlists
			})
		});
	})
	.use(express.static(__dirname + '/static'));

const server = require('http').createServer(app).listen(3000, () => {
	console.log('listening on %s', server.address().port);
});