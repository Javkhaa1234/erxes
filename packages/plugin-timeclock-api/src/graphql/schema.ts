export const types = `  
  extend type User @key(fields: "_id") {
    _id: String! @external
  }

  type Timeclock {
    _id: String!
    user: User
    shiftStart: Date
    shiftEnd: Date
  }

  type Absence {
    _id: String!
    user: User
    startTime: Date
    endTime: Date
    reason: String
    explanation: String
    solved: Boolean
    status: String
  }

  
  input ShiftsRequestInput {
    shiftStart: Date
    shiftEnd: Date
  }

  type ShiftsRequest {
    shiftStart: Date
    shiftEnd: Date
  }

  type Schedule {
    _id: String!
    user: User
    shifts: [ShiftsRequest]
    solved: Boolean
    status: String
  }
`;
export const queries = `
  timeclocks(startDate: Date, endDate: Date, userId: String): [Timeclock]
  absences(startDate: Date, endDate: Date, userId: String): [Absence]
  schedules(startDate: Date, endDate: Date, userId: String): [Schedule]
  timeclockDetail(_id: String!): Timeclock
  absenceDetail(_id: String!): Absence
  scheduleDetail(_id: String!): Schedule
`;

const params = `
  time: Date
  userId: String
  _id: String
`;

const absence_params = `
    userId: String
    startTime: Date
    endTime: Date
    reason: String
    explanation: String
`;

const schedule_params = `
    userId: String
    shifts: [ShiftsRequestInput]
  `;

export const mutations = `
  timeclockStart(${params}): Timeclock
  timeclockStop(${params}): Timeclock
  timeclockRemove(_id : String): Timeclock
  sendAbsenceRequest(${absence_params}): Absence
  sendScheduleRequest(${schedule_params}): Schedule
  solveAbsenceRequest(_id: String, status: String): Absence
  solveScheduleRequest(_id: String, status: String): Schedule
`;