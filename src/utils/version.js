// Convierte la versión que escribe el pipeline en un texto legible.
//   v1.0.0      -> "Release v1.0.0"      (build creado por un tag)
//   dev-a1b2c3d -> "Desarrollo (a1b2c3d)" (build de un push o Pull Request)
//   0.0.0       -> "Local"               (compilado en tu PC)
export function etiquetaVersion(version) {
  if (/^v\d+\.\d+\.\d+$/.test(version)) return `Release ${version}`
  if (version.startsWith('dev-')) return `Desarrollo (${version.slice(4)})`
  return 'Local'
}
