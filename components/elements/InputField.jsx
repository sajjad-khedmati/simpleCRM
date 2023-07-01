export default function InputField({ label, name, type, value, onChange }) {
	return (
		<div className="flex flex-col gap-2 grow">
			<label className="text-sm text-slate-700" htmlFor={name}>
				{label}
			</label>
			<input
				className="px-4 py-2 rounded-lg border-2 outline-none focus-within:border-sky-300 transition-all
                duration-300"
				id={name}
				type={type}
				value={value}
				onChange={onChange}
				name={name}
			/>
		</div>
	);
}
