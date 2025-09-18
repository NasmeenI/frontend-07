interface TopMenuItemProps {
  href: string
  label: string
}

export default function TopMenuItem({ href, label }: TopMenuItemProps) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {label}
    </a>
  )
}
