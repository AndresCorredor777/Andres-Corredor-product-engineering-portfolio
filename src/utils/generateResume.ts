import { jsPDF } from 'jspdf';

export const generateResume = async () => {
    // Try to use a pre-built PDF placed in the app `public/` folder
    // (e.g. `public/Resume_Engineering_EN.pdf`). If it exists, download
    // that file. Otherwise fall back to generating the PDF dynamically.
    try {
        const res = await fetch('/Resume_Engineering_EN.pdf', { method: 'HEAD' });
        if (res.ok) {
            const a = document.createElement('a');
            a.href = '/Resume_Engineering_EN.pdf';
            a.download = 'Andres_Corredor_Resume.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            return;
        }
    } catch (e) {
        // network errors or CORS issues fall through to generate dynamically
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPos = 20;

    // Helper to add text and advance cursor
    const addText = (text: string, size: number, style: 'normal' | 'bold' | 'italic' = 'normal', align: 'left' | 'center' | 'right' = 'left', color: string = '#000000') => {
        doc.setFontSize(size);
        doc.setFont('helvetica', style);
        doc.setTextColor(color);

        const lines = doc.splitTextToSize(text, pageWidth - (margin * 2));

        if (align === 'center') {
            doc.text(lines, pageWidth / 2, yPos, { align: 'center' });
        } else if (align === 'right') {
            doc.text(lines, pageWidth - margin, yPos, { align: 'right' });
        } else {
            doc.text(lines, margin, yPos);
        }

        yPos += (lines.length * size * 0.5) + 2;
    };

    // Helper for section headers
    const addSectionHeader = (title: string) => {
        yPos += 5;
        doc.setFillColor(30, 41, 59); // Slate-900
        doc.rect(margin, yPos, pageWidth - (margin * 2), 8, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(title.toUpperCase(), pageWidth / 2, yPos + 5.5, { align: 'center' });
        yPos += 12;
        doc.setTextColor(0, 0, 0);
    };

    // --- HEADER ---
    addText('ANDRÉS CORREDOR', 22, 'bold', 'center', '#0f172a');
    addText('MECHATRONICS ENGINEER', 14, 'bold', 'center', '#334155');
    addText('andrescorredor345@gmail.com | Colombia', 10, 'normal', 'center', '#64748b');
    addText('Portfolio: [Link] | LinkedIn: [Link]', 10, 'normal', 'center', '#64748b');
    yPos += 5;

    // --- PROFESSIONAL PROFILE ---
    addSectionHeader('Professional Profile');
    addText('I am a versatile and goal-oriented Mechatronics Engineer with expertise in language teaching, engineering research, and AI system optimization. Passionate about integrating innovative solutions to address complex challenges. I thrive in multidisciplinary teams and dynamic environments. With a strong foundation in technical knowledge, cultural competence, and communication skills, I aim to contribute to impactful projects that merge engineering with global needs.', 10, 'normal', 'left', '#334155');

    // --- RELEVANT EXPERIENCE ---
    addSectionHeader('Relevant Experience');

    addText('Project Consultant in Spanish for Optimization of AI Systems', 11, 'bold');
    addText('Outlier, USA (Remote) | 2024', 10, 'italic', 'left', '#475569');
    addText('• Collaborated in optimizing AI language models in Spanish through reviewing, adapting, and refining AI-generated responses.', 10);
    addText('• Enhanced content accuracy, fluency, and relevance for diverse use cases.', 10);
    addText('• Analyzed content for linguistic, cultural, and stylistic alignment, providing detailed feedback for system improvements.', 10);
    yPos += 3;

    addText('ELE Teacher (Spanish as a Foreign Language) and Content Creator', 11, 'bold');
    addText('Voxy, USA (Remote) | 2024', 10, 'italic', 'left', '#475569');
    addText('• Designed and delivered interactive lessons for learners (A1 to B2), focusing on speaking, listening, reading, and writing skills.', 10);
    addText('• Integrated cultural insights into lessons to enhance students\' understanding of Hispanic culture.', 10);
    addText('• Leveraged multimedia tools to create engaging and personalized learning experiences.', 10);
    yPos += 3;

    addText('Workshop Instructor in Engineering', 11, 'bold');
    addText('Freelance | 2024', 10, 'italic', 'left', '#475569');
    addText('• Designed and facilitated interactive workshops on robotics, electronics, and mechanics.', 10);
    addText('• Created instructional materials, hands-on activities, and demonstrations tailored to various skill levels.', 10);
    yPos += 3;

    addText('Researcher', 11, 'bold');
    addText('Universidad de Boyacá, Colombia | 2022-2024', 10, 'italic', 'left', '#475569');
    addText('• Conducted interdisciplinary research projects in engineering, emphasizing innovative problem-solving.', 10);
    addText('• Collaborated across teams to analyze data, develop methodologies, and present findings effectively.', 10);
    addText('• Authored technical reports and contributed to advancing knowledge in applied engineering.', 10);

    // --- EDUCATION ---
    addSectionHeader('Education');
    addText('Bachelor\'s in Mechatronics Engineering', 11, 'bold');
    addText('Universidad de Boyacá, Colombia | 2020 – 2026 (Expected)', 10, 'italic', 'left', '#475569');
    addText('• Merit-based Research Scholar (2023)', 10);
    addText('• Highest academic GPA in 2023', 10);
    addText('• Lead member of the SIROM research group', 10);
    yPos += 3;

    addText('ELE Teaching Specialization (150h)', 11, 'bold');
    addText('European University Miguel de Cervantes, Spain | 2023', 10, 'italic', 'left', '#475569');

    // --- SKILLS & LANGUAGES (Side by Side roughly, or sequential for simplicity) ---
    // For simplicity in this script, we'll do sequential but compact
    addSectionHeader('Skills & Languages');

    addText('Languages:', 11, 'bold');
    addText('• Spanish (Native) • English (C1) • Portuguese (A2)', 10);
    yPos += 2;

    addText('Technical Skills:', 11, 'bold');
    addText('• CAD/CAM Design (SolidWorks, FlatCAM)', 10);
    addText('• Microcontroller Programming (PIC, Arduino)', 10);
    addText('• Digital & Analog Electronics | PCB Design', 10);
    addText('• Automation (TIA Portal) | MATLAB | Proteus', 10);
    addText('• Manufacturing: Welding, 3D Printing, CNC', 10);
    addText('• Project Leadership & Management', 10);

    // --- RECOGNITIONS ---
    addSectionHeader('Recognitions');
    addText('• Outstanding Volunteer Award – 2024', 10);
    addText('• Academic Merit Research Scholarship – 2023', 10);
    addText('• Leadership in extracurricular clubs (dance, sports, languages)', 10);

    // Produce a Blob and trigger a download via an object URL to ensure the
    // downloaded file is the correct PDF format across browsers and platforms.
    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Andres_Corredor_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Release the object URL after a short delay to ensure the download starts
    setTimeout(() => URL.revokeObjectURL(url), 1000);
};
