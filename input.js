const mod = {}
const init = ({ fs, path }) => {
  mod.fs = fs
  mod.path = path
}

const getFileNameByArg = ({ argv }) => {
  return argv[2]
}

const getSvgConfig = ({ INPUT_FOLDER_PATH, fileName }) => {
  const content = mod.fs.readFileSync(INPUT_FOLDER_PATH + fileName, 'utf-8')
  const json = JSON.parse(content)
  return json
}

export default {
  init,
  getFileNameByArg,
  getSvgConfig,
}

