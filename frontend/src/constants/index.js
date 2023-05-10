// Navlinks
import {
  wardrobe,
  bed,
  sidetable,
  dressingtable,
  kitchencabinet,
  sink,
  chimney,
  trolley,
  sofabed,
  table,
  chair,
  tvunit,
  showcase
} from '../assets'

const navlinks = [
  { tag: 'Home', url: '', type: 'text', icon: 'none' },
  { tag: 'Bedroom', url: '/bedroom', type: 'text', icon: 'none' },
  { tag: 'Kitchen', url: '/kitchen', type: 'text', icon: 'none' },
  { tag: 'Living', url: '/livingroom', type: 'text', icon: 'none' },
  { tag: 'Repairing', url: '/repair', type: 'text', icon: 'none' },
  { tag: 'Cart', url: '/cart', type: 'icon', name: 'cart-outline' },
  {
    tag: 'Profile',
    url: '/profile',
    type: 'icon',
    name: 'person-circle-outline'
  }
]

// Catalogues

const bedroomCatalogue = [
  {
    tag: 'Wardrobe',
    url: 'bedroom/wardrobe',
    goto: 'Search through 300+ designs',
    src: wardrobe
  },
  {
    tag: 'Bed',
    url: 'bedroom/bed',
    goto: 'Search through 350+ designs',
    src: bed
  },
  {
    tag: 'Side Table',
    url: 'bedroom/sidetable',
    goto: 'Search through 50+ designs',
    src: sidetable
  },
  {
    tag: 'Dressing Table',
    url: '/dressingtable',
    goto: 'Search through 50+ designs',
    src: dressingtable
  }
]

const kitchenCatalogue = [
  {
    tag: 'Cabinet',
    url: 'kitchen/cabinet',
    goto: 'Search through 50+ designs',
    src: kitchencabinet
  },
  {
    tag: 'Sink',
    url: 'kitchen/sink',
    goto: 'Search through 50+ designs',
    src: sink
  },
  {
    tag: 'Chimney',
    url: 'kitchen/chimney',
    goto: 'Search through 50+ designs',
    src: chimney
  },
  {
    tag: 'Trolley',
    url: 'kitchen/trolley',
    goto: 'Search through 50+ designs',
    src: trolley
  }
]

const livingCatalogue = [
  {
    tag: 'Sofa',
    url: 'living/sofa',
    goto: 'Search through 50+ designs',
    src: sofabed
  },
  {
    tag: 'Table',
    url: 'living/table',
    goto: 'Search through 50+ designs',
    src: table
  },
  {
    tag: 'Chair',
    url: 'living/chair',
    goto: 'Search through 50+ designs',
    src: chair
  },
  {
    tag: 'TV Unit',
    url: 'living/tvunit',
    goto: 'Search through 50+ designs',
    src: tvunit
  },
  {
    tag: 'Showcase',
    url: 'living/showcase',
    goto: 'Search through 50+ designs',
    src: showcase
  }
]

export { bedroomCatalogue, kitchenCatalogue, livingCatalogue, navlinks }
