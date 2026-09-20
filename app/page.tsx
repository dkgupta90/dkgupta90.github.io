import Image from 'next/image';
import { ArrowUpRight, Download, Mail } from 'lucide-react';

const experience = [
  {
    dates: 'May 2025 — Present',
    organisation: 'Amazon',
    role: 'Applied Science Manager, Model Compression',
    location: 'Dubai, UAE',
    summary:
      "Leads a team of ML scientists within Amazon's ML research organisation, building the internal model-compression platform as part of the hardware–software co-design initiative and working with product, platform and hardware teams on adoption.",
    detail:
      'Grew a team of 10+ ML scientists across India, Europe and the US, with team research published at CVPR 2026 and ICML 2026.',
  },
  {
    dates: 'Aug 2023 — Apr 2025',
    organisation: 'Nyun AI',
    role: 'Co-founder & CEO',
    location: 'Bengaluru, India',
    summary:
      'Founded and led a venture-backed company that made foundation models deployable on constrained hardware, with ownership across strategy, research, hiring, fundraising, product and customers.',
    detail:
      'Built Zero and the open-source Nyuntam library, raised pre-seed funding, secured global accelerator cohorts, and led the company through its 2025 acqui-hire by Amazon.',
  },
  {
    dates: 'Jun 2021 — Apr 2025',
    organisation: 'AIQ · Presight / ADNOC joint venture',
    role: 'Data Science Manager',
    location: 'Abu Dhabi, UAE',
    summary:
      'Owned data-science delivery across five enterprise programmes spanning reservoir portfolio management, corrosion detection and emissions forecasting.',
    detail:
      'Set technical roadmaps and carried work from feasibility study through proof of concept, pilot and scale-up. The portfolio produced a filed US patent in reservoir optimisation and well placement.',
  },
  {
    dates: 'Jan 2021 — May 2025',
    organisation: 'Transmute AI Lab · IIT (ISM) Dhanbad',
    role: 'Founding Director',
    location: 'Dhanbad, India',
    summary:
      'Founded the research lab within the TEXMiN Foundation and grew it to around 20 researchers, setting its research agenda and five-year vision.',
    detail:
      'Served as principal investigator on research and consultancy grants; the lab produced work at CVPR, ICLR, ICASSP and TMLR and became the research foundation for Nyun AI.',
  },
  {
    dates: 'Jan 2019 — Jan 2021',
    organisation: 'QUVA Lab · University of Amsterdam',
    role: 'Postdoctoral Researcher',
    location: 'Amsterdam, Netherlands',
    summary:
      'Worked on model efficiency and visual object tracking in the joint Qualcomm–University of Amsterdam research lab, with applied projects for TomTom, UMC Utrecht and VUmc.',
    detail: 'Research output appeared at CVPR, ICCV and IEEE TPAMI.',
  },
  {
    dates: 'Nov 2017 — Jan 2019',
    organisation: 'Shell Technology Centre',
    role: 'Research Scientist',
    location: 'Bengaluru, India',
    summary:
      'Applied deep learning to seismic processing and unsupervised event detection in passive microseismic data.',
    detail:
      'Founded NXplorers, a machine-learning reading group, and received a Shell Special Recognition Award.',
  },
];

const selectedResearch = [
{"year": "2025", "venue": "TMLR 2025", "title": "Rethinking the Value of Training-Free Structured Pruning of LLMs", "authors": ["Nahush Lele", "Arnav Chavan", "Aryamaan Thakur", "Deepak Gupta"], "href": "https://openreview.net/pdf?id=7KkytYYhMv"},
{"year": "2024", "venue": "ACL 2024", "title": "Surgical Feature-Space Decomposition of LLMs: Why, When and How?", "authors": ["Arnav Chavan", "Nahush Lele", "Deepak Gupta"], "href": "https://aclanthology.org/2024.acl-long.130/"},
{"year": "2024", "venue": "WACV 2024", "title": "Partial Binarization of Neural Networks for Budget-Aware Efficient Learning", "authors": ["Udbhav Bamba", "Neeraj Anand", "Saksham Aggarwal", "Dilip K. Prasad", "Deepak K. Gupta"], "href": "https://openaccess.thecvf.com/content/WACV2024/html/Bamba_Partial_Binarization_of_Neural_Networks_for_Budget-Aware_Efficient_Learning_WACV_2024_paper.html"},
{"year": "2024", "venue": "ICLR 2024 · Tiny Papers", "title": "Rethinking Compression: Reduced Order Modelling of Latent Features in Large Language Models", "authors": ["Arnav Chavan", "Nahush Lele", "Deepak Gupta"], "href": "https://openreview.net/pdf?id=BfVccaZiEv"},
{"year": "2024", "venue": "arXiv preprint · 2024", "title": "Parameter Efficient Fine-Tuning for Deep Learning-Based Full-Waveform Inversion", "authors": ["Koustav Ghosal", "Abhranta Panigrahi", "Arnav Chavan", "Arun Singh", "Deepak Gupta"], "href": "https://arxiv.org/abs/2412.19510"},
{"year": "2022", "venue": "CVPR 2022", "title": "Dynamic Kernel Selection for Improved Generalization and Memory Efficiency in Meta-Learning", "authors": ["Arnav Chavan", "Rishabh Tiwari", "Udbhav Bamba", "Deepak K. Gupta"], "href": "https://openaccess.thecvf.com/content/CVPR2022/html/Chavan_Dynamic_Kernel_Selection_for_Improved_Generalization_and_Memory_Efficiency_in_CVPR_2022_paper.html"},
  {
    venue: 'ICLR 2021',
    year: '2021',
    authors: ["Rishabh Tiwari", "Udbhav Bamba", "Arnav Chavan", "Deepak K. Gupta"],
    title: 'ChipNet: Budget-Aware Pruning with Heaviside Continuous Approximations',
    href: 'https://openreview.net/forum?id=xCxXwTzx4L1',
  },
  {
    venue: 'CVPR 2021',
    year: '2021',
    authors: ["Deepak K. Gupta", "Devanshu Arya", "Efstratios Gavves"],
    title: 'Rotation Equivariant Siamese Networks for Tracking',
    href: 'https://arxiv.org/abs/2012.13078',
  },
  {
    venue: 'IJNME 2019',
    year: '2019',
    authors: ["Deepak K. Gupta", "Fred van Keulen", "Matthijs Langelaar"],
    title: 'Design and Analysis Adaptivity in Multi-resolution Topology Optimization',
    href: 'https://arxiv.org/abs/1811.09821',
  },
  {
    venue: 'arXiv 2019',
    year: '2019',
    authors: ["Efstratios Gavves", "Ran Tao", "Deepak K. Gupta", "Arnold W. M. Smeulders"],
    title: 'Model Decay in Long-Term Tracking',
    href: 'https://arxiv.org/abs/1908.01603',
  },
];

export default function Home() {
  return (
    <>
      <header className="top-navigation">
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research & publications</a>
          <a href="#teaching">Teaching</a>
        </nav>
      </header>
    <div className="academic-site">
      <a className="skip-link" href="#about">Skip to content</a>
      <aside className="profile-sidebar">
        <Image unoptimized className="portrait" src="./deepak-gupta.png" alt="Deepak K. Gupta" width="170" height="170" />
        <a className="profile-name" href="#about">Deepak K. Gupta</a>
        <p className="appointment">Applied Science Manager</p>
        <p className="institution">Amazon · Dubai, UAE</p>
        <p className="appointment second-role">Former Adjunct Faculty</p>
        <p className="institution">IIT (ISM) Dhanbad</p>
        <div className="profile-links">
          <a href="mailto:guptadeepak2806@gmail.com"><Mail size={14} /> Email</a>
          <a href="https://scholar.google.com/citations?user=Nsxpe_kAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={13} /></a>
          <a href="https://www.linkedin.com/in/deepak-gupta-05b48828/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
          <a href="https://github.com/dkgupta90" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
          <a href="./Deepak-K-Gupta-CV.pdf" download><Download size={14} /> Curriculum vitae</a>
        </div>

      </aside>
      <main>
        <section id="about" className="about-section">
          <p className="page-kicker">Applied science · Efficient AI</p>
          <h1>Deepak K. Gupta</h1>
          <p className="intro">I lead a team of ML scientists working on efficient AI, connecting machine-learning research with systems that can be deployed in practice.</p>
          <p>I am an Applied Science Manager at Amazon, where I lead a team of 10+ ML scientists across India, Europe and the US working on model compression. I previously served as adjunct faculty at IIT (ISM) Dhanbad.</p>
          <p>Previously, I founded Transmute AI Lab at IIT (ISM) Dhanbad and co-founded Nyun AI, which was acqui-hired by Amazon in 2025. I have also worked at AIQ, the University of Amsterdam’s QUVA Lab, and Shell Technology Centre. My work connects academic research with applications in industry, including healthcare, energy and subsurface modelling.</p>
          <p>I earned my PhD in Computational Engineering at TU Delft. Before that, I completed an integrated B.Sc. and M.Sc. in Geophysics at IIT (ISM) Dhanbad in 2013, receiving the Director’s Gold Medal.</p>
        </section>
        <section id="experience">
          <h2>Industry & research experience</h2>
          {experience.map(item => <article className="experience-row" key={item.organisation}><p className="dates">{item.dates}</p><div><h3>{item.organisation}</h3><p className="role">{item.role}</p><p>{item.summary}</p>{['Amazon', 'Nyun AI'].includes(item.organisation) && <p className="experience-outcome">{item.detail}</p>}</div></article>)}
        </section>
        <section id="research">
          <h2>Research & publications</h2>
          <p>My research focuses on making machine-learning models more efficient, particularly through model compression and efficient inference for foundation models. I also work on computer vision and visual tracking, with earlier research in computational optimisation. My applied work spans healthcare, energy and subsurface modelling.</p>
          <h3>Selected publications</h3>
          <p className="publication-note">Selected work through 2025 is listed below. See <a href="https://scholar.google.com/citations?user=Nsxpe_kAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a> for the complete publication record.</p>
          {[...new Set(selectedResearch.map(paper => paper.year))].sort((a, b) => Number(b) - Number(a)).map(year => (
            <div className="publication-year" key={year}>
              <h4>{year}</h4>
              <ul className="publications">
                {selectedResearch.filter(paper => paper.year === year).map(paper => (
                  <li key={paper.title}>
                    <a className="paper-title" href={paper.href} target="_blank" rel="noreferrer">{paper.title}</a>
                    <p className="paper-authors">{paper.authors.map((author, index) => <span key={author}>{index > 0 ? ', ' : ''}{['Deepak K. Gupta', 'Deepak Gupta'].includes(author) ? <strong>{author}</strong> : author}</span>)}</p>
                    <p className="paper-venue"><em>{paper.venue}</em> · <a href={paper.href} target="_blank" rel="noreferrer" aria-label={`Read ${paper.title}`}>Paper</a></p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <h3>Academic service</h3>
          <ul className="plain-list"><li>Lead organiser, AdaptFM workshop, ICML 2026: resource-adaptive foundation model inference.</li><li>Lead organiser, Resource-Efficient Deep Learning for Computer Vision workshop, ICCV 2023.</li><li>Reviewer for IJCV, NeurIPS, ICML, ICLR and CVPR.</li></ul>
          <h3>Software & applied research</h3>
          <p><strong>Nyuntam</strong> is an open-source PyTorch library for pruning, quantisation, distillation and low-rank decomposition. At Nyun AI, my team also developed <strong>Zero</strong>, a commercial model-optimisation platform. My patent portfolio includes 2 granted, 1 filed and 3 provisional patents.</p>
        </section>
        <section id="teaching">
          <h2>Teaching</h2>
          <p>Alongside my industry work, I have taught and supervised across several institutions, including 3 PhD, 13 M.Sc. and 20 B.Sc. researchers. My teaching and mentorship connect machine-learning foundations with practical research problems.</p>
          <div className="course"><div className="course-code">NCSC513</div><div><h4>Artificial Intelligence</h4><p>IIT (ISM) Dhanbad · Winter Semester 2020–21</p><p>Teaching assistants: Rishabh Tiwari, Udbhav Bamba</p><a href="https://people.iitism.ac.in/~download/Course%20Catalogue%20NEP/CSE/NCSC513.pdf" target="_blank" rel="noreferrer">Course syllabus ↗</a></div></div>
          <div className="course"><div className="course-code">INF-8605</div><div><h4>Interpretability in Deep Learning</h4><p>UiT The Arctic University of Norway</p><p>Teaching assistant: Rishabh Tiwari</p></div></div>
          <div className="course"><div className="course-code">2018–19</div><div><h4>Project AI</h4><p>University of Amsterdam · M.Sc.</p><p>Course coordinator and assessor</p></div></div>
          <div className="course"><div className="course-code">2018–19</div><div><h4>Computer Vision 2</h4><p>University of Amsterdam · M.Sc.</p><p>Role: Teaching assistant</p></div></div>
          <div className="course"><div className="course-code">2015–17</div><div><h4>Engineering Optimization</h4><p>Delft University of Technology · M.Sc.</p><p>Role: Teaching assistant · 2015–16 and 2016–17</p></div></div>
          <div className="course"><div className="course-code">2015–16</div><div><h4>Structural Optimization</h4><p>Delft University of Technology · Entry-level PhD topic course</p><p>Role: Teaching assistant</p></div></div>
          <div className="course"><div className="course-code">2013–15</div><div><h4>Fundamentals of Mechanics</h4><p>Delft University of Technology · B.Sc.</p><p>Role: Teaching assistant · 2013–14 and 2014–15</p></div></div>
        </section>
        <footer>© {new Date().getFullYear()} Deepak K. Gupta <a href="#about">Back to top ↑</a></footer>
      </main>
    </div>
    </>
  );
}
