import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity no-print"
        onClick={onClose}
      ></div>

      {/* Resume Container */}
      <div className="relative w-full max-w-4xl max-h-[95vh] bg-white text-slate-900 border border-slate-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-fade-in">
        
        {/* Controls Bar */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-100 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-800">
              Khushal Rawal — Official Placement CV Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper Document Preview Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-xs text-slate-800 font-sans leading-relaxed bg-white">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-3">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold font-serif text-slate-950 tracking-tight">
                  Khushal Rawal
                </h1>
                <p className="text-xs font-semibold text-slate-700">
                  Roll No: 230103049 | B.Tech - Mechanical Engineering
                </p>
                <p className="text-xs font-bold text-slate-900">
                  Indian Institute of Technology, Guwahati
                </p>
              </div>

              <div className="text-right text-xs text-slate-700 space-y-0.5">
                <p className="font-semibold">{portfolioData.personal.phone}</p>
                <p className="text-blue-700">{portfolioData.personal.instiEmail}</p>
                <p className="text-blue-700">{portfolioData.personal.email}</p>
                <p className="text-slate-600">GitHub | LinkedIn</p>
              </div>
            </div>
          </div>

          {/* Education Table */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              Education
            </h2>
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-slate-300 font-semibold text-slate-800">
                  <th className="py-1">Degree / Certificate</th>
                  <th className="py-1">Institute / Board</th>
                  <th className="py-1">CGPA / Percentage</th>
                  <th className="py-1 text-right">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-1 font-medium">B.Tech. Major</td>
                  <td className="py-1">Indian Institute of Technology, Guwahati</td>
                  <td className="py-1 font-bold">7.00 (Current)</td>
                  <td className="py-1 text-right">2023 - Present</td>
                </tr>
                <tr>
                  <td className="py-1">Senior Secondary</td>
                  <td className="py-1">Central Board of Secondary Education</td>
                  <td className="py-1">87%</td>
                  <td className="py-1 text-right">2023</td>
                </tr>
                <tr>
                  <td className="py-1">Secondary</td>
                  <td className="py-1">Central Board of Secondary Education</td>
                  <td className="py-1">92.7%</td>
                  <td className="py-1 text-right">2021</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              Experience
            </h2>
            
            <div className="space-y-3">
              {/* STEM Vibe */}
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>• Founder's Office | STEM Vibe | The Integral Cup</span>
                  <span className="font-normal text-slate-600">Jun 2025 - Dec 2026</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 pl-2 space-y-0.5 mt-0.5">
                  <li>Owned end-to-end operations for the first ever Integral Cup, driving <strong className="text-slate-900">800% MoM growth</strong> across 27+ premier Indian institutes.</li>
                  <li>Raised <strong className="text-slate-900">1cr+ in sponsorships</strong> from Optiver, Jane Street & QRT for the debut edition, led a 10+ member core team, and onboarded 27+ campus ambassadors.</li>
                  <li>Reshaped website UI/UX and registration flow across 3 tracks, streamlining user experience for nationwide event execution.</li>
                </ul>
              </div>

              {/* Estate Plus */}
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>• Business Development Intern | Estate Plus</span>
                  <span className="font-normal text-slate-600">May 2026 - June 2026</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 pl-2 space-y-0.5 mt-0.5">
                  <li>Expanded regional customer acquisition by engaging <strong className="text-slate-900">450+ real-estate prospects</strong> across 8 cities and driving qualified leads.</li>
                  <li>Analyzed sales funnel conversion patterns across <strong className="text-slate-900">300+ leads</strong> to identify drop-offs and improve overall acquisition efficiency.</li>
                  <li>Increased organic reach and lead acquisition through SEO strategies, content optimization, and 50+ quality backlinks.</li>
                </ul>
              </div>

              {/* Snukio */}
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>• Market Research Intern | Trove Ventures (Snukio)</span>
                  <span className="font-normal text-slate-600">Jun 2026 - Jul 2026</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 pl-2 space-y-0.5 mt-0.5">
                  <li>Built a <strong className="text-slate-900">120+ point VoC model</strong> across 3 stakeholder groups, mapping demand across 9 sports for Snukio's GTM.</li>
                  <li>Sized India's <strong className="text-slate-900">$130B sports retail market</strong>, benchmarking 4 competitors to identify 4 market opportunities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              Projects
            </h2>

            <div className="space-y-3">
              {/* Clockit Hair */}
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>• Clockit Hair | D2C Rosemary Water Hair-Care Brand</span>
                  <span className="font-normal text-slate-600">Jun 2026</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 pl-2 space-y-0.5 mt-0.5">
                  <li>Identified a market opportunity in rosemary-based hair care through competitor research, leading to the launch of Clockit Hair.</li>
                  <li>Achieved early traction with <strong className="text-slate-900">31.7K+ Instagram views</strong>, 6.5K interactions, 3.6K+ profile visits, and 340+ followers in 90 days.</li>
                  <li>Built WhatsApp sales funnel with chatbot-assisted lead qualification, generating 150+ inquiries and 50+ customers.</li>
                  <li>Executed GTM, unit economics, and performance marketing, tracking CTR, CPC, CAC & ROAS; <strong className="text-slate-900">76% gross margin</strong>.</li>
                </ul>
              </div>

              {/* Dream11 */}
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>• AI-Powered Fantasy Sports Product Growth Strategy | Dream11</span>
                  <span className="font-normal text-slate-600">Dec 2024</span>
                </div>
                <p className="text-[11px] italic text-slate-600 pl-2">Inter-IIT Tech Meet 13.0, IIT Bombay — Bronze Medal</p>
                <ul className="list-disc list-inside text-slate-700 pl-2 space-y-0.5 mt-0.5">
                  <li>Led user research with <strong className="text-slate-900">220+ responses</strong>, benchmarking 6 competitors, 2 user segments; drove dual-UI product strategy.</li>
                  <li>Spearheaded 10+ Product UI features, aligned with 73% AI adoption interest, integrating SHAP explainability for trust.</li>
                  <li>Drove ML workflow: data extraction, preprocessing, EDA, feature engineering, 5+ models (<strong className="text-slate-900">R²=0.91</strong>).</li>
                </ul>
              </div>

              {/* WorkLens */}
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>• WorkLens: Enterprise AI Knowledge Assistant | AI Product Management</span>
                  <span className="font-normal text-slate-600">2026</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 pl-2 space-y-0.5 mt-0.5">
                  <li>Built an AI knowledge assistant for HR, sales & support teams to find information, resolve queries & get cited answers.</li>
                  <li>Integrated Google Drive, Slack & Notion, unifying 3+ enterprise knowledge sources into one searchable interface.</li>
                  <li>Added access controls, freshness checks & 6 AI metrics to improve answer accuracy, relevance & response reliability.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              Positions of Responsibility
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>• Branch Representative, Mechanical Engineering Department</span>
                  <span className="font-normal text-slate-600">July 2025 – Jan 2026</span>
                </div>
                <p className="text-slate-700 pl-2">Representing a batch of 75+ peers, organizing alumni interactions, and hosting academic and career-focused workshops.</p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>• Execution Head, Alcheringa, Cultural Fest, IIT Guwahati</span>
                  <span className="font-normal text-slate-600">May 2025 – Oct 2025</span>
                </div>
                <p className="text-slate-700 pl-2">Led venue operations as Auditorium Head, conducting 10+ competitions with 200+ participants and managing Day 0 inauguration.</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              Skills & Key Courses
            </h2>
            <div className="space-y-1 text-slate-800">
              <p><strong className="text-slate-950">Product Skills:</strong> Product Discovery, Design Thinking, Roadmap, Product Analytics, A/B Testing, Product Metrics</p>
              <p><strong className="text-slate-950">Business & Analytical:</strong> Funnel Analysis, Market Research, Guesstimates, Case Interviews, Business Strategy</p>
              <p><strong className="text-slate-950">Miscellaneous:</strong> MySQL, Python (Pandas), Power BI, MATLAB, SolidWorks, AutoCAD, Figma, MS Office, Canva</p>
              <p><strong className="text-slate-950">Key Courses:</strong> Product Matters 5.0, Summer Analytics, (DA 6021) Deep Learning for Computer Vision</p>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-2 font-serif">
              Achievements and Extracurricular Activities
            </h2>
            <ul className="list-disc list-inside text-slate-700 space-y-0.5">
              <li><strong className="text-slate-900">Ranked in Top 15% in Product Matters 5.0</strong>, E-Cell, demonstrating strong product management and problem-solving skills.</li>
              <li><strong className="text-slate-900">1st Rank out of 200+ teams</strong>, Policymaker Case Competition, 2024: Case competition focused on Northeast India.</li>
              <li><strong className="text-slate-900">Product Pro 3.0, IIT Guwahati</strong>, recognized for impactful product contribution in a competitive product development challenge.</li>
              <li><strong className="text-slate-900">Represented IIT Guwahati</strong> in Inter-IIT Hockey Tournament, competed against teams from leading IITs across India.</li>
              <li><strong className="text-slate-900">Spardha Inter Hostel Cricket</strong>, Won gold representing hostel team in Inter-hostel Cricket competition 2025 among 13 hostels.</li>
              <li><strong className="text-slate-900">Peer Mentor</strong>, Guided a group of 10 freshers and sophomores, addressing academic and non-academic challenges.</li>
              <li><strong className="text-slate-900">Social Work</strong>, Raised INR 10 lakh for breast cancer awareness and treatment under the Rotary Rain Run fundraiser.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
