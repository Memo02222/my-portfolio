/**
 * translations.js — Full translation dictionary for EN and AR
 * Keys match data-i18n attributes in the HTML.
 */
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_tools: "Tools",
    nav_skills: "Skills",
    nav_resume: "Resume",
    nav_projects: "Projects",
    nav_services: "Services",
    nav_certificates: "Certificates",
    nav_contact: "Contact",

    // Certificates Section
    section_certificates: "Certificate Gallery",
    certificates_desc: "Professional certifications and achievements demonstrating expertise in cybersecurity, networking, and IT infrastructure.",

    // Hero
    hero_greeting: "I'm a",
    hero_download_cv: "Download CV",
    hero_learn_more: "Learn More",
    hero_contact_me: "Contact Me",

    // About Section
    section_about: "About",
    about_desc: "Entry-level SOC Analyst (L1) and IT Support Specialist with 420+ hours of hands-on training in security monitoring, log analysis, alert triage, and incident response across 15+ practical labs, alongside a solid foundation in network administration and enterprise infrastructure. Trained on SIEM platforms (Splunk, IBM QRadar, FortiSIEM, Security Onion) and SOAR playbooks (FortiSOAR) to detect, investigate, and escalate security events, and skilled in threat and vulnerability assessment, network traffic analysis (Wireshark), and firewall/IDS-IPS monitoring (FortiGate). Combines this security foundation with practical experience supporting Windows, Active Directory, and Cisco network environments to deliver reliable first-line detection, troubleshooting, and support.",
    about_title: "SOC Analyst (L1) | Network & IT Support Specialist",
    about_subtitle: "Proactive security and infrastructure professional with extensive lab experience across SIEM monitoring, threat detection, and Cisco network environments.",
    about_phone: "Phone:",
    about_city: "City:",
    about_city_val: "Minya, Egypt",
    about_email: "Email:",
    about_degree: "Degree:",
    about_degree_val: "Bachelor of Technology (IT – Network Specialization)",
    about_university: "University:",
    about_university_val: "Fayoum International Technology University (FITU)",
    about_gpa: "GPA:",
    about_certifications: "Certifications:",
    about_certifications_val: "Cisco Certified Support Technician (CCST); CCNA",
    about_freelance: "Freelance:",
    about_freelance_val: "Available",
    about_extra: "Equipped with strong analytical and incident triage capabilities. Experienced in analyzing PCAP network traffic with Wireshark, configuring FortiGate firewalls & IDS/IPS, implementing Cisco routing/switching, managing Windows Server & Active Directory, and building automated security scripts in Python.",

    // Stats
    stats_hours: "Training Hours",
    stats_hours_sub: "SOC & Cybersecurity",
    stats_labs: "Practical Labs",
    stats_labs_sub: "SIEM & Pentesting",
    stats_certs: "Certifications & Courses",
    stats_certs_sub: "CCST, CCNA, Palo Alto, ITI",
    stats_training: "Professional Programs",
    stats_training_sub: "NTI, DEY, CAPMAS, Alx",

    // Tools
    section_tools: "Tools & Technologies",
    tools_desc: "The cybersecurity, SIEM, networking, and systems administration tools I use to monitor, protect, and troubleshoot enterprise environments.",

    // Skills
    section_skills: "Skills",
    skills_desc: "Technical competencies across SOC operations, network infrastructure, and programming. Built through 420+ hours of intensive hands-on lab training.",
    skills_cat_soc: "SOC & Security Operations",
    skills_cat_network: "Network & IT Infrastructure",
    skills_cat_programming: "Programming & Scripting",

    skill_siem: "SIEM Monitoring & Log Analysis (Splunk, QRadar, FortiSIEM, Security Onion)",
    skill_ir: "Incident Response & Alert Triage",
    skill_traffic: "Network Traffic Analysis (Wireshark)",
    skill_firewall: "Firewall / IDS-IPS Monitoring (FortiGate)",
    skill_vuln: "Vulnerability Assessment & Pen-Testing Fundamentals",

    skill_routing: "Routing & Switching (Cisco)",
    skill_infrastructure: "LAN/WAN Infrastructure Design",
    skill_winserver: "Windows Server & Active Directory",
    skill_linux: "Linux Administration",

    skill_python: "Python",
    skill_c_java: "Java / C / C++",

    // Resume
    section_resume: "Resume",
    resume_desc: "Comprehensive background in Security Operations, Network Engineering, and IT Support. Specialized in SIEM monitoring, threat analysis, and Cisco infrastructure.",
    resume_download: "Download CV",
    resume_summary: "Professional Summary",
    resume_summary_text: "Entry-level SOC Analyst (L1) and IT Support Specialist with 420+ hours of hands-on training in security monitoring, log analysis, alert triage, and incident response across 15+ practical labs, alongside a solid foundation in network administration and enterprise infrastructure. Trained on SIEM platforms (Splunk, IBM QRadar, FortiSIEM, Security Onion) and SOAR playbooks (FortiSOAR) to detect, investigate, and escalate security events, and skilled in threat and vulnerability assessment, network traffic analysis (Wireshark), and firewall/IDS-IPS monitoring (FortiGate). Combines this security foundation with practical experience supporting Windows, Active Directory, and Cisco network environments to deliver reliable first-line detection, troubleshooting, and support.",

    resume_education: "Education",
    resume_edu_title: "Bachelor of Technology – Network Specialization",
    resume_edu_dates: "2022 – 2026",
    resume_edu_school: "Fayoum International Technology University (FITU)",
    resume_edu_detail: "GPA 3.8 / 4.0. Focus: Networking, Cybersecurity fundamentals, Routing & Switching, Network Security.",

    resume_experience: "Experience & Professional Training",
    resume_exp1_title: "Cybersecurity & SOC Analyst (L1) Trainee",
    resume_exp1_dates: "July 2026 – December 2026",
    resume_exp1_company: "National Telecommunication Institute (NTI), Cairo",
    resume_exp1_1: "Completed 420+ hours of hands-on cybersecurity/SOC training across 15+ practical labs (SIEM monitoring, incident response, penetration testing).",
    resume_exp1_2: "Monitored alerts and analyzed logs in Splunk, IBM QRadar, FortiSIEM, and Security Onion to detect anomalies and identify IOCs.",
    resume_exp1_3: "Investigated/escalated incidents using FortiSOAR playbooks and FortiAnalyzer following structured SOC workflows.",
    resume_exp1_4: "Performed vulnerability scanning, network/port scanning, and penetration testing (recon, web app, wireless).",
    resume_exp1_5: "Analyzed traffic with Wireshark; monitored FortiGate firewalls, IDS/IPS, IPsec/SSL VPNs, and web filtering.",
    resume_exp1_6: "Applied Cisco CyberOps and Red Hat Linux administration to secure endpoints; completed a business English/leadership/project-management track with a capstone project.",

    resume_exp2_title: "IT Technical Support Trainee",
    resume_exp2_dates: "December 2025 – February 2026",
    resume_exp2_company: "Digital Egypt Youth (DEY) – Creativa Innovation Hubs, Minya",
    resume_exp2_1: "Provided Tier 1 technical support, triaging hardware/software/network tickets to maintain system uptime.",
    resume_exp2_2: "Administered Windows & Active Directory (user accounts, permissions, access controls).",
    resume_exp2_3: "Logged, tracked, and escalated incidents through a structured documentation process.",
    resume_exp2_4: "Monitored endpoint/network health to proactively flag and resolve issues.",

    resume_exp3_title: "CCNA Trainee",
    resume_exp3_dates: "October 2025 – November 2025",
    resume_exp3_company: "CAPMAS HRDC, Cairo",
    resume_exp3_1: "Completed enterprise network infrastructure training in advanced routing and network security.",
    resume_exp3_2: "Configured VLANs, NAT, and ACLs for traffic segmentation and access control.",
    resume_exp3_3: "Deployed OSPF and EIGRP for scalable multi-branch connectivity.",
    resume_exp3_4: "Simulated and stress-tested complex architectures in Cisco Packet Tracer.",

    resume_exp4_title: "Network Infrastructure Trainee",
    resume_exp4_dates: "July 2025 – August 2025",
    resume_exp4_company: "National Telecommunication Institute (NTI), Cairo",
    resume_exp4_1: "Studied core routing, switching, and IP subnetting design.",
    resume_exp4_2: "Configured Cisco routers/switches for secure, monitorable connectivity.",
    resume_exp4_3: "Diagnosed connectivity issues using structured CCNA testing strategies.",
    resume_exp4_4: "Evaluated LAN/WAN frameworks for security and performance.",

    // Certifications Section
    resume_certs_title: "Certifications & Professional Licenses",
    cert_ccst_title: "Cisco Certified Support Technician (CCST) Networking",
    cert_ccst_sub: "Professional License • Issued May 2026 • Valid until May 2031",
    cert_ccna_title: "CCNA: Cisco Networking Academy Tracks",
    cert_ccna_sub: "Introduction to Networks • Switching, Routing, & Wireless • Enterprise Networking, Security & Automation",
    cert_paloalto_title: "Cybersecurity Foundation",
    cert_paloalto_sub: "Palo Alto Networks Cybersecurity Academy • May 2026",
    cert_ai_sec_title: "AI-Driven Security (Sentinel Agent)",
    cert_ai_sec_sub: "GDG on Campus Future Academy • May 2026",
    cert_iti_ai_title: "Artificial Intelligence Track (90 Hours)",
    cert_iti_ai_sub: "Information Technology Institute (ITI) • Aug 2025",
    cert_alx_title: "AI Augmented Professional Development (8 Weeks)",
    cert_alx_sub: "ALX AI Career Essentials • Jul 2024",

    // Projects
    section_projects: "Projects",
    projects_desc: "Practical engineering and security implementations in Python network automation, SIEM integration, and embedded systems.",
    filter_all: "All",
    filter_network: "Networking & Security",
    filter_embedded: "Embedded Systems",

    proj1_title: "Graduation Project — Network Automation & Secure Program with Python",
    proj1_cat: "Networking & Security",
    proj1_meta: "FITU | 2026 | Python, Cisco, Splunk SIEM",
    proj1_desc: "A comprehensive Python-based automation solution (2,000+ lines of code) to automate Cisco network deployment and configuration. Automated Layer 2/3 topologies using Netmiko across multi-branch EVE-NG environments, automated branch firewalls and ACLs for traffic filtering, and integrated a Splunk-based SIEM solution for continuous threat monitoring and anomaly detection.",

    proj2_title: "Electronic Calculator (Embedded Systems)",
    proj2_cat: "Embedded / Product",
    proj2_meta: "PIC16F877A | Embedded C | Hardware Architecture",
    proj2_desc: "Digital calculator architecture designed and programmed on PIC16F877A microcontroller hardware. Integrated a 4x4 matrix keypad and 16x2 LCD module for interactive I/O, implementing arithmetic core algorithms in Embedded C for reliable calculation and debounced user input.",

    proj3_title: "Enterprise Multi-Branch Network Design & OSPF/VLANs",
    proj3_cat: "Networking & Security",
    proj3_meta: "Cisco Architecture | OSPF, VLANs, HSRP, NAT | Packet Tracer & GNS3",
    proj3_desc: "Hierarchical Core-Distribution-Access enterprise network architecture designed for high availability and fault tolerance. Implemented multi-area OSPF routing, Inter-VLAN routing with 802.1Q trunking, HSRP first-hop gateway redundancy, and NAT/PAT. Enforced comprehensive network hardening using Port Security, DHCP Snooping, Dynamic ARP Inspection, and ACL security policies.",

    proj4_title: "Next-Gen Firewall & SOC Threat Mitigation Lab",
    proj4_cat: "Networking & Security",
    proj4_meta: "FortiGate NGFW | Splunk SIEM | IPS/IDS & SSL-VPN | NTI SOC Lab",
    proj4_desc: "Comprehensive enterprise perimeter security deployment featuring FortiGate Next-Generation Firewall integrated with Splunk SIEM. Configured IPS/IDS threat inspection signatures, SSL-VPN secure remote tunnels, and web/application filtering. Streamed real-time syslog alerts into Splunk and IBM QRadar for incident triage, analyzing brute-force, port scans, and malware activity.",

    // Services
    section_services: "Services",
    services_desc: "End-to-end security operations, threat triage, network infrastructure, and enterprise IT support aligned with industry standards.",
    svc1_title: "SOC Monitoring & Log Analysis",
    svc1_desc: "Alert triage, log analysis, and anomaly detection using enterprise SIEM platforms (Splunk, IBM QRadar, FortiSIEM, Security Onion) to identify Indicators of Compromise (IOCs).",
    svc2_title: "Incident Response & Reporting",
    svc2_desc: "Investigating, containing, and escalating security incidents using structured IR workflows, SOAR playbooks (FortiSOAR), and comprehensive forensic documentation.",
    svc3_title: "Network Traffic & Firewall Monitoring",
    svc3_desc: "Deep packet inspection and traffic analysis with Wireshark, combined with FortiGate firewall, IDS/IPS, VPN, and security policy administration.",
    svc4_title: "Vulnerability Assessment",
    svc4_desc: "Systematic vulnerability scanning, network/port discovery, and penetration testing fundamentals across network, web application, and wireless attack surfaces.",
    svc5_title: "Network Design & Implementation",
    svc5_desc: "Enterprise network design, VLAN segmentation, NAT, ACLs, and dynamic routing (OSPF, EIGRP) utilizing Cisco routers and switches for high-performance LAN/WANs.",
    svc6_title: "Windows Server & Active Directory",
    svc6_desc: "Enterprise user administration, Group Policy Objects (GPOs), permissions management, domain services, and Tier 1/2 technical support for seamless operations.",

    // Contact
    section_contact: "Contact",
    contact_desc: "Feel free to reach out for security monitoring, network engineering, IT support inquiries, or freelance opportunities.",
    contact_address: "Address",
    contact_address_val: "Minya, Egypt",
    contact_call: "Phone",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_send: "Send Message",
    contact_sent: "Your message has been sent. Thank you!",

    // Footer
    footer_copyright: "Copyright",
    footer_rights: "All Rights Reserved",

    // Sub-pages
    page_project_details: "Project Details",
    page_service_details: "Service Details",
    page_starter: "Starter Page",
    breadcrumb_home: "Home",

    // Portfolio Details
    pd_info: "Project Information",
    pd_category: "Category",
    pd_category_val: "Networking & Security",
    pd_client: "Institution",
    pd_client_val: "Fayoum International Technology University (FITU)",
    pd_date: "Project Date",
    pd_date_val: "2026",
    pd_url: "Project Focus",
    pd_url_val: "Network Automation & SIEM Security",
    pd_title: "Network Automation & Secure Program with Python",
    pd_desc: "A production-grade Python automation suite (2,000+ lines of code) designed for enterprise Cisco environments. Utilizes Netmiko to automate multi-branch Layer 2 and Layer 3 topology configurations, automates firewall ACL policies for strict traffic segregation, and interfaces directly with a Splunk SIEM pipeline for live threat detection and automated telemetry.",

    // Service Details
    sd_title: "SOC Operations & Network Engineering",
    sd_sidebar_title: "Specialized Security Services",
    sd_sidebar_desc: "Professional L1 SOC analysis, SIEM event investigation, network traffic inspection, and Cisco infrastructure administration.",
    sd_main_desc: "As a SOC Analyst (L1) and Network & IT Support Specialist with 420+ hours of intensive hands-on lab training, I bridge the gap between cyber security operations and network infrastructure. I provide continuous monitoring, incident triage, and proactive infrastructure defense.",
    sd_check1: "SIEM log analysis & alert investigation (Splunk, QRadar, FortiSIEM, Security Onion)",
    sd_check2: "Network traffic forensics & packet inspection using Wireshark",
    sd_check3: "FortiGate firewall, IDS/IPS, VPN, and security policy management",
    sd_check4: "Cisco routing, switching, VLAN segmentation, and Windows Server administration",
    sd_closing1: "Trained across rigorous programs at the National Telecommunication Institute (NTI), DEY Creativa Hubs, and CAPMAS HRDC, delivering dependable first-line defense and robust network operations.",
    sd_closing2: "Committed to cybersecurity best practices, fast incident containment, and SLA-driven support. Available for full-time roles, freelance projects, and consultations.",

    // Starter Page
    starter_title: "About Mohamed Mahmoud Ibrahim",
    starter_desc: "SOC Analyst (L1) and Network & IT Support Specialist with hands-on expertise in SIEM monitoring, incident triage, packet analysis, Cisco networking, and Windows Server administration.",
    starter_subtitle: "SOC Analyst (L1) | Network & IT Support Specialist"
  },

  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_tools: "الأدوات",
    nav_skills: "المهارات",
    nav_resume: "السيرة الذاتية",
    nav_projects: "المشاريع",
    nav_services: "الخدمات",
    nav_certificates: "الشهادات",
    nav_contact: "تواصل معي",

    // Certificates Section
    section_certificates: "معرض الشهادات",
    certificates_desc: "الشهادات المهنية والإنجازات التي تثبت الخبرة في الأمن السيبراني والشبكات والبنية التحتية لتكنولوجيا المعلومات.",

    // Hero
    hero_greeting: "أنا",
    hero_download_cv: "تحميل السيرة الذاتية",
    hero_learn_more: "اعرف المزيد",
    hero_contact_me: "تواصل معي",

    // About Section
    section_about: "نبذة عني",
    about_desc: "محلل مركز العمليات الأمنية (SOC Analyst L1) وأخصائي دعم فني لتكنولوجيا المعلومات، يمتلك أكثر من 420 ساعة من التدريب العملي المكثف في المراقبة الأمنية وتحليل السجلات وتصنيف التنبيهات والاستجابة للحوادث عبر أكثر من 15 مختبراً عملياً، إلى جانب أساس قوي في إدارة الشبكات والبنية التحتية المؤسسية. تدرب على منصات إدارة الأحداث والمعلومات الأمنية SIEM (Splunk و IBM QRadar و FortiSIEM و Security Onion) وأدلة تشغيل SOAR (FortiSOAR) لاكتشاف الأحداث الأمنية والتحقيق فيها وتصعيدها، وماهر في تقييم التهديدات والثغرات الأمنية وتحليل حركة مرور الشبكة (Wireshark) ومراقبة الجدران النارية وأنظمة كشف ومنع التسلل IDS/IPS (FortiGate). يدمج هذا الأساس الأمني مع خبرة عملية في دعم بيئات Windows و Active Directory وشبكات Cisco لتقديم كشف واستكشاف أخطاء ودعم موثوق به من المستوى الأول.",
    about_title: "محلل مركز العمليات الأمنية (SOC L1) | أخصائي شبكات ودعم فني",
    about_subtitle: "محترف أمن سيبراني وبنية تحتية مع خبرة مختبرية واسعة في مراقبة أنظمة SIEM وكشف التهديدات وشبكات Cisco المؤسسية.",
    about_phone: "الهاتف:",
    about_city: "المدينة:",
    about_city_val: "المنيا، مصر",
    about_email: "البريد الإلكتروني:",
    about_degree: "الدرجة العلمية:",
    about_degree_val: "بكالوريوس تكنولوجيا (تكنولوجيا المعلومات – تخصص شبكات)",
    about_university: "الجامعة:",
    about_university_val: "جامعة الفيوم التكنولوجية الدولية (FITU)",
    about_gpa: "المعدل التراكمي:",
    about_certifications: "الشهادات:",
    about_certifications_val: "فني دعم معتمد من سيسكو في الشبكات (CCST)؛ CCNA",
    about_freelance: "العمل الحر:",
    about_freelance_val: "متاح",
    about_extra: "متمكن من التحليل الأمني وتصنيف الحوادث. خبير في تحليل حزم البيانات عبر Wireshark، وإعداد وتكوين جدران الحماية FortiGate وأنظمة IDS/IPS، وتطبيق توجيه وتبديل شبكات Cisco، وإدارة خوادم Windows Server و Active Directory، وتطوير نصوص أتمتة أمنية بلغة Python.",

    // Stats
    stats_hours: "ساعات التدريب العملي",
    stats_hours_sub: "SOC والأمن السيبراني",
    stats_labs: "مختبرات عملية",
    stats_labs_sub: "أنظمة SIEM واختبار الاختراق",
    stats_certs: "الشهادات والدورات",
    stats_certs_sub: "CCST, CCNA, Palo Alto, ITI",
    stats_training: "البرامج التدريبية",
    stats_training_sub: "المعهد القومي، DEY، CAPMAS، Alx",

    // Tools
    section_tools: "الأدوات والتقنيات",
    tools_desc: "أدوات الأمن السيبراني ومنصات SIEM وإدارة الشبكات والخوادم التي أستخدمها لحماية ومراقبة وتشخيص البيئات المؤسسية.",

    // Skills
    section_skills: "المهارات",
    skills_desc: "كفاءات تقنية تغطي عمليات مركز العمليات الأمنية (SOC)، والبنية التحتية للشبكات، والبرمجة، مبنية عبر أكثر من 420 ساعة تدريب مختبري مكثف.",
    skills_cat_soc: "عمليات الأمن السيبراني ومركز العمليات الأمنية (SOC)",
    skills_cat_network: "الشبكات والبنية التحتية لتكنولوجيا المعلومات",
    skills_cat_programming: "البرمجة والأتمتة",

    skill_siem: "مراقبة وتحليل سجلات SIEM (Splunk, QRadar, FortiSIEM, Security Onion)",
    skill_ir: "الاستجابة للحوادث وتصنيف التنبيهات الأمنية",
    skill_traffic: "تحليل حركة مرور الشبكة وحزم البيانات (Wireshark)",
    skill_firewall: "مراقبة الجدران النارية وأنظمة IDS/IPS (FortiGate)",
    skill_vuln: "تقييم الثغرات الأمنية وأساسيات اختبار الاختراق",

    skill_routing: "التوجيه والتبديل (Cisco)",
    skill_infrastructure: "تصميم البنية التحتية لشبكات LAN/WAN",
    skill_winserver: "خوادم Windows Server ودليل Active Directory",
    skill_linux: "إدارة أنظمة لينكس (Linux Administration)",

    skill_python: "بايثون (Python)",
    skill_c_java: "جافا / C / C++",

    // Resume
    section_resume: "السيرة الذاتية",
    resume_desc: "سجل مهني وأكاديمي شامل في عمليات الأمن السيبراني وهندسة الشبكات والدعم الفني، مع تخصص في مراقبة SIEM وتحليل التهديدات وبنية Cisco التحتية.",
    resume_download: "تحميل السيرة الذاتية",
    resume_summary: "الملخص المهني",
    resume_summary_text: "محلل مركز العمليات الأمنية (SOC Analyst L1) وأخصائي دعم فني لتكنولوجيا المعلومات، يمتلك أكثر من 420 ساعة من التدريب العملي المكثف في المراقبة الأمنية وتحليل السجلات وتصنيف التنبيهات والاستجابة للحوادث عبر أكثر من 15 مختبراً عملياً، إلى جانب أساس قوي في إدارة الشبكات والبنية التحتية المؤسسية. تدرب على منصات إدارة الأحداث والمعلومات الأمنية SIEM (Splunk و IBM QRadar و FortiSIEM و Security Onion) وأدلة تشغيل SOAR (FortiSOAR) لاكتشاف الأحداث الأمنية والتحقيق فيها وتصعيدها، وماهر في تقييم التهديدات والثغرات الأمنية وتحليل حركة مرور الشبكة (Wireshark) ومراقبة الجدران النارية وأنظمة كشف ومنع التسلل IDS/IPS (FortiGate). يدمج هذا الأساس الأمني مع خبرة عملية في دعم بيئات Windows و Active Directory وشبكات Cisco لتقديم كشف واستكشاف أخطاء ودعم موثوق به من المستوى الأول.",

    resume_education: "التعليم",
    resume_edu_title: "بكالوريوس تكنولوجيا – تخصص شبكات",
    resume_edu_dates: "2022 – 2026",
    resume_edu_school: "جامعة الفيوم التكنولوجية الدولية (FITU)",
    resume_edu_detail: "المعدل التراكمي 3.8 / 4.0. التركيز: الشبكات، أساسيات الأمن السيبراني، التوجيه والتبديل، أمن الشبكات.",

    resume_experience: "الخبرة والتدريب المهني",
    resume_exp1_title: "متدرب أمن سيبراني ومحلل SOC (L1)",
    resume_exp1_dates: "يوليو 2026 – ديسمبر 2026",
    resume_exp1_company: "المعهد القومي للاتصالات (NTI) – القاهرة",
    resume_exp1_1: "إكمال أكثر من 420 ساعة تدريب عملي مكثف في الأمن السيبراني وSOC عبر أكثر من 15 مختبراً عملياً (مراقبة SIEM، الاستجابة للحوادث، اختبار الاختراق).",
    resume_exp1_2: "مراقبة التنبيهات وتحليل السجلات على Splunk و IBM QRadar و FortiSIEM و Security Onion لاكتشاف السلوكيات الشاذة ومؤشرات الاختراق (IOCs).",
    resume_exp1_3: "التحقيق في الحوادث الأمنية وتصعيدها باستخدام أدلة تشغيل FortiSOAR و FortiAnalyzer وفق مسارات عمل SOC المنظمة.",
    resume_exp1_4: "إجراء فحص الثغرات الأمنية وفحص الشبكات والمنافذ واختبار الاختراق (الاستطلاع، تطبيقات الويب، الشبكات اللاسلكية).",
    resume_exp1_5: "تحليل حركة المرور عبر Wireshark ومراقبة جدران نارية FortiGate وأنظمة IDS/IPS وشبكات VPN وتصفية الويب.",
    resume_exp1_6: "تطبيق معايير Cisco CyberOps وإدارة Red Hat Linux لتأمين نقاط النهاية، وإكمال مسار مهارات القيادة واللغة الإنجليزية وإدارة المشاريع بمشروع تخرج متكامل.",

    resume_exp2_title: "متدرب دعم فني لتكنولوجيا المعلومات",
    resume_exp2_dates: "ديسمبر 2025 – فبراير 2026",
    resume_exp2_company: "مبادرة مصر الرقمية للشباب (DEY) – مراكز إبداع كرياتيفا – المنيا",
    resume_exp2_1: "تقديم الدعم الفني من المستوى الأول (Tier 1)، وتصنيف وحل تذاكر الأجهزة والبرامج والشبكات لضمان استمرارية الأنظمة.",
    resume_exp2_2: "إدارة أنظمة Windows و Active Directory (حسابات المستخدمين، الصلاحيات، وضوابط الوصول).",
    resume_exp2_3: "تسجيل الحوادث وتتبعها وتصعيدها من خلال نظام توثيق تقني منظم.",
    resume_exp2_4: "مراقبة صحة الشبكة ونقاط النهاية لاستباق المشاكل وحلها فوراً.",

    resume_exp3_title: "متدرب CCNA",
    resume_exp3_dates: "أكتوبر 2025 – نوفمبر 2025",
    resume_exp3_company: "مركز تدريب وتنمية الموارد البشرية بالجهاز المركزي للتعبئة العامة والإحصاء (CAPMAS HRDC) – القاهرة",
    resume_exp3_1: "إكمال تدريب البنية التحتية لشبكات المؤسسات في التوجيه المتقدم وأمن الشبكات.",
    resume_exp3_2: "تكوين شبكات VLANs و NAT وقوائم التحكم بالوصول (ACLs) لتقسيم حركة المرور وتأمينها.",
    resume_exp3_3: "تطبيق بروتوكولات OSPF و EIGRP لتوصيل الفروع المتعددة بكفاءة عالية.",
    resume_exp3_4: "محاكاة واختبار تحمل البنى التحتية المعقدة باستخدام Cisco Packet Tracer.",

    resume_exp4_title: "متدرب البنية التحتية للشبكات",
    resume_exp4_dates: "يوليو 2025 – أغسطس 2025",
    resume_exp4_company: "المعهد القومي للاتصالات (NTI) – القاهرة",
    resume_exp4_1: "دراسة تصميم التوجيه والتبديل وتقسيم عناوين IP (Subnetting).",
    resume_exp4_2: "تكوين أجهزة التوجيه والمبدلات من Cisco لضمان اتصال آمن وقابل للمراقبة.",
    resume_exp4_3: "تشخيص واستكشاف مشاكل الاتصال باستخدام استراتيجيات فحص CCNA القياسية.",
    resume_exp4_4: "تقييم أطر عمل شبكات LAN/WAN من حيث الأمان والكفاءة.",

    // Certifications Section
    resume_certs_title: "الشهادات والرخص المهنية",
    cert_ccst_title: "فني دعم معتمد من سيسكو في الشبكات (CCST Networking)",
    cert_ccst_sub: "رخصة مهنية معتمدة • مايو 2026 • سارية حتى مايو 2031",
    cert_ccna_title: "مسارات أكاديمية سيسكو للشبكات (CCNA)",
    cert_ccna_sub: "مقدمة في الشبكات • التبديل والتوجيه والأساسيات اللاسلكية • شبكات المؤسسات والأمن والأتمتة",
    cert_paloalto_title: "أساسيات الأمن السيبراني (Cybersecurity Foundation)",
    cert_paloalto_sub: "أكاديمية بالو ألتو للأمن السيبراني (Palo Alto Networks) • مايو 2026",
    cert_ai_sec_title: "الأمن المدعوم بالذكاء الاصطناعي (Sentinel Agent)",
    cert_ai_sec_sub: "مجتمع جوجل للطلبة المطورين (GDG on Campus) • مايو 2026",
    cert_iti_ai_title: "مسار الذكاء الاصطناعي (90 ساعة تدريبية)",
    cert_iti_ai_sub: "معهد تكنولوجيا المعلومات (ITI) • أغسطس 2025",
    cert_alx_title: "التطوير المهني المدعوم بالذكاء الاصطناعي (8 أسابيع)",
    cert_alx_sub: "مبادرة ALX AI Career Essentials • يوليو 2024",

    // Projects
    section_projects: "المشاريع",
    projects_desc: "تطبيقات هندسية وأمنية واقعية في أتمتة شبكات بايثون، ودمج منصات SIEM الأمنية، وتطوير الأنظمة المدمجة.",
    filter_all: "الكل",
    filter_network: "الشبكات والأمن السيبراني",
    filter_embedded: "الأنظمة المدمجة",

    proj1_title: "مشروع التخرج — أتمتة الشبكات وبرنامج حماية ببايثون",
    proj1_cat: "الشبكات والأمن السيبراني",
    proj1_meta: "جامعة الفيوم (FITU) | 2026 | Python, Cisco, Splunk SIEM",
    proj1_desc: "حل أتمتة شامل بلغة بايثون (أكثر من 2000 سطر برمجي) لأتمتة نشر وتكوين شبكات Cisco المؤسسية. قام بأتمتة طوبولوجيات الطبقة الثانية والثالثة عبر Netmiko في بيئات EVE-NG متعددة الفروع، وأتمتة جدران الحماية وقوائم ACL لتصفية حركة المرور، مع دمج نظام Splunk SIEM للمراقبة المستمرة وكشف التهديدات.",

    proj2_title: "آلة حاسبة إلكترونية (الأنظمة المدمجة)",
    proj2_cat: "الأنظمة المدمجة",
    proj2_meta: "PIC16F877A | Embedded C | بنية عتادية متكاملة",
    proj2_desc: "بنية آلة حاسبة رقمية مصممة ومبرمجة على متحكم PIC16F877A. دمج لوحة مفاتيح مصفوفية 4x4 مع شاشة LCD 16x2 للتفاعل والإدخال والإخراج، مع برمجة خوارزميات الحساب بلغة Embedded C لتنفيذ دقيق وموثوق.",

    proj3_title: "تصميم شبكة مؤسسية متعددة الفروع وبروتوكولات OSPF و VLANs",
    proj3_cat: "الشبكات والأمن السيبراني",
    proj3_meta: "بنية Cisco المؤسسية | OSPF, VLANs, HSRP, NAT | Packet Tracer & GNS3",
    proj3_desc: "تصميم بنية شبكة مؤسسية هرمية (Core-Distribution-Access) متعددة الفروع لتحقيق أعلى درجات التوافرية ومقاومة الأعطال. تطبيق توجيه OSPF متعدد المناطق، وتوجيه Inter-VLAN عبر 802.1Q، وتكرارية البوابات HSRP، و NAT/PAT، مع تأمين المنافذ عبر Port Security و DHCP Snooping و DAI وقوائم ACL لحماية المحيط.",

    proj4_title: "مختبر جدران الحماية المتقدمة (NGFW) وتخفيف تهديدات SOC",
    proj4_cat: "الشبكات والأمن السيبراني",
    proj4_meta: "جدار حماية FortiGate | نظام Splunk SIEM | أنظمة IPS/IDS و SSL-VPN",
    proj4_desc: "نشر أمني متكامل لحماية محيط الشبكات المؤسسية باستخدام جدار ناري FortiGate NGFW مدمج مع منصة Splunk SIEM. تكوين توقيعات فحص التهديدات IDS/IPS، والوصول الآمن عبر SSL-VPN، وسياسات تصفية الويب والتطبيقات، مع تدفق سجلات Syslog فورياً إلى منصات SIEM للتحقيق في هجمات التخمين والفحص وعزل التهديدات.",

    // Services
    section_services: "الخدمات",
    services_desc: "خدمات شاملة في مراقبة مركز العمليات الأمنية (SOC)، وتصنيف التهديدات، وهندسة البنية التحتية، ودعم تكنولوجيا المعلومات.",
    svc1_title: "مراقبة مركز العمليات الأمنية وتحليل السجلات (SOC)",
    svc1_desc: "تصنيف التنبيهات الأمنية وتحليل السجلات واكتشاف السلوكيات الشاذة عبر منصات SIEM المؤسسية (Splunk و QRadar و FortiSIEM و Security Onion) لتحديد مؤشرات الاختراق (IOCs).",
    svc2_title: "الاستجابة للحوادث وإعداد التقارير",
    svc2_desc: "التحقيق في الحوادث الأمنية واحتواؤها وتصعيدها باتباع مسارات استجابة منظمة، وأدلة تشغيل SOAR (FortiSOAR)، مع توثيق جنائي دقيق.",
    svc3_title: "مراقبة حركة مرور الشبكة والجدران النارية",
    svc3_desc: "الفحص العميق لحزم البيانات وتحليل حركة المرور باستخدام Wireshark، وإدارة جدران الحماية FortiGate وأنظمة كشف ومنع التسلل IDS/IPS وشبكات VPN.",
    svc4_title: "تقييم الثغرات الأمنية",
    svc4_desc: "الفحص المنهجي للثغرات، واكتشاف المنافذ والشبكات، وتطبيق أساسيات اختبار الاختراق على الشبكات وتطبيقات الويب والشبكات اللاسلكية.",
    svc5_title: "تصميم وتنفيذ شبكات المؤسسات",
    svc5_desc: "تصميم الشبكات المؤسسية، وتقسيم VLANs، و NAT، وقوائم ACL، وتطبيق بروتوكولات التوجيه الديناميكي (OSPF و EIGRP) على أجهزة Cisco لشبكات LAN/WAN عالية الأداء.",
    svc6_title: "خوادم Windows Server و Active Directory",
    svc6_desc: "إدارة المستخدمين والمجموعات، وسياسات Group Policy، وإدارة الصلاحيات والخدمات، وتقديم الدعم الفني من المستويين الأول والثاني لضمان استقرار الأنظمة.",

    // Contact
    section_contact: "تواصل معي",
    contact_desc: "يسعدني التواصل لمناقشة فرص العمل في المراقبة الأمنية وهندسة الشبكات والدعم الفني أو المشاريع الاستشارية.",
    contact_address: "العنوان",
    contact_address_val: "المنيا، مصر",
    contact_call: "الهاتف",
    contact_name: "اسمك",
    contact_email: "بريدك الإلكتروني",
    contact_subject: "الموضوع",
    contact_message: "الرسالة",
    contact_send: "إرسال الرسالة",
    contact_sent: "تم إرسال رسالتك بنجاح. شكراً لك!",

    // Footer
    footer_copyright: "حقوق النشر",
    footer_rights: "جميع الحقوق محفوظة",

    // Sub-pages
    page_project_details: "تفاصيل المشروع",
    page_service_details: "تفاصيل الخدمة",
    page_starter: "صفحة البداية",
    breadcrumb_home: "الرئيسية",

    // Portfolio Details
    pd_info: "معلومات المشروع",
    pd_category: "الفئة",
    pd_category_val: "الشبكات والأمن السيبراني",
    pd_client: "الجهة",
    pd_client_val: "جامعة الفيوم التكنولوجية الدولية (FITU)",
    pd_date: "تاريخ المشروع",
    pd_date_val: "2026",
    pd_url: "مجال المشروع",
    pd_url_val: "أتمتة الشبكات وأمن SIEM",
    pd_title: "مشروع التخرج — أتمتة الشبكات وحمايتها ببايثون",
    pd_desc: "حزمة أتمتة متطورة بلغة بايثون (أكثر من 2000 سطر برمجي) مخصصة لبيئات شبكات Cisco المؤسسية. تستخدم Netmiko لأتمتة تكوين طوبولوجيات الطبقتين 2 و 3 عبر فروع متعددة، وأتمتة سياسات جدران الحماية ACL للتحكم الصارم في حركة المرور، والربط المباشر مع منصة Splunk SIEM للمراقبة الحية للتهديدات وإرسال القياسات التلقائية.",

    // Service Details
    sd_title: "عمليات مركز العمليات الأمنية وهندسة الشبكات",
    sd_sidebar_title: "الخدمات الأمنية المتخصصة",
    sd_sidebar_desc: "تحليل احترافي لعمليات SOC L1، والتحقيق في أحداث SIEM، وفحص حزم البيانات، وإدارة بنية شبكات Cisco التحتية.",
    sd_main_desc: "كمحلل لمركز العمليات الأمنية (SOC L1) وأخصائي شبكات ودعم فني مع أكثر من 420 ساعة تدريب مختبري مكثف، أجمع بين الكفاءة في العمليات الأمنية والدراية العميقة بالبنية التحتية للشبكات لتقديم حماية استباقية ومراقبة دائمة للأنظمة المؤسسية.",
    sd_check1: "تحليل سجلات SIEM والتحقيق في التنبيهات (Splunk, QRadar, FortiSIEM, Security Onion)",
    sd_check2: "تحليل حركة المرور والفحص الجنائي لحزم البيانات عبر Wireshark",
    sd_check3: "إدارة جدران الحماية FortiGate وأنظمة كشف ومنع التسلل IDS/IPS وسياسات الأمان",
    sd_check4: "توجيه وتبديل شبكات Cisco وتقسيم VLANs وإدارة خوادم Windows Server",
    sd_closing1: "تدريب مكثف في المعهد القومي للاتصالات (NTI) ومبادرة مصر الرقمية للشباب (DEY) و CAPMAS HRDC لتقديم خط دفاع أول موثوق وبنية شبكات قوية ومستقرة.",
    sd_closing2: "الالتزام بأفضل ممارسات الأمن السيبراني وسرعة احتواء الحوادث. متاح للوظائف بدوام كامل، والأعمال الحرة، والمشاريع الاستشارية.",

    // Starter Page
    starter_title: "عن محمد محمود إبراهيم",
    starter_desc: "محلل مركز العمليات الأمنية (SOC L1) وأخصائي شبكات ودعم فني مع خبرة عملية في مراقبة SIEM وتصنيف الحوادث وتحليل حزم البيانات وشبكات Cisco وخوادم Windows Server.",
    starter_subtitle: "محلل مركز العمليات الأمنية (SOC L1) | أخصائي شبكات ودعم فني"
  }
};
