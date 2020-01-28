import React from 'react';


function Card({name, email, id}) {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2">
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} ></img>
            <div>
                <h2 className="tc">{name}</h2>
                <p className="tc">{email}</p>
            </div>
        </div>
    );
}

export default Card;