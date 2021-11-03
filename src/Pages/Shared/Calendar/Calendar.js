import React from 'react';
import 'date-fns/addDays';

import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';



const Calendar = ({ date, setDate }) => {


    return (
        <div style={{ lineHeight: '50px' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    // openTo="year"
                    value={date}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
};

export default Calendar;