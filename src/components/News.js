import React, {useEffect , useState} from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";


const News = (props) => {
  const [article, setarticle] = useState([]);
  const [page, setpage] = useState(1);
  const [totalresult, settotalresult] = useState(0);
  document.title="NewsLite-"+props.category;

  

  const updateNews = async() =>{
    props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=659332ec5c2048bd81c7b5be4cabd225&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    // setloading(true);
    let pasedata = await data.json();
    console.log(pasedata);
    setarticle(pasedata.articles);
    settotalresult(pasedata.totalresults);
    props.setprogress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])
  

  const handlePreviousClick = async () => {
    console.log("prevoius");
    setpage(page-1);
    updateNews();
  };

  const handleNextClick = async () => {
    console.log("next");
    setpage(page+1);
    updateNews();
  };



    return (
      <div className="container my-3">
        <h2 className="text-center  p-3" style={{marginTop:"70px",color:props.mode=="dark"?"white":"black"}}>NewsLite - Top {props.category} Headlines </h2>

        <div className="row">
          {article.map((elements) => {
            return (
              <div className="col-md-4" key={elements.url}>
                <Newsitem mode={props.mode}
                  title={elements.title}
                  description={elements.description}
                  imageurl={elements.urlToImage}
                  newsurl={elements.url}
                  author={elements.author}
                  date={elements.publishedAt}
                  source={elements.source.name}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between" style={{ margin: "2px" }}>
          <button disabled={page <= 1} className="btn btn-dark" onClick={handlePreviousClick}>
            &laquo; Previous
          </button>

          <button disabled={page + 1 >Math.ceil(totalresult / props.pagesize)} className="btn btn-dark" onClick={handleNextClick}>            
            Next &raquo;
          </button>
        </div>
      </div>
    );
}

export default News;


