import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation';

function InterviewItemCard({ interview }) {

    const route = useRouter();
    const onStart = () => {
        route.push('/dashboard/interview/' + interview?.mockId)
    }

    const onFeedbackPress = () => {
        route.push('/dashboard/interview/' + interview?.mockId + '/feedback')
    }

    return (
        <div className='border rounded-lg shadow-sm p-3'>
            {interview && <div>
                <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
                <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years Of Experience</h2>
                <h2 className='text-xs text-gray-400'>Created At: {interview.createdAt}</h2>
                <div className='flex justify-between mt-2 gap-5'>
                    <Button size='sm' variant='outline' className='w-full' onClick={onFeedbackPress}>Feedback</Button>
                    <Button size='sm' className='w-full' onClick={onStart}>Start</Button>
                </div>
            </div>}
        </div>
    )
}

export default InterviewItemCard