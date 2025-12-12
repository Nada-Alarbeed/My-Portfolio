const Button = ({ title, link, className = "" }) => {
    const baseClasses = "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
    
    if (link) {
        return (
            <a 
                href={link} 
                className={`${baseClasses} ${className}`} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <span>{title}</span>
            </a>
        );
    }
    return (
        <div className={`${baseClasses} ${className}`}>
            <span>{title}</span>
        </div>
    );
};

export default Button