import { NextFetchEvent, NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { jwt } from './utils'
// import { getToken } from 'next-auth/jwt';



export async function middleware(req: NextRequest | any, ev: NextFetchEvent) {



    // const loginUrl = new URL('/auth/login', request.url)
    // loginUrl.searchParams.set('p', request.nextUrl.pathname)


    // const token = request.cookies.get('token')

    // console.log(token)
    // if (!token) {
    //     return NextResponse.redirect(loginUrl)
    // }

    // jwt.isValidToken esta usando una libreria que no es aceptada en el edge algo no usarla  

    // const received = { req, secret: process.env.NEXTAUTH_SECRET }
    // console.log(received)

    // const session = await getToken(received);

    // console.log(`Session from middleware`)
    // console.log({ session });


    // const loginUrl = new URL('/auth/login', req.url)
    // loginUrl.searchParams.set('p', req.nextUrl.pathname)


    // if (!session) {

    //     //return NextResponse.redirect(loginUrl)
    // }

    return NextResponse.next();




    // try {
    //     await axios.post('/route')
    // } catch (error) {

    // }
    // return NextResponse.redirect(loginUrl)




}



export const config = {
    matcher: ['/checkout/:path*', '/dashboard/:path*'],
}