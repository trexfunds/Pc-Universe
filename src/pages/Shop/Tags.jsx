
const title = "Our Popular Tags";


const tagsList = [
    {
        link: '#',
        text: 'GPU',
    },
    {
        link: '#',
        text: 'RTX 3060',
    },
    {
        link: '#',
        text: 'GeForce RTX',
    },
    {
        link: '#',
        text: '1660 Ti',
    },
    {
        link: '#',
        text: '4060',
    },
    {
        link: '#',
        text: 'RX 6600',
    },
    {
        link: '#',
        text: 'RTX 4070',
    },
    {
        link: '#',
        text: 'RX 580',
    },
    {
        link: '#',
        text: 'GDDR5',
    },
]

const Tags = () => {
    return (
        <div className="widget widget-tags">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {tagsList.map((val, i) => (
                    <li key={i}><a href={val.link}>{val.text}</a></li>
                ))}
            </ul>
        </div>
    );
}
 
export default Tags;