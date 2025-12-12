const Title = ({ title, subtitle, icon }) => {
    return (
        <div className="text-center flex flex-col justify-center items-center gap-5 " >
            <span className="relative text-midnight-violet">
                {icon}
            </span>
            <h3 className="text-3xl font-bold text-midnight-violet">{title}</h3>
            <h2 className="text-xl text-blackberry-cream font-medium">{subtitle}</h2>
        </div>
    )
}

export default Title