// Album Constructor
function Album() {
  // set photos instance attribute to an empty array
  this.photos = [];
}
// Add prototype method for addPhoto( src, location )
Album.prototype.addPhoto = function( src, location ) {
// addPhoto adds a new photo to the Album.photos array
    // create a new photo inside of the addPhoto method
    let photo = new Photo( src, location );
    // add the new photo to the Album.photos array (push?)
    this.photos.push( photo );
//   this.photos.push( new Photo(src,location));
    return this; // returning this allows method chaining
};
// Add prototype method for listPhotos()
Album.prototype.listPhotos = function() {
  // maybe use join(", ") to just output a list of photos as a string
  return this.photos.join(", ");
};
   
// Add prototype method for getPhoto(index)
Album.prototype.getPhoto = function(index) {
    // return the photo that is located at the index passed in as an argument
    return this.photos[index];
};
// Photo Constructor
function Photo( src, location ) {
  // store src argument in an attribute on the instance via this
  this.src = src;
  // store location argument on the instance too
  this.location = location;
}
// [optional] Add prototype method for toString on Photo
Photo.prototype.toString = function(){
  return `${this.src} (${this.location})`;
}

//tests 
const myAlbum = new Album();

myAlbum.addPhoto("dog.jpg","Home").addPhoto("Cat","Hat");

