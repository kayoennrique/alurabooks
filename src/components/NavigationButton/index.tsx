import './NavigationButton.css';

interface NavigationButtonProps {
    imageSrc: string
    textAltSrc: string
    text?: string
    onClick?: () => void
}

const NavigationButton = ({ imageSrc, text, textAltSrc, onClick }: NavigationButtonProps) => {
    const manipulateClick = () => {
        if (onClick) {
            onClick()
        }
    }
    
    return (<button className="btn-nav" onClick={manipulateClick}>
        <img src={imageSrc} alt={textAltSrc} />
        {text}
    </button>);
}

export default NavigationButton;