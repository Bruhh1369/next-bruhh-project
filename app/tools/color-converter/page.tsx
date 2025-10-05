'use client'

import { useState } from 'react'
import '../../assets/templates/ore-ui/cards/ore-ui-card.css'
import '../../assets/templates/ore-ui/buttons/ore-ui-button.scss'
import './style.css'
import { Card, CardFooter, CardHeader, CardMain } from '@/app/assets/templates/ore-ui/cards/ore-ui-card'

const HexColorConvert = () => {

    const [color, setColor] = useState<string>('')

    function convertColor(hexColor: string): number[] {
        const hex = hexColor.toString().replace(/^#/, "");
        return [0, 2, 4].map(i =>
            Math.round((parseInt(hex.slice(i, i + 2), 16) / 255) * 1000) / 1000
        );
    }

    function convertedColor(): string {
        const result = convertColor(color)
        if (result.some(Number.isNaN)) return ""
        const mapped = result.map(num => num.toFixed(3))
        return `[${mapped.join(", ")}]`
    }

    return (
        <div className="hex-color-convert">
            <Card>
                <CardHeader>
                    <p>HEX to RGB Float</p>
                </CardHeader>
                <CardMain className="color-main">
                    <input type="color" id="colorInputBox" disabled value={color} />
                </CardMain>
                <CardFooter className="color-footer">
                    <input
                        type="text"
                        id="colorInput" onChange={e => {
                            const value = "#" + e.target.value
                            setColor(value)
                        }
                        }
                        placeholder="Enter HEX code. E.g. ff5733"
                    />
                    <div className="final-result">
                        <input type="text" id="colorResult" value={convertedColor()} readOnly />
                        <button className="ore-button"
                            id="copyColor"
                            onClick={() => {
                                const result = document.getElementById('colorResult') as HTMLInputElement
                                if (result && result.value) {
                                    navigator.clipboard.writeText(result.value)
                                }
                            }}
                        >
                            <p className="button-text">Copy</p>
                        </button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default HexColorConvert