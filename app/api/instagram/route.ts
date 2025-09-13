import { NextRequest } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const clientApiKey = searchParams.get("key");
  const username = searchParams.get("username");
  const apiKey = process.env.API_KEY;

  if (!apiKey && clientApiKey != apiKey && !username) {
    return Response.json(
      {
        status: 403,
        message: "Unauthorized Access!",
      },
      {
        status: 403,
      }
    );
  }
  try {
    const responseAPISprint = await axios.get(
      "https://sprintpedia.id/page/instagram_tools",
      {
        params: { username: "padil" },
        headers: {
          Accept: "application/json, text/plain, */*",
          "X-Requested-With": "XMLHttpRequest",
          Referer: "https://sprintpedia.id/page/instagram_tools",

          Cookie: process.env.SPRINT_PEDIA_COOKIE,
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
