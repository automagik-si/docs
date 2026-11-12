// Arca's supplied icons stay unchanged; its small cut is used below 24 px.
// Automagik's, Genie's and Omni's come from the approved logo set, copied unchanged
// (scripts/brand-files.json): each one's lockup for small sizes (the triskle in colour, the
// name in cream letters for this dark site, its sparkle in the product's colour), in the
// header and the menu, and Automagik's in the footer too. Their share image is the mark on
// its ink ground, a PNG that reads on any page colour: the triskle is every product's mark.
// A newer set is a file swap plus that list.
export const LOCKUPS = {
  automagik: '/brand/automagik-lockup-three-colours-cream-header.svg',
  genie: '/brand/genie-lockup-three-colours-cream-header.svg',
  omni: '/brand/omni-lockup-three-colours-cream-header.svg',
}
export const AUTOMAGIK_LOCKUP = LOCKUPS.automagik
const MARK = '/brand/icon-512.png'
const SHARE_IMAGES = { arca: '/brand/arca-icon-ivory.svg', automagik: MARK, genie: MARK, omni: MARK }
const MENU_LOGOS = { arca: '/brand/arca-icon-small-ivory.svg', ...LOCKUPS }

// A product's picture in share previews (og:image, twitter:image).
export const productLogo = (slug) => SHARE_IMAGES[slug] ?? `/brand/${slug}-logo.png`

export const productMenuLogo = (slug) => MENU_LOGOS[slug] ?? productLogo(slug)
