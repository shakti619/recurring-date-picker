import React from 'react';

type RecurrenceType = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface Props {
  recurrenceType: RecurrenceType;
  recurrenceInterval: number;
  selectedDays: number[];
  setRecurrenceType: (type: RecurrenceType) => void;
  setRecurrenceInterval: (interval: number) => void;
  setSelectedDays: (days: number[]) => void;
}

const RecurrenceOptions: React.FC<Props> = ({
  recurrenceType,
  recurrenceInterval,
  selectedDays,
  setRecurrenceType,
  setRecurrenceInterval,
  setSelectedDays,
}) => {
  const handleDayToggle = (day: number) => {
    const newSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    setSelectedDays(newSelectedDays);
  };

  return (
    <div className="space-y-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recurrence Type</label>
        <select
          value={recurrenceType}
          onChange={(e) => setRecurrenceType(e.target.value as RecurrenceType)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recurrence Interval</label>
        <input
          type="number"
          min="1"
          value={recurrenceInterval}
          onChange={(e) => setRecurrenceInterval(parseInt(e.target.value))}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>
      {recurrenceType === 'weekly' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Days</label>
          <div className="flex flex-wrap gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <button
                key={day}
                onClick={() => handleDayToggle(index)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedDays.includes(index)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;