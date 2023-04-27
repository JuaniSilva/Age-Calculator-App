import React from 'react';
import Input from './Input';
import IconArrow from './IconArrow';
import Timespan from './Timespan';

interface Date {
	day?: number;
	month?: number;
	year?: number;
}

export default function Card() {
	const [dateInput, setDate] = React.useState<Date>({
		day: undefined,
		month: undefined,
		year: undefined,
	});

	const [dateError, setDateError] = React.useState<
		Record<keyof Date, string | null>
	>({
		day: null,
		month: null,
		year: null,
	});

	const [timePast, setTimePast] = React.useState<Date>({});

	function setValue(value: string, key: keyof Date) {
		const parsedValue = parseInt(value);

		setDate((prev) => ({ ...prev, [key]: parsedValue }));
	}

	function validateDate() {
		for (const [key, value] of Object.entries(dateInput)) {
			if (!value)
				return setDateError((prev) => ({
					...prev,
					[key]: 'This field is required',
				}));

			switch (key) {
				case 'day':
					if (value > 31 || value < 1) {
						setDateError((prev) => ({
							...prev,
							day: 'Must be a valid day',
						}));
					} else if (dateInput['month']) {
						const daysInMonth = new Date(
							dateInput['year'] ?? 0,
							dateInput['month'],
							0
						).getDate();

						if (value > daysInMonth) {
							setDateError((prev) => ({
								...prev,
								day: 'Must be a valid date',
							}));
						}
					} else {
						setDateError((prev) => ({ ...prev, day: null }));
					}
					break;
				case 'month':
					if (value > 12 || value < 1) {
						setDateError((prev) => ({
							...prev,
							month: 'Must be a valid month',
						}));
					} else {
						setDateError((prev) => ({ ...prev, month: null }));
					}
					break;
				case 'year':
					if (value > new Date().getFullYear()) {
						setDateError((prev) => ({
							...prev,
							year: 'Must be a valid year',
						}));
					} else {
						setDateError((prev) => ({ ...prev, year: null }));
					}
					break;
			}
		}
	}

	React.useEffect(() => {
		validateDate();
		if (!dateInput.day || !dateInput.month || !dateInput.year)
			return setTimePast({});

		const now = new Date();
		const past = new Date(
			dateInput.year,
			dateInput.month - 1,
			dateInput.day
		);

		if (past > now) {
			setDateError((prev) => ({
				...prev,
				day: 'Must be a valid date',
			}));

			return setTimePast({});
		} else setDateError((prev) => ({ ...prev, day: null }));

		const diff = now.getTime() - past.getTime();
		const diffDate = new Date(diff);

		setTimePast({
			year: diffDate.getFullYear() - 1970,
			month: diffDate.getMonth(),
			day: diffDate.getDate(),
		});
	}, [dateInput.day, dateInput.month, dateInput.year]);

	return (
		<div className="mx-auto w-full max-w-[840px] px-3 py-7 rounded-[2rem] rounded-br-[10rem] bg-white mt-10 h-min">
			<div className="flex gap-4">
				<Input
					label="Day"
					placeholder="DD"
					type="number"
					value={dateInput.day}
					setValue={(value) => setValue(value, 'day')}
					error={dateError.day}
				/>
				<Input
					label="Month"
					placeholder="MM"
					type="number"
					value={dateInput.month}
					setValue={(value) => setValue(value, 'month')}
					error={dateError.month}
				/>
				<Input
					label="Year"
					placeholder="YYYY"
					type="number"
					value={dateInput.year}
					setValue={(value) => setValue(value, 'year')}
					error={dateError.year}
				/>
			</div>
			<div className="w-full my-8 relative">
				<hr className="absolute w-full top-1/2 z-0" />
				<span className="bg-primary-purple hover:bg-neutral-off-black hover:cursor-pointer flex items-center justify-center mx-auto sm:mr-0  w-[66px] h-[66px] rounded-full relative z-20">
					<IconArrow className="w-[26px] h-[24px]" />
				</span>
			</div>
			<div className="text-dynamic font-bold italic">
				<Timespan timePast={timePast.year} label="years" />
				<Timespan timePast={timePast.month} label="months" />
				<Timespan timePast={timePast.day} label="days" />
			</div>
		</div>
	);
}
