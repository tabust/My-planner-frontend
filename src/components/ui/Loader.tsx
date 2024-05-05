import { LoaderIcon } from 'lucide-react'

export const Loader = () => {
	return (
		<div className='flex justify-center items-center'>
			<LoaderIcon className='animate-spin w-5 h-5 text-white' />
		</div>
	)
}
