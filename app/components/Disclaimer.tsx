import type { FC } from 'react'
import { cn } from '~/utils/style'

interface DisclaimerProps {
	className?: string
}

export const Disclaimer: FC<DisclaimerProps> = ({ className }) => {
	return (
		<p
			className={cn(
				'text-xs text-zinc-400 dark:text-zinc-500 max-w-prose',
				className
			)}
		>
			hello.JesseJesse.com was built with{' '}
			<a className="underline" href="https://developers.cloudflare.com/calls/">
				Cloudflare Calls
			</a>
			.
		</p>
	)
}
