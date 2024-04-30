import { heroNav } from './components/hero.js'
import { footer } from './components/footer.js'
import { navSecondary } from './components/nav_secondary.js'
import { experts } from './components/experts.js'
import { banner } from './components/banner.js'
import { cardsPromo } from './components/cards_promo.js'
import { cardsItems } from './components/cards_items.js'

document.querySelector('#app').innerHTML = `
${heroNav()}
${navSecondary()}
${experts()}
${banner()}
${cardsPromo()}
${cardsItems()}
${footer()}
`
