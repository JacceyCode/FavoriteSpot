class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat: 0.12334, lng: 127.84442 }
    this.id = new Date().toString() + Math.random().toString();
  }
}
