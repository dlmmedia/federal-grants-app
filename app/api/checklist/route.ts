import { NextRequest, NextResponse } from 'next/server';
import jsPDF from 'jspdf';

export const runtime = 'nodejs';

// POST - Generate a grant-specific checklist PDF
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { grantId, grant } = body;

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

    if (!grantDetails) {
      return NextResponse.json(
        { error: 'Grant data is required' },
        { status: 400 }
      );
    }

    // Create PDF
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const lineHeight = 7;
    let yPosition = margin;

    // Helper function to add text with word wrap
    const addText = (text: string, fontSize: number = 12, isBold: boolean = false) => {
      doc.setFontSize(fontSize);
      if (isBold) {
        doc.setFont('helvetica', 'bold');
      } else {
        doc.setFont('helvetica', 'normal');
      }

      const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
      
      for (const line of lines) {
        if (yPosition > pageHeight - margin) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      }
    };

    const addCheckbox = (text: string) => {
      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      
      // Draw checkbox
      doc.rect(margin, yPosition - 4, 4, 4);
      
      // Add text
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(text, pageWidth - 2 * margin - 10);
      doc.text(lines, margin + 8, yPosition);
      yPosition += lineHeight * lines.length;
    };

    const addSection = (title: string) => {
      yPosition += 5;
      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(title, margin, yPosition);
      yPosition += lineHeight + 2;
    };

    // Header
    doc.setFillColor(41, 128, 185);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Grant Application Checklist', margin, 25);
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    yPosition = 50;

    // Grant Information
    addSection('Grant Information');
    addText(`Title: ${grantDetails.title}`, 11);
    addText(`Agency: ${grantDetails.agency}`, 11);
    addText(`Opportunity ID: ${grantDetails.grantsgov_id || grantDetails.id || grantDetails.number}`, 11);
    
    const closeDate = grantDetails.closeDate || grantDetails.close_date;
    if (closeDate) {
      const formattedDate = new Date(closeDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      addText(`Deadline: ${formattedDate}`, 11);
      
      // Calculate days until deadline
      const today = new Date();
      const deadline = new Date(closeDate);
      const daysRemaining = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      if (daysRemaining > 0) {
        addText(`Days Remaining: ${daysRemaining} days`, 11, true);
      }
    }

    if (grantDetails.cfda) {
      addText(`CFDA Number: ${grantDetails.cfda}`, 11);
    }

    if (grantDetails.fundingInstrument) {
      addText(`Funding Instrument: ${grantDetails.fundingInstrument}`, 11);
    }

    if (grantDetails.estimatedTotalProgramFunding) {
      addText(`Total Program Funding: $${grantDetails.estimatedTotalProgramFunding.toLocaleString()}`, 11);
    }

    if (grantDetails.expectedNumberOfAwards) {
      addText(`Expected Awards: ${grantDetails.expectedNumberOfAwards}`, 11);
    }

    if (grantDetails.awardCeiling) {
      addText(`Award Ceiling: $${grantDetails.awardCeiling.toLocaleString()}`, 11);
    }

    if (grantDetails.awardFloor) {
      addText(`Award Floor: $${grantDetails.awardFloor.toLocaleString()}`, 11);
    }

    // Grant-Specific Requirements
    if (grantDetails.eligibility) {
      addSection('Eligibility Requirements');
      addText('Verify your organization meets the following eligibility criteria:', 11);
      yPosition += 3;
      
      if (Array.isArray(grantDetails.eligibility)) {
        grantDetails.eligibility.forEach((item: any) => {
          const eligText = item.description || item.code || JSON.stringify(item);
          addCheckbox(eligText);
        });
      } else if (typeof grantDetails.eligibility === 'string') {
        addCheckbox(grantDetails.eligibility);
      }
    }

    // Pre-Application Phase
    addSection('Pre-Application Phase (Allow 4-6 weeks)');
    addCheckbox('Review complete grant opportunity announcement and all attachments');
    addCheckbox('Verify eligibility requirements for your organization type');
    addCheckbox('Register with SAM.gov (System for Award Management) - Allow 2-4 weeks');
    addCheckbox('Obtain UEI (Unique Entity Identifier) number');
    addCheckbox('Register with Grants.gov and obtain login credentials');
    addCheckbox('Download and review all required forms and application package');
    addCheckbox('Review past awarded grants (if available) for guidance');
    addCheckbox('Identify and confirm availability of key personnel');
    addCheckbox('Assess organizational capacity, resources, and readiness');
    addCheckbox('Determine if cost-sharing or matching funds are required');

    // Planning Phase
    addSection('Planning Phase (3-4 weeks before deadline)');
    addCheckbox('Develop comprehensive project concept aligned with grant priorities');
    addCheckbox('Conduct thorough needs assessment with supporting data');
    addCheckbox('Review similar funded projects and success stories');
    addCheckbox('Identify and secure commitments from project partners');
    addCheckbox('Develop detailed project timeline with milestones and deliverables');
    addCheckbox('Create preliminary budget aligned with grant requirements');
    addCheckbox('Identify and secure matching funds or cost-sharing (if required)');
    addCheckbox('Obtain or verify current indirect cost rate agreement');
    addCheckbox('Develop logic model or theory of change');
    addCheckbox('Create evaluation plan with measurable outcomes');
    addCheckbox('Plan for sustainability beyond grant period');

    // Writing Phase
    addSection('Writing Phase (2-3 weeks before deadline)');
    addCheckbox('Write compelling project abstract/executive summary (250-300 words)');
    addCheckbox('Develop comprehensive project narrative with all required sections');
    addCheckbox('Write statement of need with supporting data and citations');
    addCheckbox('Describe project design, methodology, and implementation plan');
    addCheckbox('Document organizational capacity and relevant experience');
    addCheckbox('Create detailed line-item budget with calculations');
    addCheckbox('Write comprehensive budget narrative and justification');
    addCheckbox('Prepare organizational information and history');
    addCheckbox('Draft and collect letters of support and commitment');
    addCheckbox('Develop detailed evaluation plan with metrics and indicators');
    addCheckbox('Create sustainability and continuation plan');
    addCheckbox('Prepare dissemination and replication strategy');
    addCheckbox('Address all review criteria from the announcement');

    // Required Documents
    addSection('Required Documents and Attachments');
    addCheckbox('SF-424 (Application for Federal Assistance) - completed and signed');
    addCheckbox('SF-424A (Budget Information - Non-Construction Programs)');
    addCheckbox('SF-424B (Assurances - Non-Construction Programs)');
    addCheckbox('Project narrative (follow page limits and formatting requirements)');
    addCheckbox('Budget narrative and detailed justification');
    addCheckbox('Organizational chart showing project structure');
    addCheckbox('Letters of support from partners and stakeholders');
    addCheckbox('Letters of commitment from collaborating organizations');
    addCheckbox('Resumes/CVs of key personnel (follow page limits)');
    addCheckbox('Job descriptions for positions to be filled');
    addCheckbox('IRS 501(c)(3) determination letter (if nonprofit)');
    addCheckbox('Proof of nonprofit status or government entity');
    addCheckbox('Current indirect cost rate agreement (if applicable)');
    addCheckbox('Most recent audited financial statements');
    addCheckbox('Logic model or theory of change diagram');
    addCheckbox('Data collection tools and instruments');
    addCheckbox('Timeline/Gantt chart of project activities');
    addCheckbox('Memoranda of Understanding (MOUs) with partners');
    addCheckbox('Other attachments as specified in the announcement');

    // Review Phase
    addSection('Review Phase (1 week before deadline)');
    addCheckbox('Internal review by project team members');
    addCheckbox('Review by grants office or grants administrator');
    addCheckbox('External review by subject matter experts (if available)');
    addCheckbox('Verify compliance with all formatting requirements');
    addCheckbox('Confirm all page limits are met (not exceeded)');
    addCheckbox('Ensure all required sections and attachments are complete');
    addCheckbox('Check that all review criteria are addressed');
    addCheckbox('Verify consistency across all documents');
    addCheckbox('Proofread thoroughly for grammar, spelling, and clarity');
    addCheckbox('Verify all budget calculations and totals');
    addCheckbox('Confirm all required signatures are obtained');
    addCheckbox('Check that all partner commitments are documented');
    addCheckbox('Verify UEI/DUNS number is correct throughout');
    addCheckbox('Ensure all cross-references are accurate');

    // Submission Phase
    addSection('Submission Phase (Submit at least 48 hours early)');
    addCheckbox('Create application package in Grants.gov Workspace');
    addCheckbox('Upload all documents in required formats (PDF, Word, etc.)');
    addCheckbox('Complete all required forms in Grants.gov system');
    addCheckbox('Verify all attachments are properly uploaded and readable');
    addCheckbox('Review complete application package before submission');
    addCheckbox('Obtain final authorization from Authorized Organization Representative');
    addCheckbox('Submit application package through Grants.gov');
    addCheckbox('Receive and save submission confirmation email');
    addCheckbox('Record Grants.gov tracking number');
    addCheckbox('Monitor application status for validation');
    addCheckbox('Respond immediately to any validation errors or warnings');
    addCheckbox('Confirm successful submission with grantor agency (if required)');
    addCheckbox('Keep backup copies of complete application package');

    // Post-Submission
    addSection('Post-Submission Follow-Up');
    addCheckbox('Keep complete copies of all submitted materials and backup files');
    addCheckbox('Track application status regularly in Grants.gov');
    addCheckbox('Monitor email for communications from grantor agency');
    addCheckbox('Prepare for potential site visits, interviews, or presentations');
    addCheckbox('Be ready to provide additional information or clarifications');
    addCheckbox('Respond promptly to any agency requests or questions');
    addCheckbox('Note expected award notification date and timeline');
    addCheckbox('Begin planning for project implementation (if confident)');
    addCheckbox('Maintain contact with partners and stakeholders');
    addCheckbox('Document lessons learned for future applications');

    // Important Notes Section
    addSection('Important Reminders');
    addText('• Submit your application at least 48-72 hours before the deadline', 10);
    addText('• Grants.gov can experience high traffic near deadlines', 10);
    addText('• Technical issues are NOT grounds for late submission', 10);
    addText('• Keep all documentation for at least 3 years after project completion', 10);
    addText('• Review the Federal Register notice for complete requirements', 10);
    
    if (closeDate) {
      yPosition += 5;
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(220, 38, 38);
      const formattedDate = new Date(closeDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      doc.text(`APPLICATION DEADLINE: ${formattedDate}`, margin, yPosition);
    }

    // Footer on each page
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.setTextColor(128, 128, 128);
      doc.text('Generated by GrantScope', margin, pageHeight - 10);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
      doc.text(new Date().toLocaleDateString(), pageWidth - margin - 30, pageHeight - 10);
    }

    // Generate PDF buffer
    const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

    // Return PDF
    const filename = `grant-checklist-${grantDetails.grantsgov_id || grantDetails.id || grantDetails.number || 'application'}.pdf`;
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('Checklist generation error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate checklist',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
