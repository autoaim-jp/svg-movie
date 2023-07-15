const createSvg = () => {
  const svgList = []
  svgList.push('<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">')
  svgList.push('  <circle cx="50" cy="50" r="40" fill="none" stroke="black"/>')
  svgList.push('</svg>')

  const svg = svgList.join('\n')

  return svg
}

export default {
  createSvg,
}

