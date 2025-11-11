import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'nodejs';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST - Generate grant application draft
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      grantId,
      grant, 
      organizationName, 
      organizationType,
      projectTitle, 
      projectSummary, 
      requestedAmount,
      projectDuration,
      contactName,
      contactEmail
    } = body;

    if (!organizationName || !projectTitle || !projectSummary) {
      return NextResponse.json(
        { error: 'Organization name, project title, and summary are required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Fetch grant details if grantId is provided
    let grantDetails = grant;
    if (grantId && !grant) {
      try {
        const grantResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/opportunity/${grantId}`);
        if (grantResponse.ok) {
          const grantData = await grantResponse.json();
          grantDetails = grantData.opportunity || grantData;
        }
      } catch (error) {
        console.warn('Failed to fetch grant details:', error);
      }
    }

    // Build comprehensive context from grant information
    const grantContext = grantDetails
      ? `
REFERENCE GRANT INFORMATION:
Grant Title: ${grantDetails.title || 'N/A'}
Agency: ${grantDetails.agency || 'N/A'}
Opportunity Number: ${grantDetails.id || grantDetails.number || grantDetails.grantsgov_id || 'N/A'}
${grantDetails.cfda ? `CFDA Number: ${grantDetails.cfda}` : ''}
${grantDetails.synopsis?.synopsisDesc ? `Grant Description: ${grantDetails.synopsis.synopsisDesc}` : ''}
${grantDetails.eligibility ? `Eligibility Requirements: ${JSON.stringify(grantDetails.eligibility)}` : ''}
${grantDetails.fundingInstrument ? `Funding Instrument: ${grantDetails.fundingInstrument}` : ''}
${grantDetails.estimatedTotalProgramFunding ? `Total Program Funding: $${grantDetails.estimatedTotalProgramFunding}` : ''}
${grantDetails.expectedNumberOfAwards ? `Expected Number of Awards: ${grantDetails.expectedNumberOfAwards}` : ''}
${grantDetails.awardCeiling ? `Award Ceiling: $${grantDetails.awardCeiling}` : ''}
${grantDetails.awardFloor ? `Award Floor: $${grantDetails.awardFloor}` : ''}
${grantDetails.costSharing ? `Cost Sharing: ${grantDetails.costSharing}` : ''}
`
      : '';

    // Generate Abstract (Executive Summary)
    const abstractPrompt = `You are an expert federal grant writer. Generate a professional Executive Summary (250-300 words) for a federal grant application structured as a formal legal document.

APPLICANT INFORMATION:
Organization: ${organizationName}
${organizationType ? `Organization Type: ${organizationType}` : ''}
Project Title: ${projectTitle}
${requestedAmount ? `Requested Funding: ${requestedAmount}` : ''}
${projectDuration ? `Project Duration: ${projectDuration}` : ''}

PROJECT DESCRIPTION:
${projectSummary}

${grantContext}

Create a formal Executive Summary that follows federal grant standards and includes:

I. STATEMENT OF NEED
- Clear articulation of the problem or gap being addressed
- Supporting evidence and data

II. PROJECT GOALS AND OBJECTIVES
- Specific, measurable objectives aligned with the grant opportunity
- Expected outcomes and deliverables

III. TARGET POPULATION
- Demographics and characteristics of beneficiaries
- Geographic scope

IV. ORGANIZATIONAL CAPACITY
- Brief statement of qualifications and relevant experience
- Key personnel and resources

V. EXPECTED IMPACT
- Quantifiable outcomes and benefits
- Sustainability plan

Format this as a formal, professional document suitable for federal grant reviewers. Use clear, concise language and maintain a formal tone throughout.`;

    const abstractResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: abstractPrompt }],
      temperature: 0.7,
      max_tokens: 600,
    });

    const executiveSummary = abstractResponse.choices[0].message.content || '';

    // Generate Goals and Objectives Section
    const goalsPrompt = `Generate a formal "GOALS AND OBJECTIVES" section for a federal grant application. Create 5 SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals with corresponding objectives.

Project Title: ${projectTitle}
Project Summary: ${projectSummary}
${projectDuration ? `Project Duration: ${projectDuration}` : ''}

${grantContext}

Format each goal as:

GOAL [Number]: [Clear, concise goal statement]
Objectives:
- Objective 1.1: [Specific, measurable objective with timeline]
- Objective 1.2: [Specific, measurable objective with timeline]

Ensure all objectives include:
- Specific action verbs (develop, implement, increase, reduce, etc.)
- Measurable outcomes (percentages, numbers, timeframes)
- Clear deliverables
- Alignment with the grant opportunity requirements

Write in formal, professional language suitable for federal grant reviewers.`;

    const goalsResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: goalsPrompt }],
      temperature: 0.7,
      max_tokens: 800,
    });

    const goalsAndObjectives = goalsResponse.choices[0].message.content || '';

    // Generate Comprehensive Project Narrative
    const narrativePrompt = `You are an expert federal grant writer. Generate a comprehensive PROJECT NARRATIVE (800-1000 words) structured as a formal legal grant document with clear sections and subsections.

APPLICANT INFORMATION:
Organization: ${organizationName}
${organizationType ? `Organization Type: ${organizationType}` : ''}
Project Title: ${projectTitle}
${requestedAmount ? `Requested Funding: ${requestedAmount}` : ''}
${projectDuration ? `Project Duration: ${projectDuration}` : ''}

PROJECT DESCRIPTION:
${projectSummary}

${grantContext}

Structure the narrative with the following sections:

I. STATEMENT OF NEED
- Comprehensive problem statement with supporting data
- Current gaps in services or resources
- Target population demographics and needs assessment
- Alignment with federal priorities and grant objectives

II. PROJECT DESIGN AND IMPLEMENTATION
- Detailed methodology and approach
- Project activities and timeline
- Key milestones and deliverables
- Evidence-based practices and innovation
- Partnerships and collaborations

III. ORGANIZATIONAL CAPACITY AND EXPERIENCE
- Organizational history and mission alignment
- Relevant past performance and success stories
- Key personnel qualifications
- Facilities, equipment, and resources
- Financial stability and management systems

IV. EVALUATION AND PERFORMANCE MEASUREMENT
- Logic model or theory of change
- Performance indicators and metrics
- Data collection methods and tools
- Evaluation timeline and reporting plan
- Quality assurance procedures

V. SUSTAINABILITY AND DISSEMINATION
- Long-term sustainability strategy
- Resource development plan
- Knowledge dissemination and replication
- Community engagement and stakeholder involvement

Write in formal, professional language with clear headings and subheadings. Use evidence-based arguments and maintain consistency with federal grant writing standards.`;

    const narrativeResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: narrativePrompt }],
      temperature: 0.7,
      max_tokens: 1800,
    });

    const projectNarrative = narrativeResponse.choices[0].message.content || '';

    // Generate Budget Narrative and Justification
    const budgetPrompt = `Generate a comprehensive BUDGET NARRATIVE AND JUSTIFICATION section for a federal grant application.

APPLICANT INFORMATION:
Organization: ${organizationName}
Project Title: ${projectTitle}
${requestedAmount ? `Total Requested Amount: ${requestedAmount}` : 'Total Budget: To be determined'}
${projectDuration ? `Project Duration: ${projectDuration}` : ''}

${grantContext}

Create a detailed budget justification organized by standard federal budget categories:

A. PERSONNEL
- Project Director/Principal Investigator
- Program Manager
- Direct Service Staff
- Administrative Support
Include: Position titles, FTE percentages, salary calculations, fringe benefits

B. FRINGE BENEFITS
- Health insurance, retirement, FICA, unemployment insurance
- Calculation methodology

C. TRAVEL
- Staff travel for project activities
- Conference attendance
- Mileage, per diem, lodging rates

D. EQUIPMENT
- Items over $5,000 per unit
- Justification for necessity

E. SUPPLIES
- General office supplies
- Program-specific materials
- Technology and software

F. CONTRACTUAL
- Consultants and contractors
- Scope of work and deliverables
- Selection process

G. OTHER DIRECT COSTS
- Communications, printing, postage
- Training and professional development
- Participant support costs

H. INDIRECT COSTS
- Negotiated indirect cost rate
- Calculation basis

For each category:
1. Provide specific line items with calculations
2. Justify necessity and reasonableness
3. Explain how costs support project objectives
4. Demonstrate cost-effectiveness and good stewardship of federal funds

Use formal language and follow federal cost principles (2 CFR Part 200).`;

    const budgetResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: budgetPrompt }],
      temperature: 0.7,
      max_tokens: 1200,
    });

    const budgetNarrative = budgetResponse.choices[0].message.content || '';

    // Return generated content in structured format
    return NextResponse.json({
      success: true,
      grant: grantDetails,
      content: {
        executiveSummary,
        goalsAndObjectives,
        projectNarrative,
        budgetNarrative,
      },
      metadata: {
        organizationName,
        organizationType,
        projectTitle,
        requestedAmount,
        projectDuration,
        contactName,
        contactEmail,
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Generation error:', error);
    
    // Check if it's an OpenAI API error
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { 
          error: 'OpenAI API error',
          message: error.message,
          details: 'Please check your API key and usage limits'
        },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Failed to generate content',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
