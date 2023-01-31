// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="styles.css">
//     <title>CSS Loaders - Animation 2</title>
// </head>
// <body>

//     <div class="loader">
//         <div class="loader-ring">
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//         </div>
//     </div>

// </body>
// </html>

import React from 'react';
import "./styles.css";

function Animation() {
    return (
        <body>
            <div className="loader">
                <div className="loader-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </body>
    );
}

export default Animation;
