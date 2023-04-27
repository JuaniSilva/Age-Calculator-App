export default function Timespan({
	timePast,
	label,
}: {
	timePast?: number;
	label: string;
}) {
	return (
		<h3 className="text-neutral-off-black ">
			<span className="text-primary-purple">{timePast ?? '--'}</span>{' '}
			{label}
		</h3>
	);
}
