const AboutRight = ({ head, children, direction = "flex-col" }) => {
    return (
        <div className="bg-porcelain p-6 rounded-xl border-l-4 border-desert-sand shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="text-2xl font-bold text-midnight-violet mb-3 flex items-center gap-2">
                {head}
            </span>
            <div className={`flex ${direction} gap-4`}>
                {children}
            </div>
        </div>     
    )
}

const Experience = ({ dot, p }) => {
    return (
        <ul>
            <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                <span className="text-desert-sand text-xl font-bold group-hover:scale-110 transition-transform duration-300">{dot}</span>
                <p className="text-dark">{p}</p>
            </li>
        </ul>
    )
}

export { AboutRight, Experience }