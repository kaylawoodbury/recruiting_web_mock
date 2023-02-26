export const recruitingStage = {
	CONTACT: "Contact",
	DIALOGUE: "Dialogue",
	INTERVIEW: "Interview",
	OFFER: "Offer",
  CLOSED: "Closed"
}

class RecruiteeApi {
  getRecruitees() {
    const recruitees = [
      {
        id: '1',
        avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Street',
        zip: '111',
        email: 'carson.darrin@devias.io',
        name: 'Carson Darrin',
        recruitingStage: recruitingStage.CONTACT
      },
      {
        id: '2',
        avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Way',
        zip: '222',
        email: 'fran.perez@devias.io',
        name: 'Fran Perez',
        recruitingStage: recruitingStage.DIALOGUE
      },
      {
        id: '3',
        avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Avenue',
        zip: '333',
        email: 'jie.yan.song@devias.io',
        name: 'Jie Yan Song',
        recruitingStage: recruitingStage.INTERVIEW
      },
      {
        id: '4',
        avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Parkway',
        zip: '333',
        email: 'jane.rotanson@devias.io',
        name: 'Jane Rotanson',
        recruitingStage: recruitingStage.OFFER
      },
      {
        id: '5',
        avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
        city: 'Stockholm',
        country: 'Sweden',
        street: '31 Alley',
        zip: '333',
        email: 'miron.vitold@devias.io',
        name: 'Miron Vitold',
        recruitingStage: recruitingStage.CLOSED
      },
    ];

    return Promise.resolve(recruitees);
  }
}

export const recruiteeApi = new RecruiteeApi();
