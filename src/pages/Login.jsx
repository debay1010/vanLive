import React, { useState } from "react"
import { useLoaderData, useActionData, useSearchParams, Form, useNavigation, redirect } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get('message')
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try {
        const user = await loginUser({ email, password })
        localStorage.setItem("loggedIn", true)
        console.log(pathname)

        const access = redirect(pathname)
        access.body = true

        // if (!pathname === null) {
        //     const access = redirect(pathname)
        //     access.body = true
        // } else {
        //     const access = redirect("/login")
        //     access.body = true
        // }

        return access
        // throw access
    } catch (error) {
        return error
    }
}
export default function Login() {
    const navigation = useNavigation()
    const error = useActionData()
    const message = useLoaderData()
    return (
        <>
            <div className="login-container">
                <h1>Sign in to your account</h1>
                {message && <h2 className="red">{message}</h2>}
                {error && <h3 className="red">{` Error ${error.status}:- ${error.statusText} user - ${error.message} `}</h3>}

                <Form method="post" className="login-form">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button disabled={navigation.state === "submitting"}
                    >{navigation.state === "submitting"
                        ? 'Logging in...'
                        : 'Log in'}</button>

                </Form>
            </div>
        </>
    )

}