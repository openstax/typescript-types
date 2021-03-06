const fs = require('fs')
const path = require('path')

const orig = fs.readFileSync(path.join(__dirname, './node_modules/typescript/lib/lib.dom.d.ts'), 'utf-8')
const converted = orig
    .replace(/^type/gm, 'export type')
    .replace(/^interface/gm, 'export interface')
    .replace(/^declare/gm, 'export')

// Do some custom renaming:
const converted2 = converted
    .replace(/^export var URL: \{/gm, 'export var URLConstructor: {')
    .replace(/^export var DOMParser: \{/gm, 'export var DOMParserConstructor: {')
    .replace(/^export var KeyboardEvent: \{/gm, 'export var KeyboardEventConstructor: {')
    .replace(/^export var ResizeObserver: \{/gm, 'export var ResizeObserverConstructor: {')

fs.writeFileSync(path.join(__dirname, 'lib.dom.d.ts'), converted2)
