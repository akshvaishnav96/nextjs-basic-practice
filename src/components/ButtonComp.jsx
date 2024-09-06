"use client";

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { useState } from 'react'; // Import useState if needed for state management

export default function ButtonComp() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const router = useRouter(); // Initialize useRouter

    async function handleVarify() {
        try {
            const response = await fetch("/api/verifyEmail", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            const resData = await response.json();

            if (resData.flag) { // Check the flag condition
                router.push(`/login?msg=${encodeURIComponent(resData.msg)}`); // Use router.push for client-side redirect
            } else {
                
                router.push(`/signup?msg=${resData.msg}`);
            }
        } catch (error) {
            router.push(`/signup?msg=${encodeURIComponent(error.msg)}`);

        }
    }

    return (
        <button onClick={handleVarify}>Click to verify</button>
    );
}
