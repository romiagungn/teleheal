import './style.css';

export default function List(props) {
  const { items } = props;

  return (
    <div className="list">
      {items.map((item) => (
        <div className="list-item">
          <div className="list-image">
            <img src={item.image} alt={item.name} width="100%" height="100%" />
          </div>

          <div className="list-content">
            <div className="list-content-info">
              <span className="mb-1">{item.name}</span>
              <span>{item.address}</span>
            </div>

            <a href={item.url}>Lihat Detail</a>
          </div>
        </div>
      ))}
    </div>
  );
}
