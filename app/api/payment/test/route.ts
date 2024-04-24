export async function GET(request: Request) {
  let number = 2;
  if (number !== 0) {
    return new Response(JSON.stringify({ redirectTo: "/dashboard" }), {
      status: 307,
      headers: {
        "Content-Type": "application/json",
        Location: "/dashboard",
      },
    });
  }

  return new Response(JSON.stringify({ message: "working" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
