import { render } from '@testing-library/react'
import React from 'react'

function List() {
    return (
        <aside>
            <h2>Study of the day</h2>
            <ul>
                <li>
                    <h3>
                        React
                    </h3>
                    <span>
                        02:00:00
                    </span>
                </li>
                <li>
                    <h3>
                        Javascript
                    </h3>
                    <span>
                        01:00:00
                    </span>
                </li>
            </ul>
        </aside>
    )
}

export default List