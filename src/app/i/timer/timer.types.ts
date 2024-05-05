import type { IPomodoroRoundResponse } from '@/types/pomodoro.types'
import type { Dispatch, SetStateAction } from 'react'

export interface ITimerState {
	isRunning: boolean
	secondsLeft: number
	activeRound: IPomodoroRoundResponse | undefined
	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>

	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>
}
