import React from 'react'
import {Parser } from 'html-to-react'
function converthtml(htmlInput="<h1>Hello World </h1>"){
    const htmlToReactParser = new Parser();
    const reactElement = htmlToReactParser.parse(htmlInput)
    return reactElement
}

export default converthtml