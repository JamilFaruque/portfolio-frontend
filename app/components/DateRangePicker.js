'use client';
import { DateRange } from 'react-date-range';
import { addMonths } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';

const DateRangePicker = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addMonths(new Date(), 1),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    console.log(ranges);
    setRange([ranges.selection]);
  };

  return (
    <div>
      <DateRange
        ranges={range}
        onChange={handleSelect}
        months={2}
        direction="horizontal"
        monthDisplayFormat='MMMM yyyy'
      />
    </div>
  );
};

export default DateRangePicker;
