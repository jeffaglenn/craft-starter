import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

export function createSvgSpritePlugin(options = {}) {
    const {
        iconsDir = 'src/icons',
        outputFileName = 'icons.svg'
    } = options

    return {
        name: 'svg-sprite-preserving',
        generateBundle() {
            const files = readdirSync(iconsDir).filter(file => file.endsWith('.svg'))

            let sprite = '<svg xmlns="http://www.w3.org/2000/svg">'

            files.forEach(file => {
                const filePath = join(iconsDir, file)
                const content = readFileSync(filePath, 'utf-8')
                const id = file.replace('.svg', '')

                // Extract attributes from root svg and convert to symbol
                const svgMatch = content.match(/<svg([^>]*)>(.*?)<\/svg>/s)
                if (svgMatch) {
                    const attributes = svgMatch[1]
                    const innerContent = svgMatch[2]

                    // Convert svg attributes to symbol, preserve all except xmlns
                    const cleanAttributes = attributes
                        .replace(/xmlns="[^"]*"/g, '')
                        .replace(/\s+/g, ' ')
                        .trim()

                    sprite += `<symbol id="${id}" ${cleanAttributes}>${innerContent}</symbol>`
                }
            })

            sprite += '</svg>'

            this.emitFile({
                type: 'asset',
                fileName: outputFileName,
                source: sprite
            })
        }
    }
}