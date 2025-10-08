import { NextResponse } from "next/server";

export default function middleware(request: Request) {
  // Pega as informações necessarias para a autencação
  const user = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const auth = request.headers.get("authorization");

  // Verifica se é a primeira vez entrando
  if (!auth) {
    // Mostra o login
    return new NextResponse("Authentication required.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  // Pega a segunda parte do array do auth
  const basicAuth = auth.split(" ")[1];
  const decoded = atob(basicAuth);
  const [userTyped, passTyped] = decoded.split(":");

  // Verifica se o user e a senha estão corretas
  if (userTyped === user && passTyped === password) {
    //deixa passar se estiver
    return NextResponse.next();
  }

  // Bloqueia novamente se estiver errada
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  });
}

export const config = {
  matcher: "/admin/:path*",
};
