import { MdOutlineClose } from "react-icons/md";

export default function DeleteModal({ customer, setIsOpen }) {
	return (
		<div className="fixed top-0 left-0 w-screen h-screen bg-black/60 flex items-center justify-center">
			<div>
				<div className="bg-slate-50 p-4 rounded-xl w-96 min-w-min">
					<MdOutlineClose
						onClick={() => setIsOpen(false)}
						className="ml-auto text-2xl cursor-pointer"
					/>
					<p className="mt-2 text-center">are you sure about deleted ?</p>
					<h2 className="my-8 text-5xl font-bold text-center truncate">
						{" "}
						{customer.username}
					</h2>
					<button
						className="bg-red-400 hover:bg-red-500 text-red-50 rounded-xl py-2 px-6 w-full
                    transition-all duration-300"
					>
						Delete it
					</button>
				</div>
			</div>
		</div>
	);
}
