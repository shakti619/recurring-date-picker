"use client";

import React from 'react';
import CustomDatePicker from './DatePicker';
import RecurrenceOptions from './RecurrenceOptions';
import DatePreview from './DatePreview';
import { useDatePickerStore } from './useDatePickerStore';

const RecurringDatePicker: React.FC = () => {
  const {
    startDate,
    endDate,
    recurrenceType,
    recurrenceInterval,
    selectedDays,
    setStartDate,
    setEndDate,
    setRecurrenceType,
    setRecurrenceInterval,
    setSelectedDays,
  } = useDatePickerStore();

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Recurring Date Picker</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <CustomDatePicker
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          <RecurrenceOptions
            recurrenceType={recurrenceType}
            recurrenceInterval={recurrenceInterval}
            selectedDays={selectedDays}
            setRecurrenceType={setRecurrenceType}
            setRecurrenceInterval={setRecurrenceInterval}
            setSelectedDays={setSelectedDays}
          />
        </div>
        <DatePreview
          startDate={startDate}
          endDate={endDate}
          recurrenceType={recurrenceType}
          recurrenceInterval={recurrenceInterval}
          selectedDays={selectedDays}
        />
      </div>
    </div>
  );
};

export default RecurringDatePicker;