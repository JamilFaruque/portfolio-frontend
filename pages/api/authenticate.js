import { cookies } from "next/headers";

export async function handler(req, res) {
  const code = req.body.code;

  if (code == "1234") {
    res.setHeader("Set-Cookie", "authenticated=true; Max-Age=86400;");
    res.status(200).json({ status: "SUCCESS", code });
  } else {
    res.status(200).json({ status: "FAIL" });
  }
}