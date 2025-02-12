import {connection} from "next/server";

export default async function Page({params}: { params: Promise<{ gid: string }> }) {
  await connection();
  const slug = (await params).gid
  console.log(slug)
  return (
      <h1>
        {decodeURI(slug)}
      </h1>
  );
}