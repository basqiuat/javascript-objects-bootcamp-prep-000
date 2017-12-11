var objects = {
    playlist:'artistName',
    playlist:'songTitle'
  
}

var playlist = new Object({artistName: songTitle})

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, obj, {[artistName]: songTitle})
  
  //playlist.artistName = ()
  //playlist.songTitle = ()
  //return playlist
}