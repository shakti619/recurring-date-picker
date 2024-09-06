"use client";

import React from 'react';
import { format, addDays, addWeeks, addMonths, addYears } from 'date-fns';

interface Props {
  startDate: Date | null;
  endDate: Date | null;
  recurrenceType: 'daily' | 'weekly' | 'monthly' | 'yearly';
  recurrenceInterval: number;
  selectedDays: number[];
}

const DatePreview: React.FC<Props> = ({
  startDate,
  endDate,
  recurrenceType,
  recurrenceInterval,
  selectedDays,
}) => {
  const getNextOccurrences = (count: number): Date[] => {
    if (!startDate) return [];

    const occurrences: Date[] = [];
    let currentDate = new Date(startDate);

    while (occurrences.length < count) {
      if (endDate && currentDate > endDate) break;

      if (recurrenceType === 'daily') {
        occurrences.push(currentDate);
        currentDate = addDays(currentDate, recurrenceInterval);
      } else if (recurrenceType === 'weekly') {
        const dayOfWeek = currentDate.getDay();
        if (selectedDays.includes(dayOfWeek)) {
          occurrences.push(currentDate);
        }
        if (dayOfWeek === 6) {
          currentDate = addWeeks(currentDate, recurrenceInterval - 1);
        }
        currentDate = addDays(currentDate, 1);
      } else if (recurrenceType === 'monthly') {
        occurrences.push(currentDate);
        currentDate = addMonths(currentDate, recurrenceInterval);
      } else if (recurrenceType === 'yearly') {
        occurrences.push(currentDate);
        currentDate = addYears(currentDate, recurrenceInterval);
      }
    }

    return occurrences;
  };

  const nextOccurrences = getNextOccurrences(10);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Next Occurrences</h3>
      {nextOccurrences.length > 0 ? (
        <ul className="space-y-2">
          {nextOccurrences.map((date, index) => (
            <li key={index} className="text-sm bg-white p-2 rounded shadow">
              {format(date, 'MMMM d, yyyy')}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No occurrences to display. Please select a start date.</p>
      )}
    </div>
  );
};

export default DatePreview;