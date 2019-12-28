import React from 'react';
import OriginalRating from 'react-rating';

import { ReactComponent as Star } from '../assets/star.svg';
import { ReactComponent as StarEmpty } from '../assets/star.svg';


function Rating(props) {
    return (
        <OriginalRating
            {...props}
            // emptySymbol="fa fa-star-o fa-2x"
            emptySymbol={<StarEmpty width="23px" height="23px" />}
            fullSymbol={<Star />}
        >

        </OriginalRating>
    )
}
export default Rating