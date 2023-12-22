import './Title.css';

interface TitleProps {
    text: string
}

const Title = ({ text } : TitleProps) => {
    return (<h4 className='title-internal'>{text}</h4>);
}

export default Title;