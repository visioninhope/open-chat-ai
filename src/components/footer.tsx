import { Link } from '@nextui-org/link'

export default function Footer() {
  return (
    <footer className="w-full pt-3 text-center">
      <span className="text-[0.75rem]">
        基于最新的GPT-4o mini语言生成模型，助力您更好地工作和学习，by{' '}
        <Link href="https://github.com/lxw-bfw" color="secondary" size="sm">
          Mr. Liu
        </Link>
      </span>
    </footer>
  )
}
