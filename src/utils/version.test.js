import { describe, it, expect } from 'vitest'
import { etiquetaVersion } from './version'

describe('etiquetaVersion', () => {
  it('reconoce un release', () => {
    expect(etiquetaVersion('v1.0.0')).toBe('Release v1.0.0')
  })

  it('reconoce un build de desarrollo', () => {
    expect(etiquetaVersion('dev-a1b2c3d')).toBe('Desarrollo (a1b2c3d)')
  })

  it('usa Local cuando no hay versión del pipeline', () => {
    expect(etiquetaVersion('0.0.0')).toBe('Local')
  })
})
