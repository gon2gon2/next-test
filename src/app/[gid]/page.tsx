import {connection} from "next/server";

export default async function Page({params}: { params: Promise<{ gid: string }> }) {
  await connection();
  const gid = (await params).gid
  return (
      <h1>
        {decodeURI(gid)}
      </h1>
  );
}