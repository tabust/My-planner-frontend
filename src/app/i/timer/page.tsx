import { Pomodoro } from './Pomodoro'
import { Heading } from '@/components/ui/Heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Pomodoro timer',
	...NO_INDEX_PAGE
}

export default function PomodoroPage() {
	return (
		<div>
			<Heading title='Pomodoro timer' />
			<Pomodoro />
		</div>
	)
}
