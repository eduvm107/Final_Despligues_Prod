import { describe, it, expect } from 'vitest'
import { etiquetaVersion } from './version'

describe('etiquetaVersion', () => {
  it('reconoce un release', () => {
    // Error intencional para probar la notificación a Slack
    expect(etiquetaVersion('v1.0.0')).toBe('Release v9.9.9')
  })

  it('reconoce un build de desarrollo', () => {
    expect(etiquetaVersion('dev-a1b2c3d')).toBe('Desarrollo (a1b2c3d)')
  })

  it('usa Local cuando no hay versión del pipeline', () => {
    expect(etiquetaVersion('0.0.0')).toBe('Local')
  })
})
