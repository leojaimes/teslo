import { NextFetchEvent, NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwt } from './utils';

export async function middleware(request: NextRequest, event: NextFetchEvent) {
 
    const response = new NextResponse()
  
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('p', request.nextUrl.pathname)


    try{

    }catch(error) {
        
    }
    return NextResponse.redirect(loginUrl)


 
 
  }



  export const config = {
    matcher: ['/checkout/:path*', '/dashboard/:path*'],
  }