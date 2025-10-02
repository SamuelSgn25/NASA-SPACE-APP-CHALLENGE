// Minimal NASA Giovanni data stub. Replace with actual fetch as needed.

const SUPPORTED_VARIABLES = [
  'air_temperature',
  'precipitation',
  'wind',
  'cloud_cover',
  'uv_index'
]

export function isSupportedVariable(variableKey) {
  return SUPPORTED_VARIABLES.includes(variableKey)
}

export async function fetchGiovanniExample(variableKey = 'air_temperature') {
  if (!isSupportedVariable(variableKey)) {
    throw new Error(`Unsupported variable: ${variableKey}`)
  }
  // Placeholder example payload, since Giovanni often requires authenticated workflows
  return {
    variable: variableKey,
    units: variableKey === 'air_temperature' ? '°C' : variableKey === 'precipitation' ? 'mm' : variableKey === 'wind' ? 'm/s' : variableKey === 'cloud_cover' ? '%' : 'index',
    timeframe: 'last_24h',
    location: 'Paris, FR',
    sample: [
      { t: Date.now() - 6 * 3600 * 1000, v: 18.2 },
      { t: Date.now() - 3 * 3600 * 1000, v: 19.1 },
      { t: Date.now() - 1 * 3600 * 1000, v: 20.0 }
    ]
  }
}


