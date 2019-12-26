const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

listingAdjectives = ['sunset roost', 'lux', 'perfect nest', 'private pool', 'lakefront', 'charming', 'family-friendly', 'secluded', 'beach front', 'relaxing', 'lake cabin', 'pine cone', 'stunning', 'gorgeous modern', 'estes mountain', 'river front', 'water front', 'charming', 'winter special', 'beautiful', 'magnificent', 'ocean view', 'mountain getaway', 'colonial', 'rustic', 'wondrous', 'perfect getaway', 'quiet', 'historical', 'modern', 'gulf front', 'relaxing river', 'summer breezes', 'enchanting rockwood', 'cowell beach', 'rustic country', 'resort', 'panoramic ocean view', 'executive mountain', 'executive beach', 'executive', 'comfortable and spacious', 'private', 'mountain lookout', 'scenic luxury', 'great escape', 'stone lodge', 'dream retreat', 'dream guesthouse', 'enchanting', 'luxury', 'lighthouse view', 'comfortable', 'bay front', 'perfect & affordable', 'beach', 'scenic', 'location, location!', 'delightful vacation', 'grand', 'large', 'beautiful contemporary', 'ocean block', 'elegant', 'breathtaking', 'new', 'riverside', 'beach bungalow', 'wild dunes', 'stargazer lodge', 'quaint & cozy', 'downtown', 'amazing views', 'centrally located', 'seaside', 'newly remodeled', 'family vacation spot', 'palm', 'luxury', 'dune', 'fine-private', 'winter views', 'summer views', 'fall views', 'spring views', 'restored', 'expansive', 'conveniently located', 'total remodel', 'hidden', 'chic', 'victorian', 'sandy pines', 'Norman Rockwell', 'stylish', 'greek', 'revival style', 'spacious', 'good value', 'at the water edge', 'designer', 'fun', 'sandcastle', 'sky ledge', 'alpine', 'free night!', 'summer beach', 'absolutely gorgeous', 'asian-inspired', 'autumn', 'wine country', 'classic', 'bayside', 'vacation', 'southwest', 'immaculate', 'island style', 'beautiful slope', 'upscale', 'vintage', 'picturesque', 'redwood retreat', 'tuscan', 'cliffside', 'foresty', 'artistic', 'paradise', 'jet luxury', 'skyline view', 'view from space', 'burning cielings', 'mirror room', 'posh', 'abstract', 'sex dungeon', 'castle', 'tiny', 'cage'];

listingStyles = ['home', 'loft', 'chalet', 'house', 'beachhouse', 'guesthouse', 'cabin', 'skyloft', 'ranch', 'cottage', 'mansion', 'treehouse', 'lakehouse', 'townhouse', 'apartment', 'condo', 'resort', 'lodge', 'lodging', 'country house', 'manor', 'estate', 'summer home', 'winter lodge', 'retreat', 'log home', 'rental', 'castle'];

listingType = ['House', 'Apartment', 'Condo', 'Townhouse', 'Beach House', 'Tree House', 'Space Station'];

listingAmenities = ['family-friendly', 'pet-friendly', 'pool', 'gated community', 'fooseball', 'trampoline', 'spa', 'close walk to beach', 'close walk to town', 'close to village', 'surrounded by woods', 'golf resort', 'ski resort', 'gourmet kitchen', 'fishing', 'hiking-friendly', 'amazing garden', 'backyard wilderness', 'yacht', 'boating', 'close to downtown', 'game room', 'ac/heating', 'hot tub', 'jacuzzi', 'bicycles', 'surf', 'great amenities', 'nearby pond', 'fireplace', 'nearby lake', 'garage parking', 'great for photography', 'gym', 'loofers', 'fireplace', 'wildlife', 'nearby trails', 'close to train station', 'stargazing', 'vineyards', 'paddle-boat', 'kayak', 'dock', 'fitness center', 'bondage', 'ultra', 'funky', 'flaming'];

listingReview = ['Great.', 'Great find.', 'Beautiful view.', 'Great bargain.', 'Good ammenities.', 'Spectacular views.', 'Convenient location.', 'Excellent.', 'Wonderful.', 'Exceptional.', 'Very good.', 'Good for families.'];

months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

datesInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
years = [2019, 2020];

dates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

let listings = [];
generateListings = () => {
  let k;
  let obj;
  for (let i = 0; i < 100; i++) {
    obj = {};
    let title = listingAdjectives[Math.floor(Math.random() * listingAdjectives.length)] + ' ' + listingStyles[Math.floor(Math.random() * listingStyles.length)] + ' ' + listingAmenities[Math.floor(Math.random() * listingStyles.length)] + ' ' + listingAmenities[Math.floor(Math.random() * listingStyles.length)];
    obj.title = title.slice(0, 1).toUpperCase() + title.slice(1);
    obj.venue_type = listingType[Math.floor(Math.random() * listingType.length)];
    obj.bedrooms = Math.floor(Math.random() * 5 + 1);
    obj.sleep_capacity = obj.bedrooms * 2 + Math.floor(Math.random() * 3 + 1);
    obj.bathrooms = Math.floor(Math.random() * 3 + 1);
    obj.square_feet = Math.floor(Math.random() * 600 + 1) * 10 + 1000;
    obj.review_overview = listingReview[Math.floor(Math.random() * listingReview.length)];
    obj.rating = Math.floor(Math.random() * 10) / 10 + 4;
    obj.review_number = Math.floor(Math.random() * 200 + 15);
    obj.owner = faker.name.findName();
    obj.cleaning_fee = Math.floor(Math.random() * 100) + 10;
    obj.state = faker.address.state();
    obj.city = faker.address.city();
    k = i + 1;
    obj.pic = `https://c8.alamy.com/comp/EPF1YW/nun-with-handgun-isolated-on-white-EPF1YW.jpg`;
    listings.push(obj);
  }
};
generateListings();

const csvWriter = createCsvWriter({
  path: './dbhelpers/postgres/csv/postgresRecords.csv',
  header: [
    {id: 'title', title: 'TITLE'},
    {id: 'venue_type', title: 'VENUE_TYPE'},
    {id: 'bedrooms', title: 'BEDROOMS'},
    {id: 'bathrooms', title: 'BATHROOMS'},
    {id: 'sleep_capacity', title: 'SLEEP_CAPACITY'},
    {id: 'square_feet', title: 'SQUARE_FEET'},
    {id: 'review_overview', title: 'REVIEW_OVERVIEW'},
    {id: 'rating', title: 'RATING'},
    {id: 'review_number', title: 'REVIEW_NUMBER'},
    {id: 'owner', title: 'OWNER'},
    {id: 'cleaning_fee', title: 'CLEANING_FEE'},
    {id: 'state', title: 'STATE'},
    {id: 'city', title: 'CITY'},
    {id: 'pic', title: 'PIC'},
  ]
});

// const records = [
//   {name: 'Bob',  lang: 'French, English'},
//   {name: 'Mary', lang: 'English'}
// ];

csvWriter.writeRecords(listings)
  .then(() => {
    console.log('done writing to csv');
  });