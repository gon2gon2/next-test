import { connection } from 'next/server'
import { Number } from './Number'
export default async function Page() {
  await connection()
  // Everything below will be excluded from prerendering
  const rand = Math.random()
  return <Number number={rand} />
}