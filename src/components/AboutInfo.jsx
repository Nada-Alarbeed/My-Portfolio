const AboutInfo = ({ title, icon }) => {
    return (
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-light transition-all duration-300">
            <span className="text-desert-sand text-xl">
                {icon}
            </span>
            <h3 className="text-dark font-medium">{title}</h3>
        </div>
    )
}

export default AboutInfo