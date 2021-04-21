import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PancakeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/pancake-lottery-bunny.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'Easter Battle | PancakeSwap',
    description: 'Register now for the PancakeSwap Easter battle!',
    image: 'https://pancakeswap.finance/images/easter-battle.png',
  },
  '/pools': {
    title: 'Syrup Pools | PancakeSwap',
    description: 'Syrupppy goodness',
    image: 'https://pancakeswap.finance/images/3dpan.png',
  },
  '/farms': {
    title: 'Farms | PancakeSwap',
    description: 'farmy boi',
    image: 'https://pancakeswap.finance/images/ifo-bunny.png',
  },
  '/lottery': {
    title: 'Lottery | PancakeSwap',
    description: '',
    image: 'https://pancakeswap.finance/images/.png',
  },
  '/ifo': {
    title: 'IFO | PancakeSwap',
    description: '',
    image: 'https://pancakeswap.finance/images/ifo.png',
  },
  '/collectibles': {
    title: 'Collectibles | PancakeSwap',
    description: '',
    image: 'https://pancakeswap.finance/images/.png',
  },
}
