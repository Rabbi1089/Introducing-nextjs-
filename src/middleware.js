import { NextResponse } from "next/server";

const user  = false;
export const middleware = (request) => {
  //  return NextResponse.redirect(new URL('/blog', request.url))
  let cookie = request.cookies.get('token')
  const allCookies = request.cookies.getAll()
  console.log('all cookie',allCookies)

if (!cookie  || cookie.value !== 'nextjs' ) {
     return NextResponse.redirect(new URL('/login', request.url))
}
return NextResponse.next()
/*
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/service", request.url));
  }
    */
};






export const config = {
    matcher: ['/about', '/blog']
  }

  
