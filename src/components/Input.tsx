interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	setValue: (value: string) => void;
	error?: string | null;
}

export default function Input({
	value,
	label,
	setValue,
	error,
	...props
}: InputProps) {
	return (
		<div className="flex flex-col gap-1 max-w-[10rem] ">
			<label
				className={`font-semibold ${
					error
						? 'text-primary-light-red'
						: 'text-neutral-smokey-grey'
				}`}
				htmlFor={label}
			>
				{label}
			</label>
			<input
				className={`border ${
					error
						? 'border-primary-light-red'
						: 'border-neutral-light-grey focus:border-primary-purple'
				} font-bold p-4 w-full h-[50] rounded-md  focus:outline-none`}
				id={label}
				type={props.type || 'text'}
				value={Number(value).toString()}
				onChange={(e) => setValue(e.target.value)}
				{...props}
			/>
			{error && (
				<span className="text-primary-light-red text-sm">{error}</span>
			)}
		</div>
	);
}
