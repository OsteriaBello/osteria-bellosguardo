export interface SanityImage {
  asset?: { _ref: string }
}

export interface SanitySiteSettings {
  restaurantName?: string
  logo?: SanityImage
  logoUrl?: string
  favicon?: SanityImage
  seo?: {
    metaTitlePt?: string
    metaTitleEn?: string
    metaDescriptionPt?: string
    metaDescriptionEn?: string
    ogImage?: SanityImage
    ogImageUrl?: string
  }
  whatsappNumber?: string
  reservationLink?: string
}

export interface SanityHero {
  backgroundImages?: Array<{
    image?: SanityImage
    imageUrl?: string
    alt?: string
    position?: string
  }>
  subtitlePt?: string
  subtitleEn?: string
  descriptionPt?: string
  descriptionEn?: string
  ctaTextPt?: string
  ctaTextEn?: string
  tripAdvisorBadge?: {
    image?: SanityImage
    imageUrl?: string
    link?: string
  }
}

export interface SanityMenuItem {
  _id: string
  namePt?: string
  nameEn?: string
  descriptionPt?: string
  descriptionEn?: string
  price?: string
  priceSecondary?: string
  subcategorySlug?: string
  image?: SanityImage
  imageUrl?: string
  tags?: string[]
  isAvailable?: boolean
}

export interface SanityMenuCategory {
  _id: string
  menuType?: 'food' | 'drinks'
  slug?: { current: string }
  titlePt?: string
  titleEn?: string
  tabLabelPt?: string
  tabLabelEn?: string
  notePt?: string
  noteEn?: string
  displayType?: 'standard' | 'twoColumn' | 'table' | 'grouped'
  images?: Array<{
    image?: SanityImage
    imageUrl?: string
    caption?: string
  }>
  subcategories?: Array<{
    titlePt?: string
    titleEn?: string
    slug?: { current: string }
  }>
  items?: SanityMenuItem[]
}

export interface SanityGallery {
  titlePt?: string
  titleEn?: string
  images?: Array<{
    image?: SanityImage
    imageUrl?: string
    altPt?: string
    altEn?: string
  }>
  carouselImages?: Array<{
    image?: SanityImage
    imageUrl?: string
    alt?: string
  }>
  roomSectionTitlePt?: string
  roomSectionTitleEn?: string
  roomDescriptionPt?: string
  roomDescriptionEn?: string
}

export interface SanityNews {
  _id: string
  titlePt?: string
  titleEn?: string
  contentPt?: string
  contentEn?: string
  type?: 'news' | 'event' | 'announcement'
  image?: SanityImage
  imageUrl?: string
  eventDate?: string
  published?: boolean
  publishedAt?: string
}

export interface SanityReviews {
  tripadvisor?: {
    logo?: SanityImage
    logoUrl?: string
    link?: string
    labelPt?: string
    labelEn?: string
    textPt?: string
    textEn?: string
  }
  thefork?: {
    logo?: SanityImage
    logoUrl?: string
    link?: string
    labelPt?: string
    labelEn?: string
    textPt?: string
    textEn?: string
  }
  additionalReviews?: Array<{
    platform?: string
    logo?: SanityImage
    logoUrl?: string
    link?: string
    labelPt?: string
    labelEn?: string
    textPt?: string
    textEn?: string
  }>
}

export interface SanityContact {
  reservationsTitlePt?: string
  reservationsTitleEn?: string
  hoursTitlePt?: string
  hoursTitleEn?: string
  weekdaysHoursPt?: string
  weekdaysHoursEn?: string
  weekendHoursPt?: string
  weekendHoursEn?: string
  contactTitlePt?: string
  contactTitleEn?: string
  address?: {
    street?: string
    neighborhood?: string
    city?: string
    country?: string
  }
  phone?: string
  email?: string
  googleMapsEmbed?: string
  contactImage?: SanityImage
  contactImageUrl?: string
  howToReachPt?: string
  howToReachEn?: string
  talkToUsPt?: string
  talkToUsEn?: string
}

export interface SanityFooter {
  experiencePt?: string
  experienceEn?: string
  quickLinksTitlePt?: string
  quickLinksTitleEn?: string
  contactTitlePt?: string
  contactTitleEn?: string
  followUsTitlePt?: string
  followUsTitleEn?: string
  address?: {
    street?: string
    neighborhood?: string
    city?: string
    country?: string
  }
  socialLinks?: Array<{
    platform?: string
    url?: string
    icon?: SanityImage
    iconUrl?: string
    label?: string
  }>
  complaintsLinkPt?: string
  complaintsLinkEn?: string
  complaintsUrl?: string
  rightsTextPt?: string
  rightsTextEn?: string
  createdBy?: {
    text?: string
    url?: string
  }
}

export interface SanityTranslations {
  nav?: {
    menuPt?: string
    menuEn?: string
    newsPt?: string
    newsEn?: string
    galleryPt?: string
    galleryEn?: string
    reservationsPt?: string
    reservationsEn?: string
  }
  menu?: {
    titlePt?: string
    titleEn?: string
    descriptionPt?: string
    descriptionEn?: string
    foodMenuBtnPt?: string
    foodMenuBtnEn?: string
    drinksMenuBtnPt?: string
    drinksMenuBtnEn?: string
    foodMenuTitlePt?: string
    foodMenuTitleEn?: string
    drinksMenuTitlePt?: string
    drinksMenuTitleEn?: string
  }
  news?: {
    titlePt?: string
    titleEn?: string
    subtitlePt?: string
    subtitleEn?: string
    noNewsPt?: string
    noNewsEn?: string
    typeNewsPt?: string
    typeNewsEn?: string
    typeEventPt?: string
    typeEventEn?: string
    typeAnnouncementPt?: string
    typeAnnouncementEn?: string
  }
  form?: {
    fullNamePt?: string
    fullNameEn?: string
    datePt?: string
    dateEn?: string
    timePt?: string
    timeEn?: string
    guestsPt?: string
    guestsEn?: string
    personPt?: string
    personEn?: string
    peoplePt?: string
    peopleEn?: string
    reservePt?: string
    reserveEn?: string
  }
}

export interface SiteData {
  siteSettings: SanitySiteSettings | null
  hero: SanityHero | null
  foodMenu: SanityMenuCategory[]
  drinksMenu: SanityMenuCategory[]
  gallery: SanityGallery | null
  news: SanityNews[]
  reviews: SanityReviews | null
  contact: SanityContact | null
  footer: SanityFooter | null
  translations: SanityTranslations | null
}