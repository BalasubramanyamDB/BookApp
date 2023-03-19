import '../Modal/Modal.css';
import { GrFormClose } from "react-icons/fa";


const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let rating = (item.volumeInfo.rating ) 
    if (rating === undefined){
        rating = Math.floor(Math.random() * 5);
    }  
    let category = item.volumeInfo.category
    if (category === undefined){
        category = Math.floor(Math.random() * 4)+1;	
    }
    console.log(category)
    console.log(rating)
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><p>x</p></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h5>{item.volumeInfo.title}</h5>
                            <h5>Author: {item.volumeInfo.authors}</h5>
                            <h5 className="avg-cat"> Rating: {rating}</h5><br/>
                            {/* <h5>{category}</h5> */}
                            <a href={item.volumeInfo.previewLink} target="_blank"><button>Read now</button></a>
                        </div>
                    </div>
                    <div className="description">
                        <h4 >{item.volumeInfo.description}</h4>
                    </div>
                </div>
            </div>
        </>
    )
    // <i className='fas fa-times'></i>
}
export default Modal

