import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function Test() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <h1>yesss</h1>
            <button onClick={() => loginWithRedirect()}>Log In</button>;

        </div>
    )
}

export default Test
