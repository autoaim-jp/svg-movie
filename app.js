import fs from 'fs'

import core from './core.js'
import output from './output.js'
import setting from './setting.js'

const main = () => {
  const svg = core.createSvg()
  const OUTPUT_FILE_PATH = setting.OUTPUT_FILE_PATH
  output.saveSvg({ fs, OUTPUT_FILE_PATH, svg })
}

main()

