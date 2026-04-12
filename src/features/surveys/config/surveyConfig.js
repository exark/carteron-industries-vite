/**
 * surveyConfig.js
 * Central config for all survey questions and steps.
 * Edit questions here — no component changes needed.
 */

// ─── Question types ───────────────────────────────────────────────────────────
// 'radio'     — single selection
// 'multiselect' — multiple selections allowed
// 'textarea'  — free text
// 'contact'   — special step (contact fields + consent)

export const clubSurveyConfig = {
  id: 'club',
  title: { 
    fr: 'Une source potentielle de nouveaux revenus et une solution de fidélisation des joueurs pour les clubs de golf.', 
    en: 'A potential new revenue stream and player retention solution for golf clubs.' 
  },
  subtitle: {
    fr: '',
    en: '',
  },
  steps: [
    {
      id: 'step1',
      label: { fr: 'Votre contexte', en: 'Your context' },
      questions: [
        {
          id: 'q1_young_parents',
          type: 'radio',
          required: true,
          label: {
            fr: 'Avez-vous des membres ou visiteurs qui sont de jeunes parents ?',
            en: 'Do you have members or visitors who are young parents?',
          },
          options: [
            { value: 'yes', label: { fr: 'Oui', en: 'Yes' } },
            { value: 'no', label: { fr: 'Non', en: 'No' } },
            { value: 'not_sure', label: { fr: 'Je ne suis pas sûr', en: 'Not sure' } },
          ],
        },
        {
          id: 'q2_childcare_barrier',
          type: 'radio',
          required: true,
          label: {
            fr: 'Pensez-vous que la garde d\'enfants est un frein empêchant certaines personnes de jouer au golf ?',
            en: 'Do you think childcare is a barrier preventing some people from playing golf?',
          },
          options: [
            { value: 'yes_definitely', label: { fr: 'Oui, certainement', en: 'Yes, definitely' } },
            { value: 'sometimes', label: { fr: 'Parfois', en: 'Sometimes' } },
            { value: 'no', label: { fr: 'Non', en: 'No' } },
          ],
        },
        {
          id: 'q3_product_benefits',
          type: 'multiselect',
          required: true,
          label: {
            fr: 'Pensez-vous que ce produit pourrait :',
            en: 'Do you think this product could:',
          },
          options: [
            { value: 'attract_customers', label: { fr: 'Attirer de nouveaux clients', en: 'Attract new customers' } },
            { value: 'increase_frequency', label: { fr: 'Augmenter la fréquence de jeu', en: 'Increase playing frequency' } },
            { value: 'improve_experience', label: { fr: 'Améliorer l\'expérience des membres', en: 'Improve member experience' } },
          ],
        },
      ],
    },
    {
      id: 'step2',
      label: { fr: 'Intérêt & retour', en: 'Interest & feedback' },
      questions: [
        {
          id: 'q4_test_interest',
          type: 'radio',
          required: true,
          label: {
            fr: 'Votre club serait-il intéressé pour tester ce type de produit ?',
            en: 'Would your club be interested in testing such a product?',
          },
          options: [
            { value: 'yes', label: { fr: 'Oui', en: 'Yes' } },
            { value: 'maybe', label: { fr: 'Peut-être', en: 'Maybe' } },
            { value: 'no', label: { fr: 'Non', en: 'No' } },
          ],
        },
        {
          id: 'q5_partnership_contact',
          type: 'radio',
          required: true,
          label: {
            fr: 'Souhaitez-vous être contacté pour un partenariat ?',
            en: 'Would you like to be contacted for a partnership?',
          },
          options: [
            { value: 'yes', label: { fr: 'Oui', en: 'Yes' } },
            { value: 'no', label: { fr: 'Non', en: 'No' } },
          ],
        },
        {
          id: 'q6_open_feedback',
          type: 'textarea',
          required: false,
          label: {
            fr: 'Quels sont les principaux défis ou opportunités que vous percevez pour ce type de produit dans votre club ?',
            en: 'What are the main challenges or opportunities you see for this type of product in your club?',
          },
          placeholder: {
            fr: 'Partagez vos réflexions...',
            en: 'Share your thoughts...',
          },
        },
      ],
    },
    {
      id: 'step3',
      label: { fr: 'Vos coordonnées', en: 'Your details' },
      type: 'contact',
      includeOrganization: true,
    },
  ],
};

export const familySurveyConfig = {
  id: 'family',
  title: { fr: 'Enquête Golfeur & Famille', en: 'Golfer & Family Survey' },
  subtitle: {
    fr: 'Dites-nous comment améliorer votre expérience de golf',
    en: 'Tell us how to improve your golf experience',
  },
  steps: [
    {
      id: 'step1',
      label: { fr: 'Votre pratique', en: 'Your practice' },
      questions: [
        {
          id: 'q1_golf_frequency',
          type: 'radio',
          required: true,
          label: {
            fr: 'À quelle fréquence jouez-vous au golf ?',
            en: 'How often do you play golf?',
          },
          options: [
            { value: 'less_monthly', label: { fr: 'Moins d\'une fois par mois', en: 'Less than once a month' } },
            { value: '1_3_monthly', label: { fr: '1 à 3 fois par mois', en: '1–3 times per month' } },
            { value: 'weekly', label: { fr: 'Une fois par semaine', en: 'Once a week' } },
            { value: 'several_weekly', label: { fr: 'Plusieurs fois par semaine', en: 'Several times per week' } },
          ],
        },
        {
          id: 'q2_young_children',
          type: 'radio',
          required: true,
          label: {
            fr: 'Avez-vous de jeunes enfants (0–3 ans) ?',
            en: 'Do you have young children (0–3 years old)?',
          },
          options: [
            { value: 'yes', label: { fr: 'Oui', en: 'Yes' } },
            { value: 'not_yet', label: { fr: 'Pas encore', en: 'Not yet' } },
            { value: 'planning', label: { fr: 'En projet', en: 'Planning to' } },
          ],
        },
        {
          id: 'q3_children_impact',
          type: 'radio',
          required: true,
          label: {
            fr: 'Si vous avez ou envisagez d\'avoir de jeunes enfants, comment cela a-t-il impacté (ou impactera-t-il) votre pratique du golf ?',
            en: 'If you have or plan to have young children, how has it impacted or how do you think it will impact your golf practice?',
          },
          options: [
            { value: 'play_less', label: { fr: 'Je joue (jouerai) moins souvent', en: 'Play less often' } },
            { value: 'stop_temp', label: { fr: 'J\'ai arrêté (arrêterai) temporairement', en: 'Stop playing temporarily' } },
            { value: 'no_impact', label: { fr: 'Aucun impact', en: 'No impact' } },
          ],
        },
      ],
    },
    {
      id: 'step2',
      label: { fr: 'Votre avis produit', en: 'Product opinion' },
      questions: [
        {
          id: 'q4_bring_child',
          type: 'radio',
          required: true,
          label: {
            fr: 'Avez-vous déjà souhaité amener votre enfant avec vous pendant une partie de golf ?',
            en: 'Have you ever wished to bring your child with you while playing golf?',
          },
          options: [
            { value: 'yes_often', label: { fr: 'Oui, souvent', en: 'Yes, often' } },
            { value: 'occasionally', label: { fr: 'Occasionnellement', en: 'Occasionally' } },
            { value: 'no', label: { fr: 'Non', en: 'No' } },
          ],
        },
        {
          id: 'q5_product_interest',
          type: 'radio',
          required: true,
          label: {
            fr: 'Un chariot de golf 2-en-1 + poussette bébé vous intéresserait-il ?',
            en: 'Would a 2-in-1 golf trolley + baby stroller interest you?',
          },
          options: [
            { value: 'yes_alot', label: { fr: 'Oui, beaucoup', en: 'Yes, a lot' } },
            { value: 'maybe', label: { fr: 'Peut-être', en: 'Maybe' } },
            { value: 'not_really', label: { fr: 'Pas vraiment', en: 'Not really' } },
          ],
        },
        {
          id: 'q6_important_features',
          type: 'multiselect',
          required: true,
          label: {
            fr: 'Qu\'est-ce qui serait le plus important pour vous ?',
            en: 'What would matter most to you?',
          },
          options: [
            { value: 'safety', label: { fr: 'Sécurité', en: 'Safety' } },
            { value: 'ease_of_use', label: { fr: 'Facilité d\'utilisation', en: 'Ease of use' } },
            { value: 'child_comfort', label: { fr: 'Confort de l\'enfant', en: 'Comfort for the child' } },
            { value: 'storage', label: { fr: 'Rangement / pliabilité', en: 'Storage / foldability' } },
            { value: 'design', label: { fr: 'Design', en: 'Design' } },
            { value: 'price', label: { fr: 'Prix', en: 'Price' } },
          ],
        },
        {
          id: 'q7_open_feedback',
          type: 'textarea',
          required: false,
          label: {
            fr: 'Qu\'est-ce qui rendrait ce produit vraiment utile pour vous ?',
            en: 'What would make this product truly useful for you?',
          },
          placeholder: {
            fr: 'Partagez vos attentes...',
            en: 'Share your expectations...',
          },
        },
      ],
    },
    {
      id: 'step3',
      label: { fr: 'Vos coordonnées', en: 'Your details' },
      type: 'contact',
      includeOrganization: false,
    },
  ],
};
