import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export async function GET(req: NextRequest | any) {
  const session = await getSession({ req });
  if (session) {
    return NextResponse.json(session, { status: 200 });
  } else {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }
}
