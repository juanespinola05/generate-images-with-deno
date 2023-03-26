import { Options } from '$fresh/plugins/twind.ts'
import { apply } from 'twind'

export default {
  selfURL: import.meta.url,
  preflight: {
    'body': apply`bg-blue-200`,
  },
} as Options
