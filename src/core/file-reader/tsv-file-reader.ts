import {FileReaderInterface} from './file-reader.interface.js';
import {readFileSync} from 'node:fs';
import {Offer} from '../../types/offer.type.js';
import {CityType} from '../../types/city.type.js';
import {TypeHousing} from '../../types/typeHousing.js';
import {ConveniencesType} from '../../types/conveniences.type.js';
import {User} from '../../types/user.type.js';
import {CoordinatesType} from '../../types/coordinates.type.js';

export default class TsvFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) {
  }

  public read(): void {
    this.rawData = readFileSync(this.filename, {encoding: 'utf-8'});
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }
    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([name, description, date, city, previewImg, images, flagIsPremium, flagIsFavourites, rating, typeHousing, countRooms, countPeople, price, conveniences, author, countComments, coordinates]) => ({
        name: name,
        description: description,
        date: new Date(date),
        city: city as CityType,
        previewImg: previewImg,
        images: images.split(';'),
        flagIsPremium: flagIsPremium as unknown as boolean,
        flagIsFavourites: flagIsFavourites as unknown as boolean,
        rating: rating as unknown as 1 | 2 | 3 | 4 | 5,
        typeHousing: typeHousing as TypeHousing,
        countRooms: countRooms as unknown as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
        countPeople: countPeople as unknown as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
        price: Number.parseInt(price, 10),
        conveniences: conveniences as ConveniencesType,
        author: author as unknown as User,
        countComments: Number.parseInt(countComments, 10),
        coordinates: coordinates.split(',') as unknown as CoordinatesType,
      }));
  }
}
