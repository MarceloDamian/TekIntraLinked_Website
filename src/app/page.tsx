


'use client';

import React from "react";


export default function Home()
{
    return (
        <main>
            <button onClick={async() =>{
                await fetch('/api/emails',{ method: "POST" })
            }}
            > 
                Send Email 
            </button>
        </main>
    );
}