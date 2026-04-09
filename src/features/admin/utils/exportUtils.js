import Papa from 'papaparse';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const STATUS_LABELS = {
  new: 'Nouveau',
  contacted: 'Contacté',
  qualified: 'Qualifié',
  pilot_candidate: 'Candidat pilote',
  closed: 'Fermé',
};

const formatDate = (iso) => {
  if (!iso) return '—';
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(iso));
};

/**
 * Export submissions to CSV
 */
export const exportToCSV = (submissions, filename = 'submissions') => {
  if (!submissions || submissions.length === 0) {
    alert('Aucune donnée à exporter');
    return;
  }

  const csvData = submissions.map((sub) => ({
    Date: formatDate(sub.created_at),
    Nom: sub.full_name || '',
    Email: sub.email || '',
    Téléphone: sub.phone || '',
    Pays: sub.country || '',
    Type: sub.survey_type === 'club' ? 'Club' : 'Famille',
    Statut: STATUS_LABELS[sub.status] || sub.status,
    'Notes admin': sub.admin_notes || '',
  }));

  const csv = Papa.unparse(csvData, {
    delimiter: ',',
    header: true,
  });

  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Export submissions to PDF
 */
export const exportToPDF = (submissions, stats = null, filename = 'submissions') => {
  if (!submissions || submissions.length === 0) {
    alert('Aucune donnée à exporter');
    return;
  }

  try {
    const doc = new jsPDF('l', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Header
    doc.setFontSize(18);
    doc.setTextColor(11, 34, 68);
    doc.text('Carteron Industries - Dashboard Admin', pageWidth / 2, 15, { align: 'center' });

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Rapport généré le ${formatDate(new Date().toISOString())}`, pageWidth / 2, 22, {
      align: 'center',
    });

    let yPosition = 30;

    // Stats summary if provided
    if (stats) {
      doc.setFontSize(12);
      doc.setTextColor(11, 34, 68);
      doc.text('Statistiques', 14, yPosition);
      yPosition += 8;

      doc.setFontSize(9);
      doc.setTextColor(60, 60, 60);
      doc.text(`Total réponses: ${stats.total || 0}`, 14, yPosition);
      doc.text(`Clubs: ${stats.byType?.club || 0}`, 70, yPosition);
      doc.text(`Familles: ${stats.byType?.family || 0}`, 120, yPosition);
      doc.text(`Nouveaux: ${stats.byStatus?.new || 0}`, 170, yPosition);
      doc.text(`Candidats pilotes: ${stats.byStatus?.pilot_candidate || 0}`, 220, yPosition);
      yPosition += 10;
    }

    // Table
    const tableData = submissions.map((sub) => [
      formatDate(sub.created_at),
      sub.full_name || '',
      sub.email || '',
      sub.phone || '',
      sub.country || '',
      sub.survey_type === 'club' ? 'Club' : 'Famille',
      STATUS_LABELS[sub.status] || sub.status,
    ]);

    autoTable(doc, {
      startY: yPosition,
      head: [['Date', 'Nom', 'Email', 'Téléphone', 'Pays', 'Type', 'Statut']],
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: [11, 34, 68],
        textColor: [255, 255, 255],
        fontSize: 8,
        fontStyle: 'bold',
        halign: 'center',
      },
      bodyStyles: {
        fontSize: 7,
        textColor: [50, 50, 50],
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252],
      },
      columnStyles: {
        0: { cellWidth: 25 },
        1: { cellWidth: 35 },
        2: { cellWidth: 50 },
        3: { cellWidth: 30 },
        4: { cellWidth: 25 },
        5: { cellWidth: 25, halign: 'center' },
        6: { cellWidth: 30, halign: 'center' },
      },
      margin: { left: 14, right: 14 },
      didDrawPage: (data) => {
        // Footer
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(
          `Page ${doc.internal.getCurrentPageInfo().pageNumber}`,
          pageWidth / 2,
          pageHeight - 10,
          { align: 'center' }
        );
      },
    });

    doc.save(`${filename}_${new Date().toISOString().split('T')[0]}.pdf`);
  } catch (error) {
    console.error('Erreur lors de l\'export PDF:', error);
    alert(`Erreur lors de l'export PDF: ${error.message}`);
  }
};

/**
 * Export detailed submission to PDF (single submission with all answers)
 */
export const exportSubmissionDetailToPDF = (submission, decodedAnswers) => {
  if (!submission) {
    alert('Aucune donnée à exporter');
    return;
  }

  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header
  doc.setFontSize(16);
  doc.setTextColor(11, 34, 68);
  doc.text('Détail de la soumission', pageWidth / 2, 20, { align: 'center' });

  let yPos = 35;

  // Contact info
  doc.setFontSize(12);
  doc.setTextColor(11, 34, 68);
  doc.text('Informations de contact', 20, yPos);
  yPos += 8;

  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  const contactInfo = [
    ['Nom:', submission.full_name || '—'],
    ['Email:', submission.email || '—'],
    ['Téléphone:', submission.phone || '—'],
    ['Pays:', submission.country || '—'],
    ['Type:', submission.survey_type === 'club' ? 'Club' : 'Famille'],
    ['Statut:', STATUS_LABELS[submission.status] || submission.status],
    ['Date:', formatDate(submission.created_at)],
  ];

  contactInfo.forEach(([label, value]) => {
    doc.setFont(undefined, 'bold');
    doc.text(label, 20, yPos);
    doc.setFont(undefined, 'normal');
    doc.text(value, 60, yPos);
    yPos += 6;
  });

  yPos += 5;

  // Answers
  if (decodedAnswers && decodedAnswers.length > 0) {
    doc.setFontSize(12);
    doc.setTextColor(11, 34, 68);
    doc.text('Réponses au questionnaire', 20, yPos);
    yPos += 8;

    doc.setFontSize(9);
    decodedAnswers.forEach((answer, index) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }

      doc.setTextColor(100, 100, 100);
      doc.setFont(undefined, 'bold');
      doc.text(`Q${index + 1}: ${answer.question}`, 20, yPos);
      yPos += 5;

      doc.setTextColor(11, 34, 68);
      doc.setFont(undefined, 'normal');
      const answerText = answer.answer || '—';
      const splitAnswer = doc.splitTextToSize(answerText, 170);
      doc.text(splitAnswer, 20, yPos);
      yPos += splitAnswer.length * 5 + 3;
    });
  }

  // Admin notes
  if (submission.admin_notes) {
    yPos += 5;
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(12);
    doc.setTextColor(11, 34, 68);
    doc.text('Notes administrateur', 20, yPos);
    yPos += 8;

    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    const splitNotes = doc.splitTextToSize(submission.admin_notes, 170);
    doc.text(splitNotes, 20, yPos);
  }

  doc.save(
    `submission_${submission.full_name?.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`
  );
};
