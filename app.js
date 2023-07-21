import fs from 'fs'
import path from 'path'

import setting from './setting.js'
import output from './output.js'
import core from './core.js'
import input from './input.js'

const init = () => {
  input.init({ fs, path })
}

const main = () => {
  init()

  const fileName = input.getFileNameByArg({ argv: process.argv })

  const { INPUT_FOLDER_PATH, OUTPUT_FILE_PATH } = setting

  const svgConfig = input.getSvgConfig({ INPUT_FOLDER_PATH, fileName })

  const svg = core.createSvg({ svgConfig })

  output.saveSvg({ fs, OUTPUT_FILE_PATH, svg })
}

main()

