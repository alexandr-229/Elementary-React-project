import { Card } from './Card';

export const Cards = ({ movies = [] }) => {
    return (
        <div className="movies">
            {movies.lenght !== 0 ? (
                movies.map((card) => <Card key={card.imdbID} {...card} />)
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
};
