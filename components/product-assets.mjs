// Arca's supplied icons stay unchanged; its small cut is used below 24 px.
// Automagik's come from the approved logo set, copied unchanged (scripts/brand-files.json):
// the lockup for small sizes, with cream letters for this dark site, in the header, the footer
// and the menu; and for share images the mark on its ink ground, a PNG that reads on any page
// colour. A newer set is a file swap plus that list.
export const AUTOMAGIK_LOCKUP = '/brand/automagik-lockup-three-colours-cream-header.svg'
const SHARE_IMAGES = { arca: '/brand/arca-icon-ivory.svg', automagik: '/brand/icon-512.png' }
const MENU_LOGOS = { arca: '/brand/arca-icon-small-ivory.svg', automagik: AUTOMAGIK_LOCKUP }

// A product's picture in share previews (og:image, twitter:image).
export const productLogo = (slug) => SHARE_IMAGES[slug] ?? `/brand/${slug}-logo.png`

export const productMenuLogo = (slug) => MENU_LOGOS[slug] ?? productLogo(slug)
