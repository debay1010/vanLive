


/*  1. url / route parameter is a parameter that is sent from a web page to another page
      and is used to convey the id of a particular database object for it to be displayed in details on anoter
      page.

    2. <Route path="/products/:productId" element={<ProductDrtail >} />

    3. function ProductDeyail() {
        
    }


    NEXTED ROUTE QUIZ
    ==================

1. What is the primary reason to use a nexted route 
  My Answer =  The primary reason to use a nexted route is when there is some UI that
               has to appear consistently over a number of pages

   - Whenever we have some shared UI between our pages

2. What is a Layout Route
  My Answer = A layout route serves as a container or parent for other child routes (outlets) it contains

 - It is the parent route of some nexted route and contains just the portion of the of the UI to be shared


3. What does <Outlet /> component do?. When do you use it?
  My Answer =  The <Outlet /> component represents the children routes in a layout. It is specified in the
     layout component to enable the children of the Layout route to render

   - We use it anytime we have a parent route that is wrapping children routes
     It renders the matching child route's 'element' prop given in its route definition

4. What is an index route?
  My My Answer = An index route is the route pointing to the component specified in the layout route.

  Index route is a child route that will match the path of the parent route if the parent has a path defined

  It is the default route we want to render when the path of the parent route matches. It gives us a chance to render 
    an element inside the parent <Outet /> at the same path as the parent route



Data Loader Quiz
================

1. What does the code in a loader function run?
  mY answer = it runs a code that fetches the data required by the component it is running in


2. what are some benefits of using a dataloader function insyead of fetching 
    our data in a useEffect in a componenet ?
My Answer = It make the data to be available before the page that will use it is rendered

3. What change do we need to make in our BrowserRouter before using loader(r any of he new data-layer API
   features in our apps)

   My Answer = we need to get rid of BrowserRouter and Routes and replace it with Routerprovider

4.What are the steps we need to take in order to use a loader in any given route?

My Answer = we use the router defined in the loader function as a prop to the route assigned to the component




quiz on protected route
========================
1. How did we change our route definition in order to 'protect' certain routes
from un-logged users

My ANSWER = We created a parent or layout route round the protected route and inside the
component specified in the layout route , we conditionally render the protected route
by returning the <Outlet > is logged in or navigated to login page componet if not looge in

2. What compoenet can we use to automatically send someone to a different route
Answer =  <Navigate />

3. what component can we render if the user is logged in
anaswr = <Outlet />





*/

import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams();
  return (
    <h1>{params.productId}</h1>
  )
}

export default ProductDetail
import { defer } from 'react-router-dom'

export async function loader() {
  const weather = await getWeather()
  return weather
}

export async function loader() {
  const weatherPromise = getWeather()
  return defer({ weather: weatherPromise })
}