import { NextFetchEvent, NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwt } from './utils'
 


export async function middleware(request: NextRequest, event: NextFetchEvent) {



    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('p', request.nextUrl.pathname)


    const token = request.cookies.get('token')

    console.log(token)
    if (!token) {
        return NextResponse.redirect(loginUrl)
    }

    // jwt.isValidToken esta usando una libreria que no es aceptada en el edge algo no usarla  
    return NextResponse.next()

   

    // try {
    //     await axios.post('/route')
    // } catch (error) {

    // }
    // return NextResponse.redirect(loginUrl)




}



export const config = {
    matcher: ['/checkout/:path*', '/dashboard/:path*'],
}