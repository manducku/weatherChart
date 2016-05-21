import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} width={180} height={120} margin={5}>
                <SparklinesLine color={props.color}/>
            </Sparklines>
        </div>
    );
};
