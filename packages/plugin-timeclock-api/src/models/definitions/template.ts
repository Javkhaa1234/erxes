import { Document, Schema } from 'mongoose';
import { field } from './utils';

export interface ITimeClock {
  userId?: string;
  shiftStart?: Date;
  shiftEnd?: Date;
}
export interface ITimeClockDocument extends ITimeClock, Document {
  _id: string;
}

export interface IAbsence {
  userId?: string;
  startTime?: Date;
  endTime?: Date;
  reason: string;
  explanation: string;
  status: string;
  solved?: boolean;
}

export interface ISchedule {
  userId?: string;
  shifts: ITimeClock[];
  status: string;
  solved?: boolean;
}

export interface IAbsenceDocument extends IAbsence, Document {
  _id: string;
}

export interface IScheduleDocument extends ISchedule, Document {
  _id: string;
}

export const timeSchema = new Schema({
  _id: field({ pkey: true }),
  userId: field({ type: String, label: 'User' }),
  shiftStart: field({ type: Date, label: 'Shift starting time' }),
  shiftEnd: field({ type: Date, label: 'Shift ending time' })
});

export const absenceSchema = new Schema({
  _id: field({ pkey: true }),
  userId: field({ type: String, label: 'User' }),
  startTime: field({ type: Date, label: 'Absence starting time' }),
  endTime: field({ type: Date, label: 'Absence ending time' }),
  reason: field({ type: String, label: 'reason for absence' }),
  explanation: field({ type: String, label: 'explanation by a team member' }),
  solved: field({
    type: Boolean,
    default: false,
    label: 'whether absence request is solved or pending'
  }),
  status: field({
    type: String,
    label: 'Status of absence request, whether approved or rejected'
  })
});

const shiftSchema = new Schema({
  shiftStart: field({
    type: Date,
    label: 'starting date and time of the shift'
  }),
  shiftEnd: field({ type: Date, label: 'ending date and time of the shift' })
});

export const scheduleSchema = new Schema({
  _id: field({ pkey: true }),
  userId: field({ type: String, label: 'User' }),
  shifts: [shiftSchema],
  solved: field({
    type: Boolean,
    default: false,
    label: 'whether absence request is solved or pending'
  }),
  status: field({
    type: String,
    label: 'Status of absence request, whether approved or rejected'
  })
});