import { redirect } from 'next/navigation'

export default async function NewPage() {
  redirect('/?refresh=true')
}
