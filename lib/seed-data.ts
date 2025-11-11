// Seed data for grants from various categories
export const seedGrants = [
  // Education Category
  {
    id: 'ED-GRANTS-2024-001',
    number: 'ED-GRANTS-2024-001',
    title: 'STEM Education Innovation Program',
    agency: 'Department of Education',
    status: 'posted',
    openDate: '2024-01-15',
    closeDate: '2025-03-30',
    cfda: '84.305',
    category: 'ED',
    categoryName: 'Education',
    synopsis: {
      synopsisDesc: 'This program supports innovative STEM education initiatives in K-12 schools. Funding will support curriculum development, teacher training, and student engagement programs focused on science, technology, engineering, and mathematics. Priority given to underserved communities and rural schools.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '06', description: 'Public and State controlled institutions of higher education' },
      { code: '05', description: 'Independent school districts' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Education',
    estimatedTotalProgramFunding: 50000000,
    expectedNumberOfAwards: 75,
    awardCeiling: 1000000,
    awardFloor: 250000,
    costSharing: 'Yes - 25% match required'
  },
  {
    id: 'ED-GRANTS-2024-002',
    number: 'ED-GRANTS-2024-002',
    title: 'Adult Literacy and Workforce Development',
    agency: 'Department of Education',
    status: 'posted',
    openDate: '2024-02-01',
    closeDate: '2025-04-15',
    cfda: '84.191',
    category: 'ED',
    categoryName: 'Education',
    synopsis: {
      synopsisDesc: 'Provides funding for adult education and literacy programs that prepare adults for employment and further education. Programs should focus on basic skills, digital literacy, and career pathways in high-demand industries.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '02', description: 'City or township governments' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Education',
    estimatedTotalProgramFunding: 30000000,
    expectedNumberOfAwards: 50,
    awardCeiling: 800000,
    awardFloor: 200000,
    costSharing: 'No'
  },

  // Health Category
  {
    id: 'HHS-2024-001',
    number: 'HHS-2024-001',
    title: 'Community Health Centers Expansion',
    agency: 'Department of Health and Human Services',
    status: 'posted',
    openDate: '2024-01-20',
    closeDate: '2025-05-01',
    cfda: '93.224',
    category: 'HL',
    categoryName: 'Health',
    synopsis: {
      synopsisDesc: 'Supports the expansion and operation of community health centers serving underserved populations. Funding will support facility improvements, equipment purchases, staff hiring, and service expansion including mental health and dental services.'
    },
    eligibility: [
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '00', description: 'State governments' },
      { code: '02', description: 'City or township governments' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Health',
    estimatedTotalProgramFunding: 75000000,
    expectedNumberOfAwards: 100,
    awardCeiling: 1500000,
    awardFloor: 300000,
    costSharing: 'Yes - 10% match required'
  },
  {
    id: 'HHS-2024-002',
    number: 'HHS-2024-002',
    title: 'Mental Health Crisis Response Program',
    agency: 'Department of Health and Human Services',
    status: 'posted',
    openDate: '2024-02-10',
    closeDate: '2025-04-30',
    cfda: '93.243',
    category: 'HL',
    categoryName: 'Health',
    synopsis: {
      synopsisDesc: 'Establishes mobile crisis response teams and crisis stabilization centers to provide immediate mental health support. Programs should integrate with 988 Suicide & Crisis Lifeline and provide 24/7 response capabilities.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '01', description: 'County governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Health',
    estimatedTotalProgramFunding: 60000000,
    expectedNumberOfAwards: 80,
    awardCeiling: 1200000,
    awardFloor: 400000,
    costSharing: 'No'
  },

  // Environment Category
  {
    id: 'EPA-2024-001',
    number: 'EPA-2024-001',
    title: 'Clean Water Infrastructure Grants',
    agency: 'Environmental Protection Agency',
    status: 'posted',
    openDate: '2024-01-10',
    closeDate: '2025-06-15',
    cfda: '66.458',
    category: 'ENV',
    categoryName: 'Environment',
    synopsis: {
      synopsisDesc: 'Provides funding for water infrastructure improvements including wastewater treatment upgrades, stormwater management, and drinking water system improvements. Priority for disadvantaged communities and projects addressing PFAS contamination.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '01', description: 'County governments' },
      { code: '02', description: 'City or township governments' },
      { code: '04', description: 'Special district governments' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Environment',
    estimatedTotalProgramFunding: 100000000,
    expectedNumberOfAwards: 60,
    awardCeiling: 3000000,
    awardFloor: 500000,
    costSharing: 'Yes - 20% match required'
  },
  {
    id: 'EPA-2024-002',
    number: 'EPA-2024-002',
    title: 'Environmental Justice Community Grants',
    agency: 'Environmental Protection Agency',
    status: 'posted',
    openDate: '2024-02-15',
    closeDate: '2025-05-20',
    cfda: '66.951',
    category: 'ENV',
    categoryName: 'Environment',
    synopsis: {
      synopsisDesc: 'Supports community-led projects addressing environmental and public health issues in underserved areas. Funding for air quality monitoring, pollution reduction, green infrastructure, and community education programs.'
    },
    eligibility: [
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '07', description: 'Native American tribal governments (Federally recognized)' },
      { code: '02', description: 'City or township governments' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Environment',
    estimatedTotalProgramFunding: 40000000,
    expectedNumberOfAwards: 120,
    awardCeiling: 500000,
    awardFloor: 100000,
    costSharing: 'No'
  },

  // Energy Category
  {
    id: 'DOE-2024-001',
    number: 'DOE-2024-001',
    title: 'Renewable Energy Innovation Program',
    agency: 'Department of Energy',
    status: 'posted',
    openDate: '2024-01-25',
    closeDate: '2025-04-10',
    cfda: '81.087',
    category: 'EN',
    categoryName: 'Energy',
    synopsis: {
      synopsisDesc: 'Advances renewable energy technologies including solar, wind, geothermal, and energy storage systems. Supports research, development, demonstration, and deployment of innovative clean energy solutions for grid integration and community resilience.'
    },
    eligibility: [
      { code: '06', description: 'Public and State controlled institutions of higher education' },
      { code: '20', description: 'Private institutions of higher education' },
      { code: '22', description: 'For profit organizations other than small businesses' },
      { code: '23', description: 'Small businesses' }
    ],
    fundingInstrument: 'Cooperative Agreement',
    categoryOfFundingActivity: 'Energy',
    estimatedTotalProgramFunding: 80000000,
    expectedNumberOfAwards: 40,
    awardCeiling: 3500000,
    awardFloor: 750000,
    costSharing: 'Yes - 20% match required'
  },
  {
    id: 'DOE-2024-002',
    number: 'DOE-2024-002',
    title: 'Energy Efficiency in Low-Income Communities',
    agency: 'Department of Energy',
    status: 'posted',
    openDate: '2024-02-05',
    closeDate: '2025-05-15',
    cfda: '81.042',
    category: 'EN',
    categoryName: 'Energy',
    synopsis: {
      synopsisDesc: 'Weatherization and energy efficiency improvements for low-income households. Includes insulation, HVAC upgrades, LED lighting, and renewable energy installations to reduce energy costs and improve home comfort.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '07', description: 'Native American tribal governments (Federally recognized)' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Energy',
    estimatedTotalProgramFunding: 45000000,
    expectedNumberOfAwards: 90,
    awardCeiling: 800000,
    awardFloor: 200000,
    costSharing: 'No'
  },

  // Community Development Category
  {
    id: 'HUD-2024-001',
    number: 'HUD-2024-001',
    title: 'Community Development Block Grants',
    agency: 'Department of Housing and Urban Development',
    status: 'posted',
    openDate: '2024-01-05',
    closeDate: '2025-03-25',
    cfda: '14.218',
    category: 'CD',
    categoryName: 'Community Development',
    synopsis: {
      synopsisDesc: 'Flexible funding for community development activities including affordable housing, economic development, infrastructure improvements, and public services. Projects must primarily benefit low- and moderate-income persons.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '01', description: 'County governments' },
      { code: '02', description: 'City or township governments' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Community Development',
    estimatedTotalProgramFunding: 120000000,
    expectedNumberOfAwards: 150,
    awardCeiling: 2000000,
    awardFloor: 300000,
    costSharing: 'No'
  },
  {
    id: 'HUD-2024-002',
    number: 'HUD-2024-002',
    title: 'Homeless Prevention and Rapid Re-Housing',
    agency: 'Department of Housing and Urban Development',
    status: 'posted',
    openDate: '2024-02-20',
    closeDate: '2025-04-20',
    cfda: '14.231',
    category: 'CD',
    categoryName: 'Community Development',
    synopsis: {
      synopsisDesc: 'Prevents homelessness and rapidly re-houses homeless individuals and families. Funding for rental assistance, housing relocation, stabilization services, and short-term financial assistance.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '02', description: 'City or township governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Community Development',
    estimatedTotalProgramFunding: 55000000,
    expectedNumberOfAwards: 85,
    awardCeiling: 1000000,
    awardFloor: 250000,
    costSharing: 'Yes - 25% match required'
  },

  // Science and Technology Category
  {
    id: 'NSF-2024-001',
    number: 'NSF-2024-001',
    title: 'Advanced Computing Infrastructure',
    agency: 'National Science Foundation',
    status: 'posted',
    openDate: '2024-01-30',
    closeDate: '2025-06-01',
    cfda: '47.070',
    category: 'ST',
    categoryName: 'Science and Technology',
    synopsis: {
      synopsisDesc: 'Develops and operates advanced computing systems and services for the research community. Supports high-performance computing, data analytics, artificial intelligence, and quantum computing research infrastructure.'
    },
    eligibility: [
      { code: '06', description: 'Public and State controlled institutions of higher education' },
      { code: '20', description: 'Private institutions of higher education' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Cooperative Agreement',
    categoryOfFundingActivity: 'Science and Technology',
    estimatedTotalProgramFunding: 90000000,
    expectedNumberOfAwards: 25,
    awardCeiling: 5000000,
    awardFloor: 1000000,
    costSharing: 'Yes - 10% match required'
  },
  {
    id: 'NSF-2024-002',
    number: 'NSF-2024-002',
    title: 'Research Experiences for Undergraduates',
    agency: 'National Science Foundation',
    status: 'posted',
    openDate: '2024-02-12',
    closeDate: '2025-05-10',
    cfda: '47.076',
    category: 'ST',
    categoryName: 'Science and Technology',
    synopsis: {
      synopsisDesc: 'Provides undergraduate students with hands-on research experiences in STEM fields. Sites should offer mentorship, professional development, and exposure to cutting-edge research in areas like biotechnology, materials science, and computer science.'
    },
    eligibility: [
      { code: '06', description: 'Public and State controlled institutions of higher education' },
      { code: '20', description: 'Private institutions of higher education' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Science and Technology',
    estimatedTotalProgramFunding: 35000000,
    expectedNumberOfAwards: 100,
    awardCeiling: 500000,
    awardFloor: 150000,
    costSharing: 'No'
  },

  // Agriculture Category
  {
    id: 'USDA-2024-001',
    number: 'USDA-2024-001',
    title: 'Sustainable Agriculture Research and Education',
    agency: 'Department of Agriculture',
    status: 'posted',
    openDate: '2024-01-18',
    closeDate: '2025-04-05',
    cfda: '10.215',
    category: 'AG',
    categoryName: 'Agriculture',
    synopsis: {
      synopsisDesc: 'Supports research and education on sustainable farming practices. Focus areas include soil health, water conservation, integrated pest management, climate-smart agriculture, and organic production systems.'
    },
    eligibility: [
      { code: '06', description: 'Public and State controlled institutions of higher education' },
      { code: '20', description: 'Private institutions of higher education' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '23', description: 'Small businesses' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Agriculture',
    estimatedTotalProgramFunding: 40000000,
    expectedNumberOfAwards: 70,
    awardCeiling: 800000,
    awardFloor: 200000,
    costSharing: 'Yes - 10% match required'
  },
  {
    id: 'USDA-2024-002',
    number: 'USDA-2024-002',
    title: 'Rural Business Development Grants',
    agency: 'Department of Agriculture',
    status: 'posted',
    openDate: '2024-02-08',
    closeDate: '2025-05-30',
    cfda: '10.351',
    category: 'AG',
    categoryName: 'Agriculture',
    synopsis: {
      synopsisDesc: 'Supports business development and job creation in rural areas. Funding for business training, technical assistance, entrepreneurship programs, and small business incubators focused on agricultural value-added products.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '02', description: 'City or township governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '23', description: 'Small businesses' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Agriculture',
    estimatedTotalProgramFunding: 28000000,
    expectedNumberOfAwards: 65,
    awardCeiling: 600000,
    awardFloor: 150000,
    costSharing: 'Yes - 25% match required'
  },

  // Arts Category
  {
    id: 'NEA-2024-001',
    number: 'NEA-2024-001',
    title: 'Arts Education Programs',
    agency: 'National Endowment for the Arts',
    status: 'posted',
    openDate: '2024-01-22',
    closeDate: '2025-04-18',
    cfda: '45.024',
    category: 'AR',
    categoryName: 'Arts',
    synopsis: {
      synopsisDesc: 'Strengthens arts education for all ages through partnerships between arts organizations and schools. Programs should integrate arts into curriculum, provide professional development for teachers, and engage underserved communities.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '06', description: 'Public and State controlled institutions of higher education' },
      { code: '05', description: 'Independent school districts' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Arts',
    estimatedTotalProgramFunding: 25000000,
    expectedNumberOfAwards: 150,
    awardCeiling: 300000,
    awardFloor: 50000,
    costSharing: 'Yes - 50% match required'
  },

  // Transportation Category
  {
    id: 'DOT-2024-001',
    number: 'DOT-2024-001',
    title: 'Safe Streets and Roads for All',
    agency: 'Department of Transportation',
    status: 'posted',
    openDate: '2024-01-12',
    closeDate: '2025-03-28',
    cfda: '20.933',
    category: 'T',
    categoryName: 'Transportation',
    synopsis: {
      synopsisDesc: 'Improves roadway safety through comprehensive safety action plans and infrastructure improvements. Focus on reducing traffic fatalities and serious injuries, with emphasis on pedestrian and bicycle safety in high-risk areas.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '01', description: 'County governments' },
      { code: '02', description: 'City or township governments' },
      { code: '07', description: 'Native American tribal governments (Federally recognized)' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Transportation',
    estimatedTotalProgramFunding: 85000000,
    expectedNumberOfAwards: 110,
    awardCeiling: 1500000,
    awardFloor: 300000,
    costSharing: 'Yes - 20% match required'
  },
  {
    id: 'DOT-2024-002',
    number: 'DOT-2024-002',
    title: 'Public Transportation Infrastructure Modernization',
    agency: 'Department of Transportation',
    status: 'posted',
    openDate: '2024-02-01',
    closeDate: '2025-04-30',
    cfda: '20.500',
    category: 'T',
    categoryName: 'Transportation',
    synopsis: {
      synopsisDesc: 'Modernizes public transit systems including bus rapid transit, light rail, and subway infrastructure. Supports zero-emission vehicle purchases, station improvements, and accessibility upgrades.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '02', description: 'City or township governments' },
      { code: '04', description: 'Special district governments' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Transportation',
    estimatedTotalProgramFunding: 120000000,
    expectedNumberOfAwards: 75,
    awardCeiling: 2500000,
    awardFloor: 500000,
    costSharing: 'Yes - 20% match required'
  },

  // Additional Education Grants
  {
    id: 'ED-GRANTS-2024-003',
    number: 'ED-GRANTS-2024-003',
    title: 'Early Childhood Education Excellence',
    agency: 'Department of Education',
    status: 'posted',
    openDate: '2024-01-08',
    closeDate: '2025-03-15',
    cfda: '84.419',
    category: 'ED',
    categoryName: 'Education',
    synopsis: {
      synopsisDesc: 'Expands access to high-quality early childhood education programs for children ages 0-5. Supports preschool development, teacher training, family engagement, and comprehensive services for low-income families.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '02', description: 'City or township governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Education',
    estimatedTotalProgramFunding: 65000000,
    expectedNumberOfAwards: 100,
    awardCeiling: 1000000,
    awardFloor: 300000,
    costSharing: 'Yes - 10% match required'
  },
  {
    id: 'ED-GRANTS-2024-004',
    number: 'ED-GRANTS-2024-004',
    title: 'Career and Technical Education Pathways',
    agency: 'Department of Education',
    status: 'posted',
    openDate: '2024-02-15',
    closeDate: '2025-05-01',
    cfda: '84.048',
    category: 'ED',
    categoryName: 'Education',
    synopsis: {
      synopsisDesc: 'Develops career and technical education programs aligned with high-demand industries. Includes work-based learning, industry partnerships, equipment purchases, and dual enrollment opportunities.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '05', description: 'Independent school districts' },
      { code: '06', description: 'Public and State controlled institutions of higher education' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Education',
    estimatedTotalProgramFunding: 55000000,
    expectedNumberOfAwards: 80,
    awardCeiling: 900000,
    awardFloor: 250000,
    costSharing: 'No'
  },
  {
    id: 'ED-GRANTS-2024-005',
    number: 'ED-GRANTS-2024-005',
    title: 'Special Education Technology Integration',
    agency: 'Department of Education',
    status: 'posted',
    openDate: '2024-01-20',
    closeDate: '2025-04-10',
    cfda: '84.327',
    category: 'ED',
    categoryName: 'Education',
    synopsis: {
      synopsisDesc: 'Integrates assistive technology and innovative teaching methods in special education programs. Supports device purchases, software licenses, teacher training, and individualized learning plans.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '05', description: 'Independent school districts' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Education',
    estimatedTotalProgramFunding: 42000000,
    expectedNumberOfAwards: 95,
    awardCeiling: 650000,
    awardFloor: 200000,
    costSharing: 'No'
  },

  // Additional Health Grants
  {
    id: 'HHS-2024-003',
    number: 'HHS-2024-003',
    title: 'Rural Health Clinic Expansion',
    agency: 'Department of Health and Human Services',
    status: 'posted',
    openDate: '2024-01-15',
    closeDate: '2025-04-25',
    cfda: '93.912',
    category: 'HL',
    categoryName: 'Health',
    synopsis: {
      synopsisDesc: 'Establishes and expands rural health clinics to improve access to primary care in underserved areas. Supports telehealth infrastructure, mobile clinics, and recruitment of healthcare professionals.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '02', description: 'City or township governments' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Health',
    estimatedTotalProgramFunding: 58000000,
    expectedNumberOfAwards: 85,
    awardCeiling: 1100000,
    awardFloor: 350000,
    costSharing: 'Yes - 15% match required'
  },
  {
    id: 'HHS-2024-004',
    number: 'HHS-2024-004',
    title: 'Substance Abuse Prevention and Treatment',
    agency: 'Department of Health and Human Services',
    status: 'posted',
    openDate: '2024-02-05',
    closeDate: '2025-05-15',
    cfda: '93.243',
    category: 'HL',
    categoryName: 'Health',
    synopsis: {
      synopsisDesc: 'Provides comprehensive substance abuse prevention, treatment, and recovery services. Focus on opioid addiction, medication-assisted treatment, peer support programs, and community education.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '01', description: 'County governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Health',
    estimatedTotalProgramFunding: 72000000,
    expectedNumberOfAwards: 95,
    awardCeiling: 1300000,
    awardFloor: 400000,
    costSharing: 'No'
  },
  {
    id: 'HHS-2024-005',
    number: 'HHS-2024-005',
    title: 'Maternal and Child Health Services',
    agency: 'Department of Health and Human Services',
    status: 'posted',
    openDate: '2024-01-25',
    closeDate: '2025-04-20',
    cfda: '93.994',
    category: 'HL',
    categoryName: 'Health',
    synopsis: {
      synopsisDesc: 'Improves maternal and child health outcomes through prenatal care, home visiting programs, and early intervention services. Addresses maternal mortality and infant health disparities.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Health',
    estimatedTotalProgramFunding: 48000000,
    expectedNumberOfAwards: 70,
    awardCeiling: 950000,
    awardFloor: 300000,
    costSharing: 'Yes - 10% match required'
  },

  // Additional Environment Grants
  {
    id: 'EPA-2024-003',
    number: 'EPA-2024-003',
    title: 'Brownfields Redevelopment Program',
    agency: 'Environmental Protection Agency',
    status: 'posted',
    openDate: '2024-01-18',
    closeDate: '2025-05-30',
    cfda: '66.818',
    category: 'ENV',
    categoryName: 'Environment',
    synopsis: {
      synopsisDesc: 'Assesses and cleans up contaminated properties for redevelopment. Supports environmental assessments, cleanup activities, and community revitalization in economically disadvantaged areas.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '01', description: 'County governments' },
      { code: '02', description: 'City or township governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Environment',
    estimatedTotalProgramFunding: 68000000,
    expectedNumberOfAwards: 110,
    awardCeiling: 1000000,
    awardFloor: 200000,
    costSharing: 'Yes - 20% match required'
  },
  {
    id: 'EPA-2024-004',
    number: 'EPA-2024-004',
    title: 'Wetlands Protection and Restoration',
    agency: 'Environmental Protection Agency',
    status: 'posted',
    openDate: '2024-02-10',
    closeDate: '2025-06-01',
    cfda: '66.461',
    category: 'ENV',
    categoryName: 'Environment',
    synopsis: {
      synopsisDesc: 'Protects and restores wetland ecosystems through conservation, restoration, and enhancement projects. Supports habitat improvement, invasive species removal, and water quality monitoring.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '07', description: 'Native American tribal governments (Federally recognized)' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Environment',
    estimatedTotalProgramFunding: 52000000,
    expectedNumberOfAwards: 90,
    awardCeiling: 800000,
    awardFloor: 250000,
    costSharing: 'Yes - 25% match required'
  },

  // Additional Energy Grants
  {
    id: 'DOE-2024-003',
    number: 'DOE-2024-003',
    title: 'Grid Modernization and Resilience',
    agency: 'Department of Energy',
    status: 'posted',
    openDate: '2024-01-28',
    closeDate: '2025-05-10',
    cfda: '81.122',
    category: 'EN',
    categoryName: 'Energy',
    synopsis: {
      synopsisDesc: 'Modernizes electric grid infrastructure to improve reliability, resilience, and integration of renewable energy. Supports smart grid technology, energy storage, and microgrid development.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '04', description: 'Special district governments' },
      { code: '22', description: 'For profit organizations other than small businesses' }
    ],
    fundingInstrument: 'Cooperative Agreement',
    categoryOfFundingActivity: 'Energy',
    estimatedTotalProgramFunding: 95000000,
    expectedNumberOfAwards: 45,
    awardCeiling: 4000000,
    awardFloor: 1000000,
    costSharing: 'Yes - 20% match required'
  },

  // Additional Community Development Grants
  {
    id: 'HUD-2024-003',
    number: 'HUD-2024-003',
    title: 'Affordable Housing Development',
    agency: 'Department of Housing and Urban Development',
    status: 'posted',
    openDate: '2024-01-22',
    closeDate: '2025-04-15',
    cfda: '14.239',
    category: 'CD',
    categoryName: 'Community Development',
    synopsis: {
      synopsisDesc: 'Develops affordable housing for low- and moderate-income families. Supports new construction, rehabilitation, and acquisition of rental and homeownership units.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '02', description: 'City or township governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Community Development',
    estimatedTotalProgramFunding: 88000000,
    expectedNumberOfAwards: 105,
    awardCeiling: 1500000,
    awardFloor: 400000,
    costSharing: 'Yes - 25% match required'
  },

  // Additional Science & Technology Grants
  {
    id: 'NSF-2024-003',
    number: 'NSF-2024-003',
    title: 'Artificial Intelligence Research Initiative',
    agency: 'National Science Foundation',
    status: 'posted',
    openDate: '2024-02-18',
    closeDate: '2025-06-15',
    cfda: '47.070',
    category: 'ST',
    categoryName: 'Science and Technology',
    synopsis: {
      synopsisDesc: 'Advances artificial intelligence research in areas including machine learning, natural language processing, computer vision, and ethical AI. Supports interdisciplinary research teams and infrastructure.'
    },
    eligibility: [
      { code: '06', description: 'Public and State controlled institutions of higher education' },
      { code: '20', description: 'Private institutions of higher education' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Science and Technology',
    estimatedTotalProgramFunding: 78000000,
    expectedNumberOfAwards: 55,
    awardCeiling: 2500000,
    awardFloor: 500000,
    costSharing: 'No'
  },

  // Additional Agriculture Grants
  {
    id: 'USDA-2024-003',
    number: 'USDA-2024-003',
    title: 'Beginning Farmer and Rancher Development',
    agency: 'Department of Agriculture',
    status: 'posted',
    openDate: '2024-02-12',
    closeDate: '2025-05-20',
    cfda: '10.311',
    category: 'AG',
    categoryName: 'Agriculture',
    synopsis: {
      synopsisDesc: 'Provides training, education, and technical assistance to beginning farmers and ranchers. Supports mentorship programs, business planning, and access to land and capital.'
    },
    eligibility: [
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' },
      { code: '06', description: 'Public and State controlled institutions of higher education' },
      { code: '20', description: 'Private institutions of higher education' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Agriculture',
    estimatedTotalProgramFunding: 38000000,
    expectedNumberOfAwards: 75,
    awardCeiling: 700000,
    awardFloor: 200000,
    costSharing: 'Yes - 25% match required'
  },

  // Additional Arts Grants
  {
    id: 'NEA-2024-002',
    number: 'NEA-2024-002',
    title: 'Community Arts Development',
    agency: 'National Endowment for the Arts',
    status: 'posted',
    openDate: '2024-02-08',
    closeDate: '2025-05-05',
    cfda: '45.025',
    category: 'AR',
    categoryName: 'Arts',
    synopsis: {
      synopsisDesc: 'Supports community-based arts programs that engage diverse populations. Includes public art installations, cultural festivals, artist residencies, and arts accessibility initiatives.'
    },
    eligibility: [
      { code: '00', description: 'State governments' },
      { code: '02', description: 'City or township governments' },
      { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
    ],
    fundingInstrument: 'Grant',
    categoryOfFundingActivity: 'Arts',
    estimatedTotalProgramFunding: 32000000,
    expectedNumberOfAwards: 180,
    awardCeiling: 250000,
    awardFloor: 50000,
    costSharing: 'Yes - 50% match required'
  },
];

// Generate additional grants programmatically to reach 100+ grants
const additionalGrantTemplates = [
  // More Education Grants
  { prefix: 'ED-GRANTS-2024', agency: 'Department of Education', category: 'ED', categoryName: 'Education', cfda: '84', titles: [
    'Digital Learning Infrastructure', 'School Safety and Security', 'Teacher Retention Programs', 'College Access Initiative',
    'Literacy Improvement Programs', 'Mathematics Excellence', 'English Language Learner Support', 'School Nutrition Programs',
    'After-School Programs', 'Summer Learning Initiatives', 'Parent Engagement Programs', 'School Counseling Services',
    'Arts Integration in Education', 'Physical Education Enhancement', 'Library Modernization', 'Education Technology Training'
  ]},
  // More Health Grants
  { prefix: 'HHS-2024', agency: 'Department of Health and Human Services', category: 'HL', categoryName: 'Health', cfda: '93', titles: [
    'Telehealth Expansion', 'Dental Health Access', 'Vision Care Programs', 'Nutrition Education', 'Diabetes Prevention',
    'Cancer Screening Initiatives', 'HIV/AIDS Prevention', 'Immunization Programs', 'Chronic Disease Management',
    'Health Workforce Development', 'Emergency Medical Services', 'Poison Control Centers', 'Trauma Care Systems',
    'Pediatric Healthcare Access', 'Geriatric Care Programs', 'Disability Services'
  ]},
  // More Environment Grants
  { prefix: 'EPA-2024', agency: 'Environmental Protection Agency', category: 'ENV', categoryName: 'Environment', cfda: '66', titles: [
    'Air Quality Monitoring', 'Lead Paint Abatement', 'Recycling Infrastructure', 'Hazardous Waste Cleanup',
    'Urban Green Spaces', 'Wildlife Habitat Restoration', 'Coastal Zone Management', 'Watershed Protection',
    'Pollution Prevention', 'Environmental Education', 'Climate Adaptation Planning', 'Sustainable Communities',
    'Green Infrastructure', 'Invasive Species Control', 'Ecosystem Restoration', 'Water Conservation'
  ]},
  // More Energy Grants
  { prefix: 'DOE-2024', agency: 'Department of Energy', category: 'EN', categoryName: 'Energy', cfda: '81', titles: [
    'Solar Panel Installation', 'Wind Energy Development', 'Geothermal Systems', 'Hydroelectric Modernization',
    'Energy Storage Solutions', 'Smart Meter Deployment', 'Building Energy Audits', 'Industrial Energy Efficiency',
    'Electric Vehicle Charging', 'Biofuel Research', 'Nuclear Safety', 'Carbon Capture Technology',
    'Energy Education Programs', 'Utility Assistance Programs', 'Renewable Energy Training'
  ]},
  // More Community Development Grants
  { prefix: 'HUD-2024', agency: 'Department of Housing and Urban Development', category: 'CD', categoryName: 'Community Development', cfda: '14', titles: [
    'Neighborhood Revitalization', 'Historic Preservation', 'Fair Housing Programs', 'Lead Hazard Control',
    'Homeless Veterans Support', 'Youth Homelessness Prevention', 'Emergency Shelter Grants', 'Transitional Housing',
    'Homeownership Counseling', 'Rental Assistance Programs', 'Community Facilities', 'Economic Development',
    'Job Training Centers', 'Small Business Incubators', 'Public Infrastructure'
  ]},
  // More Science & Technology Grants
  { prefix: 'NSF-2024', agency: 'National Science Foundation', category: 'ST', categoryName: 'Science and Technology', cfda: '47', titles: [
    'Quantum Computing Research', 'Cybersecurity Innovation', 'Biotechnology Development', 'Nanotechnology Research',
    'Space Science Programs', 'Ocean Research', 'Climate Science', 'Materials Science',
    'Engineering Education', 'Computer Science Education', 'STEM Diversity Programs', 'Research Infrastructure',
    'Data Science Initiatives', 'Robotics Research', 'Neuroscience Studies'
  ]},
  // More Agriculture Grants
  { prefix: 'USDA-2024', agency: 'Department of Agriculture', category: 'AG', categoryName: 'Agriculture', cfda: '10', titles: [
    'Organic Certification Support', 'Farmers Market Promotion', 'Local Food Systems', 'Agricultural Research',
    'Crop Insurance Programs', 'Livestock Health', 'Soil Conservation', 'Water Management',
    'Pest Management', 'Agricultural Education', 'Rural Broadband', 'Farm Safety Programs',
    'Agricultural Marketing', 'Value-Added Processing', 'Cooperative Development'
  ]},
  // More Arts Grants
  { prefix: 'NEA-2024', agency: 'National Endowment for the Arts', category: 'AR', categoryName: 'Arts', cfda: '45', titles: [
    'Folk Arts Programs', 'Music Education', 'Theater Development', 'Dance Programs',
    'Visual Arts Support', 'Literary Arts', 'Media Arts', 'Arts Accessibility',
    'Cultural Heritage', 'Arts Therapy', 'Youth Arts Programs', 'Artist Fellowships',
    'Arts Facilities', 'Arts Management Training', 'Digital Arts Innovation'
  ]},
  // More Transportation Grants
  { prefix: 'DOT-2024', agency: 'Department of Transportation', category: 'T', categoryName: 'Transportation', cfda: '20', titles: [
    'Bicycle Infrastructure', 'Pedestrian Safety', 'Bridge Repair', 'Road Maintenance',
    'Traffic Signal Modernization', 'Transit Security', 'Airport Improvements', 'Port Development',
    'Rail Safety', 'Highway Safety', 'Rural Transportation', 'Accessible Transportation',
    'Transportation Planning', 'Freight Efficiency', 'Autonomous Vehicle Testing'
  ]}
];

let grantCounter = 100;
additionalGrantTemplates.forEach(template => {
  template.titles.forEach((title, index) => {
    const grantNumber = `${template.prefix}-${String(grantCounter).padStart(3, '0')}`;
    const monthOffset = (index % 12) + 1;
    const openDate = `2024-${String(monthOffset).padStart(2, '0')}-${String((index % 28) + 1).padStart(2, '0')}`;
    const closeMonth = ((monthOffset + 3) % 12) + 1;
    const closeYear = closeMonth < monthOffset ? 2026 : 2025;
    const closeDate = `${closeYear}-${String(closeMonth).padStart(2, '0')}-${String((index % 28) + 1).padStart(2, '0')}`;
    
    const funding = [25000000, 35000000, 45000000, 55000000, 65000000, 75000000][index % 6];
    const awards = [40, 60, 80, 100, 120, 150][index % 6];
    const ceiling = [500000, 750000, 1000000, 1500000, 2000000][index % 5];
    const floor = [100000, 150000, 200000, 250000, 300000][index % 5];
    
    const eligibilities = [
      [
        { code: '00', description: 'State governments' },
        { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
      ],
      [
        { code: '00', description: 'State governments' },
        { code: '02', description: 'City or township governments' },
        { code: '12', description: 'Nonprofits having a 501(c)(3) status with the IRS' }
      ],
      [
        { code: '06', description: 'Public and State controlled institutions of higher education' },
        { code: '20', description: 'Private institutions of higher education' }
      ],
      [
        { code: '00', description: 'State governments' },
        { code: '01', description: 'County governments' },
        { code: '02', description: 'City or township governments' }
      ]
    ];
    
    const costSharingOptions = ['No', 'Yes - 10% match required', 'Yes - 20% match required', 'Yes - 25% match required'];
    
    seedGrants.push({
      id: grantNumber,
      number: grantNumber,
      title: title,
      agency: template.agency,
      status: 'posted',
      openDate: openDate,
      closeDate: closeDate,
      cfda: `${template.cfda}.${String(100 + index).substring(1)}`,
      category: template.category,
      categoryName: template.categoryName,
      synopsis: {
        synopsisDesc: `This grant program supports ${title.toLowerCase()} initiatives to improve services and outcomes for communities across the nation. Funding will support program development, implementation, evaluation, and sustainability efforts.`
      },
      eligibility: eligibilities[index % 4],
      fundingInstrument: index % 5 === 0 ? 'Cooperative Agreement' : 'Grant',
      categoryOfFundingActivity: template.categoryName,
      estimatedTotalProgramFunding: funding,
      expectedNumberOfAwards: awards,
      awardCeiling: ceiling,
      awardFloor: floor,
      costSharing: costSharingOptions[index % 4]
    });
    
    grantCounter++;
  });
});

// Category metadata
export const categories = [
  { code: 'ED', name: 'Education', icon: 'GraduationCap', color: 'blue' },
  { code: 'HL', name: 'Health', icon: 'Heart', color: 'red' },
  { code: 'ENV', name: 'Environment', icon: 'Leaf', color: 'green' },
  { code: 'EN', name: 'Energy', icon: 'Zap', color: 'yellow' },
  { code: 'CD', name: 'Community Development', icon: 'Home', color: 'purple' },
  { code: 'ST', name: 'Science & Technology', icon: 'Cpu', color: 'indigo' },
  { code: 'AG', name: 'Agriculture', icon: 'Sprout', color: 'lime' },
  { code: 'AR', name: 'Arts', icon: 'Palette', color: 'pink' },
  { code: 'T', name: 'Transportation', icon: 'Car', color: 'orange' },
];

