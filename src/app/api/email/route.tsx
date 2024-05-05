import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
export async function GET(Request: any) {}

export async function HEAD(Request: any) {}
// export async function POST(Request) {}
export async function PUT(Request: any) {}
export async function DELETE(Request: any) {}
export async function POST(
  req: any,
  res: any /*req: NextApiRequest, res: NextApiResponse*/
) {
  const data: any = await req.json();
  const email = data.email;
  const subject = data.subject;
  const message = data.message;
  console.log("Getting " + JSON.stringify(data) + " in the api route");

  try {
    const jsondata = {}; //await response.json();
    //console.log(JSON.stringify(jsondata))
    return NextResponse.json(jsondata, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching data from the Flask server." },
      { status: 500 }
    );
  }
}
