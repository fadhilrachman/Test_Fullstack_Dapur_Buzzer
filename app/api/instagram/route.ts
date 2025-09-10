import { NextRequest } from "next/server";

import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const responseAPISprint = await axios.get(
      "https://sprintpedia.id/page/instagram_tools",
      {
        params: { username: "padil" },
        headers: {
          Accept: "application/json, text/plain, */*",
          "X-Requested-With": "XMLHttpRequest",
          Referer: "https://sprintpedia.id/page/instagram_tools",

          Cookie:
            "csrf_cookie=f9b24e251a8f9c4f64a1305eb83c43a6; _ga=GA1.1.256319469.1757476324; cw_conversation=eyJhbGciOiJIUzI1NiJ9.eyJzb3VyY2VfaWQiOiJiMzhhMDEzNy1iNmRhLTQ5MjItYWMyMC0xNjM1ZDJkMmE3NjQiLCJpbmJveF9pZCI6MX0.BPXNLhZPslUW939c4Wysk5p2EWJZdahH-oYQqQ5NItM; smm_login=e0jWQjeUv5W8LypJNabsQwk0ByuIamoYRFG15zJ4HMqLx6cK6l7bZwnA3CNAZDPUV3p74vd1SViFrf8r2n9cd9XzmTOuOqtPEGEM; ci_session=adig1d2rvn0te2dultro21ei8flqaf5s; _ga_60QXGDQ8X2=GS2.1.s1757476323$o1$g1$t1757477628$j60$l0$h0",
        },
        timeout: 15000,
      }
    );

    const data = responseAPISprint.data?.data ?? responseAPISprint.data;

    return Response.json({
      ...data,
    });
  } catch (error) {
    return Response.json(
      {
        status: 500,
        message: "Internal server error",
        result: error,
      },
      {
        status: 500,
      }
    );
  }
}
