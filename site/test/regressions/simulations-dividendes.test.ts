import { configDividendes } from '@/pages/Simulateurs/configs/dividendes'
import { it } from 'vitest'
import dividendesSituations from './simulations-dividendes.yaml'
import { runSimulations } from './utils'

it('calculate simulations-dividendes', () => {
	runSimulations(
		dividendesSituations,
		[
			...(configDividendes.objectifs ?? []),
			...(configDividendes['objectifs cachés'] ?? []),
			'bénéficiaire . dividendes . cotisations et contributions',
			'impôt . montant',
			'impôt . revenu imposable',
			'bénéficiaire . dividendes . imposables',
			"impôt . taux d'imposition",
		],
		configDividendes.situation
	)
})
