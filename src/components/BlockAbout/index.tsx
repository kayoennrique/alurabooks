import './BlockAbout.css';

interface BlockAboutProps {
    title?: string
    body?: string
}

const BlockAbout = ({ title, body } : BlockAboutProps) => {
    return (<div className='about-block'>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>);
}

export default BlockAbout;