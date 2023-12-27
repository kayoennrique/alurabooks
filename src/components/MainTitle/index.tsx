import './MainTitle.css'

interface MainTitleProps {
    text: string
}
const MainTitle = ({ text } : MainTitleProps) => {

    return (<h1 className="MainTitle">{text}</h1>);

}

export default MainTitle;