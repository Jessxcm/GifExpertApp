import { render } from "@testing-library/react"
import { GifItem } from "../src/components"

describe('pruebas en GifItem', () => { 

    test('debe hacer match con el snapshot ', () => {
        render(<GifItem></GifItem>);
     })

 })