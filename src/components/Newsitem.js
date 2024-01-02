import React from "react";

const Newsitem = (props) => {

    let { title, description, imageurl, newsurl, author, date, source } = props;

    return (
      <div className="my-3">
        <div className="card">

{/* for badge on top  */}
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
            <span className="badge text-bg-danger p-2">
              {source}
            </span>
          </div>

          <img
            src={
              !imageurl
                ? "https://dims.apnews.com/dims4/default/cd4b527/2147483647/strip/true/crop/5616x3159+0+293/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F34%2F72%2Ff7c076f31713c8f77acb7b525d09%2F75b01fea03c8419a94efcfc5239d7b24"
                : imageurl
            }className="card-img-top" alt="Images"/>

          <div className={`card-body`} style={{backgroundColor:props.mode=="dark"?"#353835":"white" , color:props.mode=="dark"?"white":"black"}}>

            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <small style={{color:props.mode=="dark"?"red":"green"}}> By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()} ago
            </small>{" "}  <br/><br/>
          
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>

          </div>
        </div>
      </div>
    );

  }

export default Newsitem;
