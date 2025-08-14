// ================================
// QUIZ NARUTO – SCRIPT COMPLETO
// - Pool (allQuestions) grande
// - 8 domande random ad ogni partita
// - Risposte in ordine random
// - Vittoria al 70%  → auguri.html
// ================================

// Array grande di domande (puoi continuare ad aggiungerne)
const allQuestions = [
  { question: "Quante code ha Matatabi, la Bestia con la coda di tipo felino?", answers: ["Due", "Tre", "Quattro", "Sei"], correct: "Due" },
  { question: "Qual è il nome vero di Tobi prima di diventare il capo dell'Organizzazione Alba?", answers: ["Obito Uchiha", "Madara Uchiha", "Izuna Uchiha", "Shisui Uchiha"], correct: "Obito Uchiha" },
  { question: "Qual è il Kekkei Genkai del clan Hōzuki di Kirigakure?", answers: ["Liquefazione", "Magnetismo", "Polvere", "Cristallo"], correct: "Liquefazione" },
  { question: "Chi è stato il maestro di Minato Namikaze?", answers: ["Jiraiya", "Hiruzen Sarutobi", "Orochimaru", "Kakashi Hatake"], correct: "Jiraiya" },
  { question: "Qual è il vero nome del Quarto Kazekage?", answers: ["Rasa", "Yashamaru", "Gaara", "Baki"], correct: "Rasa" },
  { question: "Quale delle seguenti tecniche NON appartiene a Itachi Uchiha?", answers: ["Amaterasu", "Susanoo", "Chidori", "Tsukuyomi"], correct: "Chidori" },
  { question: "Chi ha sconfitto il Terzo Raikage durante la Terza Guerra Mondiale Ninja?", answers: ["Se stesso", "Minato Namikaze", "Onoki", "Hanzo"], correct: "Se stesso" },
  { question: "Come si chiama la tecnica proibita usata da Orochimaru per evocare i Kage morti?", answers: ["Edo Tensei", "Shiki Fujin", "Kuchiyose no Jutsu", "Reika no Jutsu"], correct: "Edo Tensei" },

  // 🔽 da qui altre (tu ne hai già messe parecchie; puoi aggiungerne fino a 40+)
  { question: "Chi è il padre di Naruto?", answers: ["Minato Namikaze", "Hiruzen Sarutobi", "Jiraiya", "Fugaku Uchiha"], correct: "Minato Namikaze" },
  { question: "Come si chiama il demone a nove code sigillato in Naruto?", answers: ["Kurama", "Shukaku", "Gyūki", "Matatabi"], correct: "Kurama" },
  { question: "Quale squadra era formata da Naruto, Sasuke e Sakura?", answers: ["Squadra 7", "Squadra 8", "Squadra 10", "Anbu"], correct: "Squadra 7" },
  { question: "Chi ha ucciso Asuma Sarutobi?", answers: ["Hidan", "Kakuzu", "Pain", "Kisame"], correct: "Hidan" },
  { question: "Chi è il fratello maggiore di Sasuke?", answers: ["Itachi Uchiha", "Madara Uchiha", "Shisui Uchiha", "Obito Uchiha"], correct: "Itachi Uchiha" },
  { question: "Quale tecnica è il marchio di fabbrica di Naruto?", answers: ["Rasengan", "Chidori", "Amaterasu", "Byakugan"], correct: "Rasengan" },
  { question: "Chi è il Quinto Hokage?", answers: ["Tsunade", "Kakashi", "Naruto", "Danzo"], correct: "Tsunade" },
  { question: "Qual è la specialità di Rock Lee?", answers: ["Taijutsu", "Ninjutsu", "Genjutsu", "Kenjutsu"], correct: "Taijutsu" },
  { question: "Chi è il leader dell'Organizzazione Alba?", answers: ["Pain", "Obito", "Konan", "Kisame"], correct: "Pain" },
  { question: "Qual è il nome della spada di Kisame?", answers: ["Samehada", "Kubikiribōchō", "Kusanagi", "Nuibari"], correct: "Samehada" },
  { question: "Chi è il Jinchūriki di Gyūki?", answers: ["Killer Bee", "Gaara", "Yugito Nii", "Roshi"], correct: "Killer Bee" },
  { question: "Quale clan possiede il Byakugan?", answers: ["Hyūga", "Uchiha", "Senju", "Akimichi"], correct: "Hyūga" },
  { question: "Chi è la madre di Naruto?", answers: ["Kushina Uzumaki", "Mito Uzumaki", "Mei Terumi", "Kurenai Yuhi"], correct: "Kushina Uzumaki" },
  { question: "Chi ha insegnato a Naruto il Rasenshuriken?", answers: ["Kakashi", "Jiraiya", "Minato", "Yamato"], correct: "Kakashi" },
  { question: "Come si chiama il villaggio di origine di Naruto?", answers: ["Konoha", "Suna", "Kiri", "Iwa"], correct: "Konoha" },
  { question: "Quale bestia con la coda è sigillata in Gaara?", answers: ["Shukaku", "Kurama", "Matatabi", "Isobu"], correct: "Shukaku" },
  { question: "Chi ha sconfitto Pain a Konoha?", answers: ["Naruto", "Kakashi", "Sasuke", "Hinata"], correct: "Naruto" },
  { question: "Chi è il fondatore del clan Uchiha?", answers: ["Indra Otsutsuki", "Madara Uchiha", "Fugaku Uchiha", "Izuna Uchiha"], correct: "Indra Otsutsuki" },
  { question: "Qual è la tecnica proibita che Naruto usa per moltiplicarsi?", answers: ["Kage Bunshin no Jutsu", "Bunshin no Jutsu", "Kawarimi no Jutsu", "Henge no Jutsu"], correct: "Kage Bunshin no Jutsu" },
  { question: "Chi diventa l'Ottavo Hokage?", answers: ["Konohamaru", "Boruto", "Sarada", "Non ancora mostrato"], correct: "Non ancora mostrato" },
  { question: "Chi è il maestro di Sakura?", answers: ["Tsunade", "Kurenai", "Shizune", "Anko"], correct: "Tsunade" },
  { question: "Quale clan usa principalmente le tecniche con insetti?", answers: ["Aburame", "Akimichi", "Inuzuka", "Yamanaka"], correct: "Aburame" },
  { question: "Chi è l'amico d'infanzia di Naruto e rivale in allenamento?", answers: ["Sasuke Uchiha", "Kiba Inuzuka", "Shikamaru Nara", "Choji Akimichi"], correct: "Sasuke Uchiha" },
  { question: "Chi ha creato l'Akatsuki originariamente?", answers: ["Yahiko", "Nagato", "Konan", "Hanzo"], correct: "Yahiko" },
  { question: "Chi diventa il Sesto Hokage?", answers: ["Kakashi Hatake", "Naruto Uzumaki", "Danzo Shimura", "Shikamaru Nara"], correct: "Kakashi Hatake" },
  { question: "Qual è il soprannome di Might Guy?", answers: ["La Bestia Verde di Konoha", "Il Genio della Foglia", "Il Copiatore", "Il Saggio dei Sei Sentieri"], correct: "La Bestia Verde di Konoha" },
  { question: "Quale arma usa Tenten come specialità?", answers: ["Armi da lancio", "Katana", "Martelli", "Falci"], correct: "Armi da lancio" },
  { question: "Chi è il Jinchūriki di Isobu?", answers: ["Yagura", "Mei Terumi", "Ao", "Chojuro"], correct: "Yagura" },
  { question: "Chi è l'unico sopravvissuto del clan Uchiha (prima del ritorno di Sasuke)?", answers: ["Itachi Uchiha", "Madara Uchiha", "Obito Uchiha", "Shisui Uchiha"], correct: "Itachi Uchiha" },
  { question: "Quale tecnica usa Shikamaru per immobilizzare i nemici?", answers: ["Kagemane no Jutsu", "Kage Bunshin no Jutsu", "Katon no Jutsu", "Raikiri"], correct: "Kagemane no Jutsu" }
];

// -------------------- Utility --------------------
function shuffleArray(arr) {
  // Fisher–Yates
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickRandomQuestions(pool, n) {
  const copy = [...pool];
  shuffleArray(copy);
  return copy.slice(0, n);
}

// -------------------- Stato & DOM --------------------
const container = document.getElementById("quiz-container");
const startBtn  = document.getElementById("start-btn");
const result    = document.getElementById("result");

let quiz = [];          // 8 domande estratte
let idx = 0;            // indice domanda corrente
let score = 0;          // risposte corrette
const PASS_RATIO = 0.7; // 70%

// -------------------- Flusso --------------------
function startQuiz() {
  quiz = pickRandomQuestions(allQuestions, 8); // <— 8 domande random
  idx = 0;
  score = 0;
  result.hidden = true;
  container.hidden = false;
  renderQuestion();
}

function renderQuestion() {
  const q = quiz[idx];
  const mixedAnswers = shuffleArray([...q.answers]); // <— risposte mescolate

  container.innerHTML = `
    <h2>${q.question}</h2>
    ${mixedAnswers.map(a => `<button class="answer-btn" data-a="${a}">${a}</button>`).join("")}
  `;

  container.querySelectorAll(".answer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.a === q.correct) score++;
      idx++;
      if (idx < quiz.length) renderQuestion();
      else showResult();
    });
  });
}

function showResult() {
  container.hidden = true;
  result.hidden = false;

  const pass = score >= Math.ceil(quiz.length * PASS_RATIO);

  if (pass) {
    // Segnala che il quiz è stato superato e vai alla pagina “effetto ninja”
    sessionStorage.setItem('quizWin', '1');
    window.location.href = 'auguri.html';
  } else {
    result.innerHTML = `
      <h2 class="win">💥 Non mollare!</h2>
      <p>Punteggio: <strong>${score}</strong> / <strong>${quiz.length}</strong>. Allenati e riprova.</p>
      <div class="actions" style="margin-top:12px; text-align:center;">
        <button class="btn btn-primary" id="retry">Riprova</button>
      </div>
    `;
    document.getElementById('retry').addEventListener('click', startQuiz);
  }
}

// Avvio
startBtn.addEventListener("click", () => {
  startBtn.remove();
  startQuiz();
});
