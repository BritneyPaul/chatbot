import bot from '../public/images/botIcon.png'
import chattingbot from '../public/images/chattingbot.png'
import Image from 'next/image'
import SVGSendArrow from '../icons/SendArrow'

export default function AIChatBox({ value, onChange, handleSubmit, response }) {
    return (
        <div className='mx-20 mt-20 w-[478px] h-[523px] border-2 border-[#DEDEDE] rounded-xl flex flex-col'>
            <div className='flex flex-row mx-5 border-b-2 py-4'>
                <h3 className='mr-2.5'>Bob the bot</h3>
                <Image src={bot} alt="Bot" />
            </div>

            {/*------------ Response ---------------------*/}
            <div className="mt-7 mx-10 flex-grow">
                <p className="bg-gray-100 p-4 rounded-md w-full h-fit">Chatbot: {response}</p>
            </div>

            {/*------------- Input and send btn-------------- */}
            <div className='flex flex-row items-center px-4 pb-4 mt-auto'>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="flex-grow p-2 border border-gray-300 rounded-md"
                    placeholder="Ask Bob the bot something..."
                />

                <button
                    onClick={handleSubmit}
                    className='ml-2'
                >
                    <SVGSendArrow />
                </button>
            </div>
        </div>
    )
}
