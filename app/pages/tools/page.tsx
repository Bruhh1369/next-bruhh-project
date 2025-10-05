import '../../assets/templates/ore-ui/cards/ore-ui-card.css'
import './tools.css'
import Link from "next/link"
import '../../assets/templates/ore-ui/buttons/ore-ui-button.scss'

const availableTools = [
    {
        name: "HEX To RGb Float",
        destination: "/tools/color-converter"
    }
]

const Tools = () => {

    return <div className="tools-wrap">
        {availableTools.map((e, k) => (
            <div className="card" key={k}>
                <div className="card-header">
                    <p>{e.name}</p>
                </div>
                <div className="card-footer">
                    <Link className="ore-button open-button" href={e.destination} rel="noopener noreferrer">
                        <p className="button-text">Open</p>
                    </Link>
                </div>
            </div>
        ))}
    </div>
}

export default Tools