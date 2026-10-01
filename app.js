(function(){
  "use strict";

  // =========================================================
  // Course data — carried over verbatim from the previous version
  // of the planner. No dates, titles, deadlines or notes were
  // changed or removed in this rewrite; only presentation and the
  // storage backend changed (Claude's shared "db" -> local storage
  // on this device, so the app works fully offline).
  // =========================================================

  var FF01 = {
    key:"ff01", color:"var(--course-ff01)", label:"Corporate Finance", short:"FF01", navLabel:"Corporate Finance", defaultCloseNote:"22:00 London",
    sessions:[
      {n:"1",id:"s1",title:"Capital Markets and Pricing of Risk",chapters:"Ch. 10.1–10.4",prof:"Nelson Camanho",hw:"hw1"},
      {n:"2",id:"s2",title:"Capital Markets and Pricing of Risk (cont'd)",chapters:"Ch. 10.5–10.8",prof:"Nelson Camanho",hw:"hw2"},
      {n:"3",id:"s3",title:"Optimal Portfolio Choice",chapters:"Ch. 11.1–11.5 · extra: sez. 11.3",prof:"Panagiotis Dontis Charitos",hw:"hw3"},
      {n:"4",id:"s4",title:"CAPM",chapters:"Ch. 11.6–11.8",prof:"Nelson Camanho",hw:"hw4"},
      {n:"P",id:"sp",title:"Portfolio Excel (esercitazione pratica)",chapters:"Excel",prof:"Panagiotis Dontis Charitos",hw:null},
      {n:"5",id:"s5",title:"Investor Behavior and Capital Market Efficiency",chapters:"Ch. 13.1–13.8 · extra: sez. 13.7",prof:"Panagiotis Dontis Charitos",hw:"hw5"},
      {n:"6",id:"s6",title:"Estimating the Cost of Capital",chapters:"Ch. 12.1–12.7",prof:"Nelson Camanho",hw:"hw6"},
      {n:"7",id:"s7",title:"Capital Structure in a Perfect Market",chapters:"Ch. 14.1–14.5",prof:"Nelson Camanho",hw:"hw7"},
      {n:"8",id:"s8",title:"Debt and Taxes",chapters:"Ch. 15.1, 15.2, 15.4 + parte cap. 16 · extra: sez. 15.3",prof:"Panagiotis Dontis Charitos",hw:"hw8"},
      {n:"9",id:"s9",title:"Payout Policy",chapters:"Ch. 17.1–17.3, 17.5–17.6 · extra: sez. 17.4",prof:"Panagiotis Dontis Charitos",hw:"hw9"},
      {n:"10",id:"s10",title:"Long-Term Financing",chapters:"Ch. 23.1, 23.2, 23.4, 24.1–24.4 · extra: sez. 23.3",prof:"Nelson Camanho",hw:"hw10"},
      {n:"11",id:"s11",title:"Options and Risk Management, e Review",chapters:"Ch. 20.1–20.2",prof:"Nelson Camanho",hw:"hw12"}
    ],
    deadlines:{
      hw1:{label:"HW1 — Risk and return",opens:"2026-09-15",closes:"2026-09-23"},
      hw2:{label:"HW2 — Diversification and systematic risk",opens:"2026-09-18",closes:"2026-09-29"},
      hw3:{label:"HW3 — Optimal portfolio choice",opens:"2026-09-22",closes:"2026-10-02"},
      hw4:{label:"HW4 — The CAPM",opens:"2026-09-29",closes:"2026-10-07"},
      hw5:{label:"HW5 — Investor behaviour and market efficiency",opens:"2026-10-06",closes:"2026-10-14"},
      hw6:{label:"HW6 — Estimating the cost of capital",opens:"2026-10-13",closes:"2026-10-21"},
      hw7:{label:"HW7 — Capital structure in a perfect market",opens:"2026-10-16",closes:"2026-10-28"},
      hw8:{label:"HW8 — Debt and taxes",opens:"2026-10-20",closes:"2026-11-02"},
      hw9:{label:"HW9 — Payout policy",opens:"2026-10-23",closes:"2026-11-11"},
      hw10:{label:"HW10 — Long-term financing",opens:"2026-11-10",closes:"2026-11-16"},
      hw11:{label:"HW11 — Long-term financing (cont.)",opens:"2026-11-10",closes:"2026-11-20"},
      hw12:{label:"HW12 — Options and risk management",opens:"2026-11-17",closes:"2026-11-25"}
    },
    extraDeadlineIds:["hw11"]
  };

  var MM03 = {
    key:"mm03", color:"var(--course-mm03)", label:"Data-Driven Marketing", short:"MM03", navLabel:"Data-Driven Marketing", editableDates:true,
    sessions:[
      {n:"1",id:"s1",title:"Introduction to Data-Driven Decisions & Data Ethics",
       bullets:["Data-driven decisions e tipi di analytics","Come le aziende creano valore con i dati (incl. AI)","Data ethics, GDPR, surveillance capitalism"],
       prep:"Leggi il syllabus del corso.",
       materials:[{id:"m1",label:"Three keys to building a data-driven strategy"},{id:"m2",label:"Session 1 Slide Deck"},{id:"m3",label:"Video: Shoshana Zuboff on surveillance capitalism (50 min)"}]},
      {n:"2",id:"s2",title:"Descriptive Statistics & Visual Data Analysis",
       bullets:["Tipi di dati e variabili","Statistica descrittiva (+ applicazioni in Stata)","Introduzione alla data visualisation (+ Stata)"],
       prep:"Scarica e installa Stata prima della sessione. Porta il laptop.",
       materials:[{id:"m1",label:"Download Stata"},{id:"m2",label:"Session 2 Slides"},{id:"m3",label:"Superstore Dataset (Excel)"},{id:"m4",label:"Superstore Dataset (Stata)"},{id:"m5",label:"Stata Cheat Sheet"},{id:"m6",label:"Stata Do File (syntax)"}]},
      {n:"3",id:"s3",title:"Understanding the Marketplace",
       bullets:["Database e analisi dati qualitativi/quantitativi","Ricerca primaria e secondaria, market analysis","Consumer Trend Canvas · attività con ChatGPT Edu (Snack Market Analysis)"],
       prep:"Leggi “The Anatomy of a Trend”.",
       materials:[{id:"m1",label:"Reading: The Anatomy of a Trend"},{id:"m2",label:"Session 3 Slides"},{id:"m3",label:"Consumer Trend Canvas Template"},{id:"m4",label:"Future Forecast 2026 Full Report"},{id:"m5",label:"Snacks Market Country Reports"},{id:"m6",label:"ChatGPT Edu: Snack Market Analysis Coach"}]},
      {n:"4",id:"s4",title:"Text and Data Mining & Visual Mining",
       bullets:["Text & data mining, predictive analytics","Social listening e consumer sentiment analysis","Visual mining"],
       prep:"Dettagli su Blackboard.",
       materials:[]},
      {n:"5",id:"s5",title:"Segmentation-Targeting-Positioning",
       bullets:["Clustering per capire bisogni e comportamenti dei consumatori","Targeting e positioning","Business case su segmentazione · attività ChatGPT Edu (MyNatural)"],
       prep:"Leggi il business case sulla segmentazione.",
       materials:[],
       assessment:"Da questa sessione (+3 giorni) si apre il Quiz 1 (sessioni 1–5)."},
      {n:"6",id:"s6",title:"Customer Journey: Acquisition",
       bullets:["Customer acquisition, new product development","Measuring customer value","A/B testing (incl. applicazione pratica)"],
       prep:"Esercizio su A/B testing — dettagli su Blackboard.",
       materials:[]},
      {n:"7",id:"s7",title:"Customer Journey: Conversion",
       bullets:["Revisione strategia di marketing · matrici BCG e GE","Conjoint analysis (focus metodologico)","Esercizio in aula: applicazione conjoint analysis"],
       prep:"Leggi il capitolo su conjoint analysis e le slide di briefing (incl. dataset).",
       materials:[]},
      {n:"8",id:"s8",title:"Customer Journey: Retention and Relationship Management",
       bullets:["CRM e customer lifetime value","Case study “Maru Batting Center: Customer Lifetime Value”"],
       prep:"Leggi il case study, studia il file Excel, fai le domande 1–4 dell'assignment.",
       materials:[]},
      {n:"9",id:"s9",title:"Marketing Planning and Resource Allocation (Regression Analysis — intro)",
       bullets:["Marketing planning & resource allocation","Introduzione alla regression analysis","Esercizio in aula: sales forecasting"],
       prep:"Leggi lo slide deck dello student handout.",
       materials:[]},
      {n:"10",id:"s10",title:"Marketing Planning and Resource Allocation (Regression Analysis — applicazioni)",
       bullets:["Tre applicazioni pratiche con Stata"],
       prep:"Leggi lo slide deck dello student handout.",
       materials:[],
       assessment:"Da questa sessione (+3 giorni) si apre il Quiz 2 (sessioni 6–10)."},
      {n:"11",id:"s11",title:"Data Analytics Simulation: Managing Segments and Customers",
       bullets:["Simulazione individuale","Debrief della simulazione"],
       prep:"Leggi il business case della simulazione.",
       materials:[]},
      {n:"12",id:"s12",title:"Revision and Practice Session",
       bullets:["Debrief del mock exam","Esercizi supplementari per l'esame finale","Q&A — entrambi i quiz chiudono a fine di questa sessione"],
       prep:"Fai gli esercizi del mock exam.",
       materials:[]}
    ],
    deadlines:{
      quiz1:{label:"Quiz 1 — sessioni 1–5 (30 V/F, 10 min)",relOpen:"s5",openOffsetDays:3,relClose:"s12"},
      quiz2:{label:"Quiz 2 — sessioni 6–10 (30 V/F, 10 min)",relOpen:"s10",openOffsetDays:3,relClose:"s12"}
    }
  };

  var CM01 = {
    key:"cm01", color:"var(--course-cm01)", label:"Financial Reporting (IFRS)", short:"CM01", navLabel:"Financial Reporting",
    sessions:[
      {n:"P",id:"pre",title:"Basic Accounting Test (prerequisito)",
       chapters:"Auto-valutazione di contabilità base — non fa media, ma partecipazione a 0 se saltato",
       prof:null,hw:"prereq"},
      {n:"1",id:"t1",title:"Institutional issues of IFRS and introduction to IFRS financial statements",
       chapters:"Lezioni 29–30 set · Q&A 30 set 15:15–17:15 (Zoom)",prof:"Jan Friedrich",hw:"qz1"},
      {n:"2",id:"t2",title:"Business Combinations",
       chapters:"Teoria 6–7 ott · esercizi 13–14 ott · Q&A 15 ott 17:30–19:30 (Zoom)",prof:"Jan Friedrich",hw:"qz2"},
      {n:"3",id:"t3",title:"Non-current assets & leases (intangibili, impairment test, leasing)",
       chapters:"Teoria 20–21 ott · esercizi 27–28 ott · Q&A 29 ott 17:30–19:30 (Zoom)",prof:"Jan Friedrich",hw:"qz3"},
      {n:"4",id:"t4",title:"Reporting per debito ed equity",
       chapters:"3–4 nov e 10–11 nov (teoria+esercizi) · Q&A 11 nov 17:30–19:30 (Zoom)",prof:"Jan Friedrich",hw:"qz4"},
      {n:"5",id:"t5",title:"KPI contabili e comunicazione finanziaria",
       chapters:"10–11 nov (teoria) · 17–18 nov (esercizi) · Q&A 18 nov 17:30–19:30 (Zoom)",prof:"Jan Friedrich",hw:"qz5"},
      {n:"F",id:"exam",title:"Final Exam — Topic 1–5",
       chapters:"Lunedì 24 novembre, 09:15–10:30 London time — non include il materiale prerequisito",
       prof:null,hw:"final"}
    ],
    deadlines:{
      prereq:{label:"Basic Accounting Test",opens:null,closes:"2026-10-04",closeNote:"23:59 London"},
      qz1:{label:"BB Quiz Topic 1 — 12 domande, 24 min",opens:"2026-10-08",closes:"2026-10-09",closeNote:"15:00 London"},
      qz2:{label:"BB Quiz Topic 2 — 12 domande, 24 min",opens:"2026-10-15",closes:"2026-10-16",closeNote:"15:00 London"},
      qz3:{label:"BB Quiz Topic 3 — 12 domande, 24 min",opens:"2026-10-29",closes:"2026-10-30",closeNote:"15:00 London"},
      qz4:{label:"BB Quiz Topic 4 — 10 domande, 20 min",opens:"2026-11-12",closes:"2026-11-13",closeNote:"15:00 London"},
      qz5:{label:"BB Quiz Topic 5 — 10 domande, 20 min",opens:"2026-11-19",closes:"2026-11-20",closeNote:"15:00 London"},
      final:{label:"Final Exam",opens:null,closes:"2026-11-24",closeNote:"09:15–10:30 London"}
    }
  };

  var HM01 = {
    key:"hm01", color:"var(--course-hm01)", label:"Human Resources for Managers", short:"HM01", navLabel:"Human Resources", editableDates:true,
    sessions:[
      {n:"1",id:"s1",title:"Introduction to HRM",chapters:null,prof:null,hw:null},
      {n:"2",id:"s2",title:"Sustainable HRM",chapters:null,prof:null,hw:null},
      {n:"3",id:"s3",title:"Employer branding",chapters:null,prof:null,hw:null},
      {n:"4",id:"s4",title:"Recruitment and Selection",chapters:"Include un case study sull'uso dell'IA nel recruiting",prof:null,hw:null},
      {n:"5",id:"s5",title:"Performance Management",chapters:null,prof:null,hw:null},
      {n:"6",id:"s6",title:"Rewards and compensation",chapters:null,prof:null,hw:null},
      {n:"CS",id:"casestudy",title:"Case Study Competition (lavoro di gruppo)",
       chapters:"Competizione a squadre sul case study assegnato — gruppi e aziende assegnate su Blackboard",
       prof:null,hw:"casestudy"}
    ],
    deadlines:{
      casestudy:{label:"Case Study Competition — consegna",editable:true}
    }
  };

  var AF01 = {
    key:"af01", color:"var(--course-af01)", label:"Fundamentals of Management Control", short:"AF01", navLabel:"Management Control", editableDates:true,
    sessions:[
      {n:"1",id:"s1",title:"Responsibility accounting & Financial Performance Measurement Systems",
       chapters:"Ch. 1 (intro, sez. 1 e 2.1) · Ch. 7 (intro, sez. 1) · Ch. 3 (intro, sez. 1)",prof:null,hw:null},
      {n:"2",id:"s2",title:"Limits of financial PMS & the Performance Model",
       chapters:"Ch. 3 (sez. 2) · Ch. 2 — esercizio in aula",prof:null,hw:null},
      {n:"3-4",id:"s34",title:"Classi 3-4 — Dashboards and KPIs for performance management",
       chapters:"Ch. 8 (intro, sez. 1, 2.2, 2.4) — caso AIR UTOPIA",prof:null,hw:null},
      {n:"4-5",id:"s45",title:"Classi 4-5 — Designing sustainability-related KPIs",
       chapters:"Ch. 8 (intro, sez. 1, 2.2, 2.4) — caso FRENCH REPAIRABILITY INDEX",prof:null,hw:null},
      {n:"6",id:"s6",title:"The planning process",
       chapters:"Ch. 10 (intro, sez. 1.1, 1.2, 2) — caso BUDG",prof:null,hw:null},
      {n:"7-8",id:"s78",title:"Classi 7-8 — Analyzing results & Course conclusion",
       chapters:"Ch. 11 (intro, sez. 1.1, 1.2) — caso STET SPORTSWEAR",prof:null,hw:null},
      {n:"MT",id:"midterm",title:"Mid-term Exam (in aula, closed book)",
       chapters:"Continuous assessment — 50% del voto",prof:null,hw:"midterm"},
      {n:"F",id:"finalexam",title:"Final Exam (closed book)",
       chapters:"50% del voto — sotto 8/20 il corso non viene convalidato",prof:null,hw:"final"}
    ],
    deadlines:{
      midterm:{label:"Mid-term Exam",editable:true},
      final:{label:"Final Exam",editable:true}
    }
  };

  var OM01 = {
    key:"om01", color:"var(--course-om01)", label:"Organisation and Management", short:"OM01", navLabel:"Organisation & Mgmt", editableDates:true,
    sessions:[
      {n:"1",id:"s1",title:"An historical perspective of organizing & managing",chapters:null,prof:null,hw:null},
      {n:"2",id:"s2",title:"Designing Work",chapters:null,prof:null,hw:null},
      {n:"3",id:"s3",title:"Organisation Structure",chapters:null,prof:null,hw:null},
      {n:"4",id:"s4",title:"Culture",chapters:null,prof:null,hw:null},
      {n:"5",id:"s5",title:"Incentives",chapters:null,prof:null,hw:null},
      {n:"6",id:"s6",title:"Power and Legitimacy",chapters:null,prof:null,hw:null},
      {n:"7",id:"s7",title:"Decision making",chapters:null,prof:null,hw:null},
      {n:"GP",id:"groupproject",title:"Group Project — consegna",
       chapters:"40% del voto — dettagli comunicati alla prima lezione",prof:null,hw:"groupproject"},
      {n:"WE",id:"writtenexam",title:"Written Exam (in aula, closed book)",
       chapters:"50% del voto",prof:null,hw:"writtenexam"}
    ],
    deadlines:{
      groupproject:{label:"Group Project — consegna",editable:true},
      writtenexam:{label:"Written Exam",editable:true}
    }
  };

  var STRATEGY = {
    key:"strategy", color:"var(--course-strategy)", label:"Strategy", short:"STR", navLabel:"Strategy", editableDates:true,
    sessions:[
      {n:"1",id:"s1",title:"Introduction to Strategy",
       chapters:"Cos'è la strategia, Competitive Advantage (ROIC, CAP), posizionamento (cost leadership/differentiation/hybrid), Value Stick, Positioning Archetypes, Value Disciplines, Strategic Positioning Matrix · Case Work 1: Madonna, General Giap, Williams Sisters · kickoff gruppo: scelta dell'azienda",
       prof:"Giovanni Scarso Borioli",hw:null},
      {n:"2",id:"s2",title:"Review of Group work & Ducati Case",
       chapters:"Revisione gruppi · Caso Ducati (HBS 9-701-132): turnaround di Minoli, Winning Ambition, Where to Play, How to Win, Core Capabilities · framework \"Current Situation Analysis\" (Playing Field, Value Proposition, Operating Model)",
       prof:"Giovanni Scarso Borioli",hw:null},
      {n:"GP",id:"groupchoice",title:"Scelta azienda per il Group Project (approvazione docente)",
       chapters:"Da completare entro la Sessione 3",prof:null,hw:"groupchoice"},
      {n:"GW",id:"groupwork",title:"Group Project — consegna e presentazione finale",
       chapters:"Valutazione nell'ultima sessione, offline e online — fa parte del 50% continuous assessment insieme a class participation",prof:null,hw:"groupwork"},
      {n:"WE",id:"finalexam",title:"Final Exam (sit-down, closed book, max 2h)",
       chapters:"50% del voto — stesso esame per tutte le classi Strategy di Londra e degli altri campus (sessioni A/B/C/D)",prof:null,hw:"finalexam"}
    ],
    deadlines:{
      groupchoice:{label:"Scelta azienda — approvazione docente",editable:true},
      groupwork:{label:"Group Project — consegna/presentazione finale",editable:true},
      finalexam:{label:"Final Exam",editable:true}
    }
  };

  var ALL_COURSES=[FF01,CM01,MM03,HM01,AF01,OM01,STRATEGY];

  var INFO = {
    ff01:{code:"FF01 · MIM · Semestre 1",title:"Corporate Finance",fields:[
      ["Docenti (London)","Nelson Camanho, Panagiotis Dontis Charitos"],
      ["Module leader","Paul Karehnke"],
      ["ECTS","5 — 24 ore (12 sessioni)"],
      ["Libro di testo","Berk &amp; DeMarzo, Corporate Finance (Pearson) — eBook via Blackboard/MyFinanceLab"],
      ["Valutazione","Continuous assessment 30% (homework 10% + case study/group work) · Final exam 70%, soglia 8/20"],
      ["Regola homework","Media dei 10 migliori su 12 · 2 tentativi a domanda · niente ritardi"]
    ],sectionLabel:"Sessioni e scadenze"},
    mm03:{code:"MM03 · MIM · Semestre 1",title:"Data-Driven Marketing",fields:[
      ["Docenti (London)","Hsin-Hsuan Meg Lee, Yeyi Liu, Yufei Qiu"],
      ["Module leader","Isabella Maggioni, Robert Wilken (federale)"],
      ["ECTS","5 — 24 ore (12 sessioni)"],
      ["Valutazione","Esame scritto 80% · Quiz 20% (2 quiz da 30 domande V/F, 10 minuti)"],
      ["Soglie","Minimo 8/20 per componente · media pesata minima 10/20"],
      ["Nota","Inserisci la data di ogni sessione man mano che la trovi su Blackboard: le finestre dei quiz si calcolano da sole."]
    ],sectionLabel:"Sessioni e scadenze"},
    cm01:{code:"CM01 · MIM Year 1 · Semestre 1",title:"Fundamentals of International Financial Reporting",fields:[
      ["Docente","Jan Friedrich"],
      ["ECTS","3 — 16 ore, corso 100% online"],
      ["Valutazione","Final exam 75% (1h15, soglia 8/20) · Partecipazione/BB test 25% (soglia 8/20)"],
      ["Per passare","Media totale minima 10/20 · sotto 8/20 all'esame finale si fa il resit"],
      ["Basic Accounting Test","Obbligatorio, non fa media — ma se lo salti la partecipazione va a 0"],
      ["Gruppo","Gli orari sotto sono per tutti i gruppi A–D: controlla su Blackboard il tuo gruppo per l'orario esatto della lezione"]
    ],sectionLabel:"Topic e scadenze"},
    hm01:{code:"HM01 · MIM · Semestre 1",title:"Human Resources for Managers",fields:[
      ["Module leader","Almudena Cañibano"],
      ["Docente","Argyro Avgoustaki"],
      ["ECTS","3 — 16 ore (8 sessioni da 2h), in presenza + materiali su Blackboard"],
      ["Valutazione","Esame scritto in aula 50% · Valutazione continua 50% (partecipazione, lavori di gruppo, assignment, quiz — a discrezione del docente)"],
      ["Uso IA","Non richiesto nel corso, ma c'è un case study specifico sull'uso dell'IA nel recruiting"],
      ["Nota","Blackboard è organizzato per settimane: Week 1 (24–25 set) già svolta, Week 2 da domani 2 ottobre. Il syllabus elenca 6 temi su 8 sessioni totali — mandami le cartelle successive quando le trovi e completo le date sessione per sessione."]
    ],sectionLabel:"Temi e scadenze"},
    af01:{code:"AF01 · MIM · Semestre 1",title:"Fundamentals of Management Control",fields:[
      ["Course coordinator","Dr. Zsuzsanna Vargha"],
      ["Course manager","Ms Annie Mouquet (Dept. Performance Measurement &amp; Management, Paris Champerret)"],
      ["Durata","16 ore — 8 classi (alcune accorpate: 3-4, 4-5, 7-8)"],
      ["Libro di testo","Zarlowski, Saulpic, Giraud, Dambrin (2022), <i>Fundamentals of Management Control: techniques and principles</i>"],
      ["Valutazione","Continuous assessment — mid-term exam (in aula, closed book) 50% · Final exam (closed book) 50%"],
      ["Attenzione","Frequenza obbligatoria. Un voto &lt;8 all'esame finale comporta automaticamente la non convalida del corso."],
      ["Nota","Il programma dettagliato (temi, capitoli, casi) viene dal syllabus. Le date dei materiali su Blackboard sono confermate solo per le Sessioni 1 e 2 dagli screenshot che mi hai mandato — per le altre sessioni e per le date di mid-term/final ho lasciato i campi editabili: aggiorna man mano che le trovi."]
    ],sectionLabel:"Classi e scadenze"},
    om01:{code:"OM01 · MIM · Semestre 1",title:"Organisation and Management",fields:[
      ["Docenti (London)","Daniela Lup, Simon Mercado"],
      ["ECTS","3 — 16 ore (7 sessioni da 2h), 100% in presenza"],
      ["Metodo","Lezioni, case studies, group work — ogni sessione: teoria, discussione di un testo/video/caso, esercitazione pratica in team"],
      ["Valutazione","Written exam (in aula, closed book) 50% · Continuous assessment 50% (partecipazione 10% + group project 40%, dettagli comunicati alla prima lezione)"],
      ["Uso IA","Livello 3 — non richiesta per il corso in sé, ma utilizzabile come strumento per il progetto finale di gruppo"],
      ["Materiali","Niente libro di testo fisso: articoli e capitoli comunicati di volta in volta su Blackboard dal docente"],
      ["Nota","Il syllabus elenca 7 temi per le 7 sessioni ma non ne specifica esplicitamente l'ordine — ho assunto che l'ordine di elenco coincida con l'ordine delle sessioni (lettura più naturale, ma non dichiarata nel documento). Conferma quando vedi il programma reale su Blackboard. Nessuna data è nota: tutti i campi sotto sono editabili."]
    ],sectionLabel:"Temi e scadenze"},
    strategy:{code:"MIM · Semestre 1",title:"Strategy",fields:[
      ["Docente (London)","Giovanni Scarso Borioli, Ph.D."],
      ["Valutazione","Class participation + Group work 50% (insieme) · Final exam 50% (sit-down, closed book, max 2h, stesso esame per tutte le classi Strategy di Londra e degli altri campus — sessioni A/B/C/D)"],
      ["Group work","Gruppi fino a 4 studenti · strategic plan in 4 parti: Environment &amp; Industry Analysis, Internal Analysis, Core Challenge(s), Iniziative · formato libero (video, cartoon, PPT) · scelta azienda da approvare dal docente entro la Sessione 3 · valutazione nell'ultima sessione, offline e online"],
      ["Materiali d'esempio","Caso Ducati (HBS 9-701-132) usato come esempio del framework \"Current Situation Analysis\" (Playing Field, Value Proposition, Operating Model) da applicare alla propria azienda scelta"],
      ["Nota","Non ho un syllabus ufficiale per questo corso — quanto sotto viene dalle slide delle Sessioni 1 e 2 che mi hai mandato. Non so il numero totale di sessioni né le date: mandami le prossime quando le hai, incluso il syllabus se lo trovi su Blackboard."]
    ],sectionLabel:"Sessioni e scadenze"}
  };

  // =========================================================
  // date helpers (unchanged from the previous version)
  // =========================================================
  function todayISO(){var d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
  function daysBetween(fromISO,toISO){
    var a=new Date(fromISO+"T00:00:00"), b=new Date(toISO+"T00:00:00");
    return Math.round((b-a)/86400000);
  }
  function fmtDate(iso){
    if(!iso) return "";
    var d=new Date(iso+"T00:00:00");
    return d.toLocaleDateString("it-IT",{day:"2-digit",month:"short"});
  }
  function addDays(iso,n){
    var d=new Date(iso+"T00:00:00"); d.setDate(d.getDate()+n);
    return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  }
  function countBadge(closesISO,done){
    if(done) return {cls:"done",text:"Fatto"};
    if(!closesISO) return {cls:"ok",text:"da confermare"};
    var n=daysBetween(todayISO(),closesISO);
    if(n<0) return {cls:"danger",text:"scaduto"};
    if(n===0) return {cls:"danger",text:"scade oggi"};
    if(n<=3) return {cls:"warn",text:n+"g rimasti"};
    return {cls:"ok",text:n+"g rimasti"};
  }
  function svgAlert(){
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
  }

  // =========================================================
  // state + persistence — localStorage, so the app works fully
  // offline and keeps its data across closing/reopening without
  // needing a Claude account, a login, or any network call.
  // =========================================================
  var LS_PROGRESS = "escpPlanner.progress";
  var LS_DATES = "escpPlanner.sessionDates";

  function loadJSON(key){
    try{
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : {};
    }catch(e){ return {}; }
  }
  function saveJSON(key, obj){
    try{ localStorage.setItem(key, JSON.stringify(obj)); }catch(e){}
  }

  var progress = loadJSON(LS_PROGRESS);       // id -> bool
  var sessionDates = loadJSON(LS_DATES);       // "mm03-s5" -> "2026-10-06"

  function progId(course,itemId){ return course+"-"+itemId; }

  function saveProgress(id,done){
    progress[id]=done;
    saveJSON(LS_PROGRESS, progress);
  }
  function saveDate(id,value){
    if(value){ sessionDates[id]=value; } else { delete sessionDates[id]; }
    saveJSON(LS_DATES, sessionDates);
  }

  // =========================================================
  // deadline resolution (unchanged logic)
  // =========================================================
  function resolveDeadline(course,key){
    var d=course.deadlines[key];
    if(d.relOpen){
      var openBase=sessionDates[course.key+"-"+d.relOpen];
      var closeBase=sessionDates[course.key+"-"+d.relClose];
      return {label:d.label,opens:openBase?addDays(openBase,d.openOffsetDays):null,closes:closeBase||null,closeNote:d.closeNote||"",editable:false,editKey:null};
    }
    if(d.editable){
      var editKey=course.key+"-dl-"+key;
      return {label:d.label,opens:null,closes:sessionDates[editKey]||null,closeNote:d.closeNote||"",editable:true,editKey:editKey};
    }
    return {label:d.label,opens:d.opens||null,closes:d.closes||null,closeNote:d.closeNote||course.defaultCloseNote||"",editable:false,editKey:null};
  }

  // =========================================================
  // rendering
  // =========================================================
  function renderAll(){
    renderNavCounts();
    renderOverview();
    ALL_COURSES.forEach(function(course){
      renderCourse(course, document.getElementById(course.key+"-rail"));
    });
  }

  // Strips a cryptic leading code (HW3, Quiz 1, BB Quiz Topic 2...) from a
  // deadline label, keeping only the descriptive part, when that pattern is
  // present. Labels that are already plain descriptions (no leading code)
  // are returned unchanged.
  function descOnly(label){
    var m = label.match(/^HW\d+\s*—\s*(.+)$/);
    return m ? m[1] : label;
  }

  function collectAllDeadlines(){
    var out=[];
    ALL_COURSES.forEach(function(course){
      Object.keys(course.deadlines).forEach(function(k){
        var r=resolveDeadline(course,k);
        out.push({course:course.key,courseName:course.navLabel,id:k,label:r.label,closes:r.closes,done:!!progress[progId(course.key,k)]});
      });
    });
    out.sort(function(a,b){
      if(!a.closes && !b.closes) return 0;
      if(!a.closes) return 1;
      if(!b.closes) return -1;
      return a.closes<b.closes?-1:1;
    });
    return out;
  }

  function renderNavCounts(){
    var all=collectAllDeadlines();
    var dueSoon = all.filter(function(i){ return !i.done && i.closes && daysBetween(todayISO(),i.closes) <= 3; }).length;
    var pill = document.getElementById("overview-count-pill");
    if(pill){
      if(dueSoon>0){ pill.textContent = String(dueSoon); pill.hidden=false; } else { pill.hidden=true; }
    }
  }

  function renderOverview(){
    var all=collectAllDeadlines();

    var dueSoon = all.filter(function(i){ return !i.done && i.closes && daysBetween(todayISO(),i.closes) >= 0 && daysBetween(todayISO(),i.closes) <= 7; }).length;
    var overdue = all.filter(function(i){ return !i.done && i.closes && daysBetween(todayISO(),i.closes) < 0; }).length;
    var doneCount = all.filter(function(i){ return i.done; }).length;

    var statsEl = document.getElementById("stats-slot");
    if(statsEl){
      statsEl.innerHTML =
        '<div class="stat warn"><div class="stat-num mono">'+dueSoon+'</div><div class="stat-label">entro 7 giorni</div></div>'+
        '<div class="stat"><div class="stat-num mono" style="color:var(--danger)">'+overdue+'</div><div class="stat-label">in ritardo</div></div>'+
        '<div class="stat good"><div class="stat-num mono">'+doneCount+'</div><div class="stat-label">completate</div></div>';
    }

    var list=document.getElementById("overview-list");
    list.innerHTML="";
    all.forEach(function(item){
      var li=document.createElement("li");
      var badge=countBadge(item.closes,item.done);
      li.innerHTML =
        '<span class="tag '+item.course+'">'+item.courseName+'</span>'+
        '<span class="tl-label"><span class="name">'+descOnly(item.label)+'</span><span class="when mono">'+(item.closes?("chiude "+fmtDate(item.closes)):"data da confermare")+'</span></span>'+
        '<span class="count '+badge.cls+' mono">'+badge.text+'</span>';
      list.appendChild(li);
    });

    var urgent = all.filter(function(i){ return !i.done && i.closes && daysBetween(todayISO(),i.closes) <= 3; });
    var slot=document.getElementById("banner-slot");
    if(urgent.length){
      var names = urgent.map(function(i){ return descOnly(i.label); }).join(", ");
      slot.innerHTML = '<div class="banner">'+svgAlert()+'<div><strong>'+urgent.length+' '+(urgent.length>1?"scadenze":"scadenza")+' entro 3 giorni</strong><p>'+names+'</p></div></div>';
    } else {
      slot.innerHTML="";
    }
  }

  function renderCourse(course, railEl){
    if(!railEl) return;
    railEl.innerHTML="";
    course.sessions.forEach(function(s){
      var el=document.createElement("div");
      var pid=progId(course.key,s.id);
      var isDone=!!progress[pid];
      el.className="session"+(isDone?" done":"");
      el.setAttribute("data-n", s.n);

      var heading = /^\d+$/.test(s.n) ? ("Sessione "+s.n+" — "+s.title) : s.title;
      var html = '<div class="scard"><div class="shead"><div><h3>'+heading+'</h3>';
      if(s.chapters) html += '<div class="chapters">'+s.chapters+(s.prof?(' · '+s.prof):'')+'</div>';
      html += '</div><label class="check"><input type="checkbox" data-kind="progress" data-id="'+pid+'" '+(isDone?"checked":"")+'> Fatto</label></div>';

      if(s.bullets && s.bullets.length){
        html += '<ul class="bullets">'+s.bullets.map(function(b){return '<li>'+b+'</li>';}).join("")+'</ul>';
      }
      if(s.prep){
        html += '<div class="prep"><b>Da preparare prima:</b> '+s.prep+'</div>';
      }
      if(s.materials && s.materials.length){
        html += '<ul class="matlist">'+s.materials.map(function(m){
          var mid=progId(course.key,s.id+"-"+m.id);
          var mdone=!!progress[mid];
          return '<li><input type="checkbox" data-kind="progress" data-id="'+mid+'" '+(mdone?"checked":"")+'> '+m.label+'</li>';
        }).join("")+'</ul>';
      }

      if(s.hw && course.deadlines[s.hw]){
        html += renderDeadlineChip(course,"hw",s.hw);
      }
      if(course.editableDates){
        var dateVal = sessionDates[course.key+"-"+s.id] || "";
        html += '<div class="dchip"><span class="datefield">Data sessione: <input type="date" data-kind="date" data-id="'+course.key+'-'+s.id+'" value="'+dateVal+'"></span></div>';
        if(s.assessment){
          html += '<div class="prep" style="margin-top:8px"><b>Scadenza:</b> '+s.assessment+'</div>';
        }
      }
      el.innerHTML = html;
      railEl.appendChild(el);

      if(course.key==="mm03"){
        var quizKey = (s.id==="s5") ? "quiz1" : (s.id==="s10") ? "quiz2" : null;
        if(quizKey){
          var chipWrap=document.createElement("div");
          chipWrap.innerHTML = renderDeadlineChip(course,"quiz",quizKey);
          el.querySelector(".scard").appendChild(chipWrap.firstChild);
        }
      }
    });

    if(course.key==="ff01"){
      var s10card = railEl.querySelector('.session[data-n="10"] .scard');
      if(s10card){
        var wrap=document.createElement("div");
        wrap.innerHTML = renderDeadlineChip(course,"hw","hw11");
        s10card.appendChild(wrap.firstChild);
      }
    }
  }

  function renderDeadlineChip(course,kind,key){
    var r=resolveDeadline(course,key);
    var pid=progId(course.key,key);
    var done=!!progress[pid];
    var badge=countBadge(r.closes,done);
    var whenHtml;
    if(r.editable){
      whenHtml = '<span class="datefield">data: <input type="date" data-kind="date" data-id="'+r.editKey+'" value="'+(r.closes||"")+'"></span>';
    } else {
      var whenText;
      if(r.closes){
        var parts=[];
        if(r.opens) parts.push("apre "+fmtDate(r.opens));
        parts.push("chiude "+fmtDate(r.closes)+(r.closeNote?(" ("+r.closeNote+")"):""));
        whenText=parts.join(" · ");
      } else {
        whenText="date da confermare";
      }
      whenHtml = '<span class="dwhen">'+whenText+'</span>';
    }
    return '<div class="dchip"><label class="check"><input type="checkbox" data-kind="progress" data-id="'+pid+'" '+(done?"checked":"")+'></label>'+
      '<span class="dname">'+descOnly(r.label)+'</span>'+whenHtml+
      '<span class="count '+badge.cls+' mono" style="margin-left:auto">'+badge.text+'</span></div>';
  }

  // =========================================================
  // page scaffolding — nav, course sections, info cards
  // =========================================================
  function buildShell(){
    var navlist = document.getElementById("navlist");
    var content = document.getElementById("content");

    var overviewBtn = document.createElement("button");
    overviewBtn.className="navitem"; overviewBtn.dataset.view="overview"; overviewBtn.setAttribute("aria-current","true");
    overviewBtn.innerHTML = '<span class="navicon"></span>Panoramica<span class="count-pill" id="overview-count-pill" hidden></span>';
    navlist.appendChild(overviewBtn);

    ALL_COURSES.forEach(function(course){
      var btn=document.createElement("button");
      btn.className="navitem"; btn.dataset.view=course.key;
      btn.innerHTML = '<span class="dot" style="background:'+course.color+'"></span>'+course.short+' '+course.navLabel;
      navlist.appendChild(btn);
    });

    ALL_COURSES.forEach(function(course){
      var info = INFO[course.key];
      var section=document.createElement("section");
      section.className="view"; section.id="view-"+course.key; section.hidden=true;

      var fieldsHtml = info.fields.map(function(f){
        return '<div><div class="k">'+f[0]+'</div><div class="v">'+f[1]+'</div></div>';
      }).join("");

      section.innerHTML =
        '<div class="infocard">'+
          '<span class="code">'+info.code+'</span>'+
          '<h2>'+info.title+'</h2>'+
          '<div class="infogrid">'+fieldsHtml+'</div>'+
        '</div>'+
        '<p class="section-label">'+info.sectionLabel+'</p>'+
        '<div class="rail" id="'+course.key+'-rail"></div>';

      content.appendChild(section);
    });

    var note=document.createElement("p");
    note.className="note";
    note.textContent="Le date dei corsi senza syllabus ufficiale compaiono qui solo dopo che le inserisci tu, sessione per sessione. Tutti i dati restano salvati su questo dispositivo anche offline.";
    content.appendChild(note);
  }

  // =========================================================
  // nav + events
  // =========================================================
  function switchView(view){
    document.querySelectorAll(".navitem").forEach(function(b){ b.setAttribute("aria-current", b.dataset.view===view ? "true":"false"); });
    document.querySelectorAll("section.view").forEach(function(s){ s.hidden = (s.id !== "view-"+view); });
    document.getElementById("content-scroll").scrollTop = 0;
    try{ history.replaceState(null,"","#"+view); }catch(e){}
  }

  document.addEventListener("click", function(e){
    var btn=e.target.closest(".navitem");
    if(btn){ switchView(btn.dataset.view); return; }
  });

  document.body.addEventListener("change", function(e){
    var t=e.target;
    if(t.matches('input[data-kind="progress"]')){
      var id=t.dataset.id;
      progress[id]=t.checked;
      saveProgress(id, t.checked);
      renderAll();
    } else if(t.matches('input[data-kind="date"]')){
      var did=t.dataset.id;
      saveDate(did, t.value);
      renderAll();
    }
  });

  // =========================================================
  // theme toggle (light default; remembers an explicit choice)
  // =========================================================
  function initTheme(){
    var saved = null;
    try{ saved = localStorage.getItem("escpPlanner.theme"); }catch(e){}
    if(saved==="light" || saved==="dark"){ document.documentElement.setAttribute("data-theme", saved); }
    updateThemeBtn();
  }
  function updateThemeBtn(){
    var btn=document.getElementById("themeToggle");
    if(!btn) return;
    var explicit = document.documentElement.getAttribute("data-theme");
    var isDark = explicit ? explicit==="dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    btn.innerHTML = '<span>'+(isDark?"☀️":"🌙")+'</span><span class="label">'+(isDark?"Modalità chiara":"Modalità scura")+'</span>';
  }
  function toggleTheme(){
    var cur = document.documentElement.getAttribute("data-theme");
    var isDark = cur ? cur==="dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try{ localStorage.setItem("escpPlanner.theme", next); }catch(e){}
    updateThemeBtn();
  }

  // =========================================================
  // export / import (manual backup + cross-device transfer,
  // since data is local to this device/browser only)
  // =========================================================
  function exportData(){
    var payload = {
      kind:"escp-mim-planner-backup", version:1, exportedAt:new Date().toISOString(),
      progress: progress, sessionDates: sessionDates
    };
    var blob = new Blob([JSON.stringify(payload,null,2)], {type:"application/json"});
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href=url; a.download = "escp-planner-backup-"+todayISO()+".json";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
  }
  function importData(file){
    var reader = new FileReader();
    reader.onload = function(){
      try{
        var data = JSON.parse(reader.result);
        if(data && data.progress && typeof data.progress === "object"){
          progress = data.progress; saveJSON(LS_PROGRESS, progress);
        }
        if(data && data.sessionDates && typeof data.sessionDates === "object"){
          sessionDates = data.sessionDates; saveJSON(LS_DATES, sessionDates);
        }
        renderAll();
        alert("Dati importati correttamente.");
      }catch(e){
        alert("File non valido: non è un backup del planner.");
      }
    };
    reader.readAsText(file);
  }

  // =========================================================
  // sidebar collapse on mobile (tap outside closes it — kept
  // simple since the sidebar becomes a horizontal bar on narrow
  // screens via CSS, so no JS toggle is required there)
  // =========================================================

  // =========================================================
  // boot
  // =========================================================
  function boot(){
    buildShell();
    initTheme();

    var exportBtn=document.getElementById("exportBtn");
    if(exportBtn) exportBtn.addEventListener("click", exportData);
    var importFile=document.getElementById("importFile");
    if(importFile) importFile.addEventListener("change", function(e){
      if(e.target.files && e.target.files[0]) importData(e.target.files[0]);
      e.target.value="";
    });
    var themeBtn=document.getElementById("themeToggle");
    if(themeBtn) themeBtn.addEventListener("click", toggleTheme);

    var hash = (location.hash||"").replace("#","");
    var validViews = ["overview"].concat(ALL_COURSES.map(function(c){return c.key;}));
    if(validViews.indexOf(hash) !== -1){ switchView(hash); }

    renderAll();

    if("serviceWorker" in navigator){
      window.addEventListener("load", function(){
        navigator.serviceWorker.register("sw.js").catch(function(){});
      });
    }
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
