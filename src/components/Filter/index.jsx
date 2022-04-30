import './style.css';

export default function Filter(props) {
    const { options, handleFilter } = props;

    return (
        <div className='options'>
            {options.map((option) => (
                <div className='option-item' onClick={() => handleFilter(option)}>
                    {option}
                </div>
            ))}
        </div>
    );
}
