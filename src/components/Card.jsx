export const Card = ({ Title, Year, imdbID, Type, Poster }) => {
    return (
        <div id={imdbID} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    Poster === 'N/A'
                    ?
                    <img className="activator" src={`https://via.placeholder.com/300x400?text=${Title}`} alt="img"/>
                    : 
                    <img className="activator" src={Poster} alt="img"/>
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}</span>
                <p>{Year} <span className="right">{Type}</span></p>
            </div>
        </div>
    )
}