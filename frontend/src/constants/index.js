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

// Navlinks static data
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

// Footer links static data
const footerlinks = [
  {
    title: 'Company',
    links: [
      { tag: 'About Us', url: '/aboutus' },
      { tag: 'Contact Us', url: '/contactus' },
      { tag: 'Categories', url: '/categories' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { tag: 'Terms & Conditions', url: '/termsandconditions' },
      { tag: 'Privacy Policy', url: '/privacypolicy' },
      { tag: 'Cookies Policy', url: '/cookiespolicy' }
    ]
  },
  {
    title: 'Support',
    links: [
      { tag: 'Help Center', url: '/helpcenter' },
      { tag: 'Safety Center', url: '/safetycenter' },
      { tag: 'FAQs', url: '/faqs' },
      { tag: 'Community Guidelines', url: '/communityguidelines' }
    ]
  }
]

// Catalogues

const bedroomCatalogue = [
  {
    tag: 'Wardrobe',
    url: '/wardrobe',
    goto: 'Search through 300+ designs',
    src: wardrobe
  },
  {
    tag: 'Bed',
    url: '/bed',
    goto: 'Search through 350+ designs',
    src: bed
  },
  {
    tag: 'Side Table',
    url: '/sidetable',
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
    url: '/cabinet',
    goto: 'Search through 50+ designs',
    src: kitchencabinet
  },
  {
    tag: 'Sink',
    url: '/sink',
    goto: 'Search through 50+ designs',
    src: sink
  },
  {
    tag: 'Chimney',
    url: '/chimney',
    goto: 'Search through 50+ designs',
    src: chimney
  },
  {
    tag: 'Trolley',
    url: '/trolley',
    goto: 'Search through 50+ designs',
    src: trolley
  }
]

const livingCatalogue = [
  {
    tag: 'Sofa',
    url: '/sofa',
    goto: 'Search through 50+ designs',
    src: sofabed
  },
  {
    tag: 'Table',
    url: '/table',
    goto: 'Search through 50+ designs',
    src: table
  },
  {
    tag: 'Chair',
    url: '/chair',
    goto: 'Search through 50+ designs',
    src: chair
  },
  {
    tag: 'TV Unit',
    url: '/tvunit',
    goto: 'Search through 50+ designs',
    src: tvunit
  },
  {
    tag: 'Showcase',
    url: '/showcase',
    goto: 'Search through 50+ designs',
    src: showcase
  }
]

export {
  bedroomCatalogue,
  kitchenCatalogue,
  livingCatalogue,
  navlinks,
  footerlinks
}
