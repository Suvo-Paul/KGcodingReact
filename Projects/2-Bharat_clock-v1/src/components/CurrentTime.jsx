import React from 'react'

const CurrentTime = () => {

    const time = new Date()

    return <p className='lead'>This is the corrent time: {time.toLocaleDateString()}
        - {time.toLocaleTimeString()}
     </p>
}

export default CurrentTime