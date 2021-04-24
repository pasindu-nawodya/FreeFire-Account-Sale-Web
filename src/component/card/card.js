import {Link} from 'react-router-dom';
import './card-style.css';

const Card = (props) => {
    return(
        <div style={{width:"80%", margin:"auto"}}>
        <div className="card-columns">
        { props.items && props.items.map(item =>(
            <div className="card mt-5 mb-4" style={{width: "275px"}}>
                <img className="card-img-top" src={item.image} alt="Card cap" />
                <div className="card-body text-center">
                    <h3>{"ID : "+ item.accountid}</h3>
                    <p className="card-text">{"Payment Type : " +item.price_t}</p>
                    <p className="card-text">{"Account Level: " + item.level}</p>
                </div>
                <div style={{margin:"auto",width:"fit-content", paddingLeft:"20px"}}>
                <Link to={"/details/"+item._id}>
                    <button className="btn btn-info" style={{paddingLeft:"50px", paddingRight: "50px", marginBottom:"20px"}}>More Details</button>
                </Link>   
                </div>
            </div>

        ))}
        </div>
        </div>
    );
}

export default Card;