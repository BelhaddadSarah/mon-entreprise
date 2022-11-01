import { configProfessionLibérale } from '@/pages/Simulateurs/configs/professionLibérale'
import { it } from 'vitest'
import professionsLibéralesSituations from './simulations-professions-libérales.yaml'
import { runSimulations } from './utils'

it('calculate simulations-professions-libérales', () => {
	runSimulations(
		professionsLibéralesSituations,
		[
			...(configProfessionLibérale.objectifs ?? []),
			...(configProfessionLibérale['objectifs cachés'] ?? []),
		],
		{
			...configProfessionLibérale.situation,
			'entreprise . activité . nature . libérale . réglementée': 'oui',
		}
	)
})
