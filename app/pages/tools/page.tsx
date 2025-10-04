import '../../assets/templates/ore-ui/cards/ore-ui-card.css'
import './tools.css'
import Link from "next/link"

const availableTools = [
    {
        "name": "HEX To RGb Float",
        "destination": "/tools/color-converter"
    },
    {
        "name": "HEX To RGb Float",
        "destination": "/tools/hex-to-rgb"
    }
]

const Tools = () => {

    return <div className="tools-wrap">
        {availableTools.map((e, k) => (
            <div className="card" key={k}>
                <div className="card-header">
                    <p>{e.name}</p>
                </div>
                <div className="card-main">
                    {/* <iframe src=""></iframe> */}
                </div>
                <div className="card-footer">
                    <Link href={e.destination}>Go</Link>
                </div>
            </div>
        ))}
    </div>
}

export default Tools