import React from "react";
import Card from "./Card";

function CardList({ robots }) {
    // map, optional second para is index
    // need to have key props, to let VitualDOM which card is which
    return (
        <div>
            {
                robots.map((robotObj, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                }) 
            }
        </div>
    );
}

export default CardList;