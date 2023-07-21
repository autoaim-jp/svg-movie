const createSvg = ({ svgConfig }) => {
  console.dir(svgConfig)

  const svgList = []
  svgList.push('<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">')
  Object.entries(svgConfig.objList).forEach(([objId, objJson]) => {
    const lineList = []
    const type = objJson['type']
    Object.entries(objJson).forEach(([attr, value]) => {
      if (attr === 'type') {
        return
      }

      lineList.push(`${attr}="${value}"`)
    })

    const line = `<${type} ${lineList.join(' ')} />`
    svgList.push(line)
  })
  // svgList.push('  <circle cx="50" cy="50" r="40" fill="none" stroke="black"/>')
  svgList.push('</svg>')

  const svg = svgList.join('\n')

  return svg
}

export default {
  createSvg,
}

