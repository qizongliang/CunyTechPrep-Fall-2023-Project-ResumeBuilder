const ButterRiolu = {
  details: {
    'About Me': {
      biography:
        "I'm a guy who's in my Nth year in this college, studying this field that you've probably never heard of. I do this and that while performing this for fun. Currently trying out this weird thing, hoping to find something cool. But I really suck at doing this, so I'm dealing that by practicing this thing.",
      education: [
        'CUNY Brooklyn College BA',
        'CUNY Hunter College BA Computer Science',
      ],
    },
    'Work Experience': [
      {
        id: 1,
        company: 'CUNY Hunter College',
        job_title: 'Teaching Assistant',
        start_month: 8,
        start_year: 2022,
        end_month: null,
        end_year: null,
        bullets: [
          'Did this and that while providing something else which lead to a quantifyable change of X percent',
          'The fitness gram pacer test is a multi-aerobic capacity test that progressively gets more difficult as it continues',
        ],
        tools_used: ['C++'],
      },
      {
        id: 2,
        company: 'The Golden House',
        job_title: 'Full Stack Engineer',
        start_month: 2,
        start_year: 2022,
        end_month: null,
        end_year: null,
        bullets: [
          'Engineered a full stack application to host a leaderboard displaying the achievements of 800+ users',
          'Designed scalable MongoDB schemas to accurately store user entries and character records',
          'Implemented REST APIs using Mongoose queries for data retrieval and automated user submissions',
          'Built a data migration script to migrate 700+ entries from TablePress spreadsheets into production',
          'Created an approval table to allow our moderation team to approve and modify submissions 5 times faster',
          'Performed a database backfill to reduce the runtime of an aggregation query by ~60%',
        ],
        tools_used: [
          'TypeScript',
          'JavaScript',
          'NodeJS',
          'MongoDB',
          'ReactJS',
        ],
      },
    ],

    Projects: [
      {
        title: 'Katsudon Leetcode',
        brief: 'Full stack website',
        start_month: 8,
        start_year: 2022,
        end_month: null,
        end_year: null,
        bullets: [
          'Engineered a social platform for users to compare LeetCode solutions with friends',
          'Built a server and utilizing Mongoose aggregation queries, and an user interface using ReactJS and CSS',
          'Created and published a chrome extension to automate solution submissions for authorized users',
        ],
        tools_used: [
          'TypeScript',
          'JavaScript',
          'NodeJS',
          'MongoDB',
          'ReactJS',
        ],
      },
      {
        title: 'Genshin Impact Damage Calculator',
        brief: 'Website',
        start_month: 8,
        start_year: 2021,
        end_month: 10,
        end_year: 2021,
        bullets: [
          "Built an alternative damage calculator that estimates a characters' damage with less needed information",
          "Allowed a small community to accurately predict their characters' damage consistently within 99.5% accuracy",
          'Helped over 600 players decide on the value of an unreleased character by analyzing survey data',
          "Set the community standard for a character's damage by generating all ways their stats could be optimized",
        ],
        tools_used: ['HTML', 'JavaScript', 'CSS'],
      },
    ],
  },
  portfolio_url: 'https://dli7077.github.io/portfolio/',
  resume_url:
    'https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf',
}

const FBI_Agent = {
  details: {
    'About Me': {
      biography: '',
      education: ['CUNY Hunter College BA Computer Science'],
    },
    'Work Experience': [
      {
        company: 'CUNY Hunter College',
        job_title: 'Teaching Assistant',
        start_month: 8,
        start_year: 2022,
        end_month: null,
        end_year: null,
        bullets: [
          'Did this and that while providing something else which lead to a quantifyable change of X percent',
          'The fitness gram pacer test is a multi-aerobic capacity test that progressively gets more difficult as it continues',
        ],
        tools_used: ['C++'],
      },
    ],

    Projects: [
      {
        title: 'Katsudon Leetcode',
        brief: 'Full stack website',
        start_month: 8,
        start_year: 2022,
        end_month: null,
        end_year: null,
        bullets: [
          'Engineered a social platform for users to compare LeetCode solutions with friends',
          'Built a server and utilizing Mongoose aggregation queries, and an user interface using ReactJS and CSS',
          'Created and published a chrome extension to automate solution submissions for authorized users',
        ],
        tools_used: [
          'TypeScript',
          'JavaScript',
          'NodeJS',
          'MongoDB',
          'ReactJS',
        ],
      },
    ],
  },
  portfolio_url: 'https://dli7077.github.io/portfolio/',
  resume_url:
    'https://storage.googleapis.com/katsudon-assets/Devin%20L.%20Resume.pdf',
}

export const MOCK_PROFILES = {
  ButterRiolu,
  FBI_Agent,
}
