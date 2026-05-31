import mercedesE180 from '../../public/e180.jpeg';
import grandWhite from '../../public/jeep-white.jpeg';
import grandBlack from '../../public/jeep-black.jpeg';
import mercedesC200 from '../../public/c200.jpeg';
import rangeSportBlack from '../../public/sport-black.jpeg';
import rangeSportWhite from '../../public/sport-white.jpeg';




const cars = [

  {
    id: 1,
    brand: 'Mercedes',
    name: 'Mercedes E180',
    type: 'Automatic',
    image: mercedesE180,
  },

  {
    id: 2,
    brand: 'Jeep',
    name: 'Grand Cherokee',
    type: 'Automatic',
    image: grandWhite ,
  },

  {
    id: 3,
    brand: 'Mercedes',
    name: 'Mercedes C200',
    type: 'Automatic',
    image:mercedesC200,
  },

  {
    id: 4,
    brand: 'Jeep',
    name: 'Grand Cherokee',
    type: 'Automatic',
    image: grandBlack ,
  },
  {
    id: 5,
    brand: 'RangeRover',
    name: 'Range Rover Black Sport',
    type: 'Automatic',
    image: rangeSportBlack ,
  },
 {
    id: 6,
    brand: 'RangeRover',
    name: 'Range Rover White Sport',
    type: 'Automatic',
    image: rangeSportWhite ,
  },
]

export default cars
