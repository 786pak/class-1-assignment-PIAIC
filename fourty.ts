function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album = {
      artist: artist,
      title: title
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Creating album dictionaries using the make_album() function
  const album1 = make_album('Artist 1', 'Album 1');
  const album2 = make_album('Artist 2', 'Album 2', 12);
  const album3 = make_album('Artist 3', 'Album 3', 8);
  
  // Printing the album dictionaries
  console.log(album1);
  console.log(album2);
  console.log(album3);
  