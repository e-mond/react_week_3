import React from 'react'
import Button from './button'


function Body () {
 
        return (
            <div>
                <h1>Body</h1>
                <Button
                title="Place Order"
                color="blue"
                textColor="white"
                price={50}
                handleClick={()=> console.log('Order Placed')} />
                <Button
                 title="Cancel Order"
                 color="yellow" />
                <Button 
                title="Change Order"
                color="pink" />
            </div>
        );
    }

export default Body;