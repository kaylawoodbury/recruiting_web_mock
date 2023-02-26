import { recruitingStage, language, hired, roll } from "../../constants";
import { subDays, subHours } from 'date-fns';

const now = new Date();

class CandidateApi {
  getCandidates() {
    const candidates = [
      {
        id: '1',
        avatar: '/static/avatars/avatar-cd.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Street',
        zip: '111',
        email: 'carson.darrin@devias.io',
        phoneNumber: '111-111-1111',
        firstName: 'Carson',
        lastName: 'Darrin',
        recruitingStage: recruitingStage.CONTACT,
        recruitHired: hired.NA,
        language: language.ENGLISH,
        roll: roll.DEVELOPER,
        other: 'linkedIn url for example or referral',
        updatedAt: subDays(subHours(now+1, 7), 1).getTime()
      },
      {
        id: '2',
        avatar: '/static/avatars/avatar-fran_perez.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Way',
        zip: '222',
        email: 'fran.perez@devias.io',
        phoneNumber: '111-111-1111',
        firstName: 'Fran',
        lastName: 'Perez',
        recruitingStage: recruitingStage.DIALOGUE,
        recruitHired: hired.NA,
        language: language.SWEDISH,
        roll: roll.PRODUCT_MANAGER,
        other: undefined,
        updatedAt: subDays(subHours(now+5, 7), 1).getTime()
      },
      {
        id: '3',
        avatar: '/static/avatars/avatar-jie_yan_song.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Avenue',
        zip: '333',
        email: 'jie.yan.song@devias.io',
        phoneNumber: '111-111-1111',
        firstName: 'Jie',
        lastName: 'Yan Song',
        recruitingStage: recruitingStage.INTERVIEW,
        recruitHired: hired.NA,
        language: language.GERMAN,
        roll: roll.DATA_SCIENTIST,
        other: undefined,
        updatedAt: subDays(subHours(now, 7), 1).getTime()
      },
      {
        id: '4',
        avatar: '/static/avatars/avatar-jane_rotanson.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Parkway',
        zip: '333',
        email: 'jane.rotanson@devias.io',
        phoneNumber: '111-111-1111',
        firstName: 'Jane',
        lastName: 'Rotanson',
        recruitingStage: recruitingStage.OFFER,
        recruitHired: hired.NA,
        language: language.ENGLISH,
        roll: roll.ENGINEERING_MANAGER,
        other: undefined,
        updatedAt: subDays(subHours(now+2, 7), 1).getTime()
      },
      {
        id: '5',
        avatar: '/static/avatars/avatar-miron_vitold.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Alley',
        zip: '333',
        email: 'miron.vitold@devias.io',
        phoneNumber: '111-111-1111',
        firstName: 'Miron',
        lastName: 'Vitold',
        recruitingStage: recruitingStage.CLOSED,
        recruitHired: hired.YES,
        language: language.SWEDISH,
        roll: roll.DEVELOPER,
        other: undefined,
        updatedAt: subDays(subHours(now+9, 7), 1).getTime()
      },
    ];

    return Promise.resolve(candidates);
  }
}

export const candidateApi = new CandidateApi();
