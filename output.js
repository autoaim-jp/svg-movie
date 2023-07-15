const saveSvg = ({ fs, svg, OUTPUT_FILE_PATH }) => {
  fs.writeFileSync(OUTPUT_FILE_PATH, svg)
}

export default {
  saveSvg,
}

