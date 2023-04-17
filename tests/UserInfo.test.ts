import { SkolengoResponse } from '../src/models/Globals'
import { User, UserIncluded } from '../src/models/User'

describe('Test UserInfo', () => {
  it('should be correct type', () => {
    const test: SkolengoResponse<User, UserIncluded> = { data: { id: 'RSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'legalRepresentativeUserInfo', attributes: { addressLines: ['1 RUE DU TEST UNITAIRE'], postalCode: '54000', city: 'NANCY', country: 'FRANCE', lastName: 'DOE', firstName: 'John', photoUrl: null, externalMail: 'john.doe@example.com', mobilePhone: '+33 6 00 00 00 00', permissions: [{ schoolId: 'SKO-E-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', service: 'EVAL', permittedOperations: ['READ_EVALUATIONS'] }, { schoolId: 'SKO-E-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', service: 'CDT', permittedOperations: ['READ_LESSONS'] }, { schoolId: 'SKO-E-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', service: 'TAF', permittedOperations: ['READ_HOMEWORK_ASSIGNMENTS'] }, { schoolId: 'SKO-E-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', service: 'ABS', permittedOperations: ['READ_ABSENCE_FILES', 'READ_ABSENCE_FILES_DETAILS', 'COMPLETE_ABSENCE_FILES'] }, { schoolId: 'SKO-E-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', service: 'MSG', permittedOperations: ['READ_MESSAGES', 'WRITE_MESSAGES'] }] }, relationships: { students: { data: [{ id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'student' }] } } }, included: [{ id: 'SKO-E-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'school', attributes: { name: 'Lycée Louise Weiss', timeZone: 'Europe/Paris', subscribedServices: ['MSG', 'SKOAPP', 'ABS', 'CDT', 'ART', 'TAF', 'EVAL', 'COMC'] } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'student', attributes: { lastName: 'DOE', firstName: 'Luc', photoUrl: null, className: '3EME1', dateOfBirth: '2007-03-28', regime: 'EXTERNE LIBRE' }, relationships: { school: { data: { id: 'SKO-E-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'school' } } } }] }
    expect(test).toBeDefined()
  })
})