import cn from 'classNames'

type TextGlobalProps = {
    children: React.ReactNode,
    size: "xl" | "lg" | "md" | "sm" | "xs"
}

export default function TextGlobal({children, size} : TextGlobalProps) {

  const classText = cn('text-white', {
    'text-xs font-normal': size == 'xs',
    'text-sm font-normal': size == 'sm',
    'text-md font-medium': size == 'md',
    'text-lg font-black': size == 'lg',
    'text-xl font-extrabold': size == 'xl',
  })

  return (
    <p className={classText}>{children}</p>
  )
}
