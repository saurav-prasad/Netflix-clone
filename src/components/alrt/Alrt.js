import React from 'react'
import { Alert } from '@mui/material';
import './alrt.css'
function Alrt({showAlert}) {
    return (
        <>
            {showAlert &&
                <div div className='alert' >
                    <Alert className='alertContent' variant="filled" severity="error">
                        Trailer not available
                    </Alert>
                </div>
            }
        </>
    )
}

export default Alrt