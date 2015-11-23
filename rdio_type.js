class Artist {
	constructor(obj) {
		this.name = obj.name;
		this.key = obj.key;
		this.type = obj.type;
		this.url = obj.url;
		this.icon = obj.icon;
		this.baseIcon = obj.baseIcon;
		this.hasRadio = obj.hasRadio;
		this.shortUrl = obj.shortUrl;
		this.radioKey = obj.radioKey;
		this.topSongsKey = obj.topSongsKey;
		this.dynamicIcon = obj.dynamicIcon;
	}
}

class Track {
	constructor(obj) {
		this.name = obj.name;
		this.artist = obj.artist;
		this.album = obj.album;
		this.albumKey = obj.albumKey;
		this.albumUrl = obj.albumUrl;
		this.artistKey = obj.artistKey;
		this.artistUrl = obj.artistUrl;
		this.type = obj.type;
		this.length = obj.length;
		this.duration = obj.duration;
		this.isExplicit = obj.isExplicit;
		this.isClean = obj.isClean;
		this.url = obj.url;
		this.baseIcon = obj.baseIcon;
		this.albumArtist = obj.albumArtist;
		this.albumArtistKey = obj.albumArtistKey;
		this.canDownload = obj.canDownload;
		this.canDownloadAlbumOnly = obj.canDownloadAlbumOnly;
		this.canStream = obj.canStream;
		this.canTether = obj.canTether;
		this.canSample = obj.canSample;
		this.price = obj.price;
		this.shortUrl = obj.shortUrl;
		this.embedUrl = obj.embedUrl;
		this.key = obj.key;
		this.gridIcon = obj.gridIcon;
		this.icon = obj.icon;
		this.icon400 = obj.icon400;
		this.trackNum = obj.trackNum;
		this.radioKey = obj.radioKey;
		this.radio = obj.radio;
		this.dynamicIcon = obj.dynamicIcon;
	}
}

class Album {
	constructor(obj) {
		this.name = obj.name;
		this.type = obj.type;
		this.icon = obj.icon;
		this.baseIcon = obj.baseIcon;
		this.url = obj.url;
		this.artist = obj.artist;
		this.artistUrl = obj.artistUrl;
		this.isExplicit = obj.isExplicit;
		this.isClean = obj.isClean;
		this.length = obj.length;
		this.artistKey = obj.artistKey;
		this.trackKeys = obj.trackKeys;
		this.price = obj.price;
		this.canStream = obj.canStream;
		this.canSample = obj.canSample;
		this.canTether = obj.canTether;
		this.shortUrl = obj.shortUrl;
		this.embedUrl = obj.embedUrl;
		this.displayDate = obj.displayDate;
		this.key = obj.key;
		this.releaseDate = obj.releaseDate;
		this.duration = obj.duration;
		this.dynamicIcon = obj.dynamicIcon;
	}
}

class Playlist {
	constructor(obj) {
		this.name = obj.name;
		this.length = obj.length;
		this.type = obj.type;
		this.url = obj.url;
		this.icon = obj.icon;
		this.baseIcon = obj.baseIcon;
		this.owner = obj.owner;
		this.ownerUrl = obj.ownerUrl;
		this.ownerKey = obj.ownerKey;
		this.ownerIcon = obj.ownerIcon;
		this.lastUpdated = obj.lastUpdated;
		this.shortUrl = obj.shortUrl;
		this.embedUrl = obj.embedUrl;
		this.key = obj.key;
		this.dynamicIcon = obj.dynamicIcon;
	}
}

module.exports.Playlist = Playlist;
module.exports.Album = Album;
module.exports.Artist = Artist;
module.exports.Track = Track;
module.exports.make = function(obj) {
	switch (obj.type) {
		case 'p':
			return new Playlist(obj);
		case 'a':
			return new Album(obj);
		case 'r':
			return new Artist(obj);
		case 't':
			return new Track(obj);
		default:
			break;
	}
}