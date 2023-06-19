import "./FotogalleryImages.css";

const FotogalleryImages = (props) => {

  return (
    <div className="fotogallery-images">
        <h2 className="food-name">{props.name}</h2>
        <img className="one-image" style={ {width : props.width , height : props.height} } src={props.Source} alt="" />
    </div>
  )
}

export default FotogalleryImages;