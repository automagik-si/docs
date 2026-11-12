// Arca's supplied icons stay unchanged; its small cut is used below 24 px.
export const productLogo = (slug) => slug === 'arca'
  ? '/brand/arca-icon-ivory.svg'
  : `/brand/${slug}-logo.png`

export const productMenuLogo = (slug) => slug === 'arca'
  ? '/brand/arca-icon-small-ivory.svg'
  : productLogo(slug)
