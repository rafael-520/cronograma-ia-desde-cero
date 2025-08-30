const fases = [
  {
    nombre: "Fase 1: Introducción a la IA (Semanas 1-2)",
    tareas: [
      {
        nombre: "Ver videos de IA para Todos (Coursera) - Lunes-Jueves",
        recurso: "IA para Todos (Coursera)",
        url: "https://www.coursera.org/learn/ai-for-everyone-es",
      },
      {
        nombre: "Introducción a la IA generativa (Google Cloud)",
        recurso: "Introducción a la IA generativa (Google Cloud)",
        url: "https://www.cloudskillsboost.google/course_templates/536?locale=es",
      },
      {
        nombre: "Inteligencia Artificial para todos (EDteam)",
        recurso: "Inteligencia Artificial para todos (EDteam)",
        url: "https://www.youtube.com/watch?v=gYrfGnYob5Q",
      },
    ],
  },
  {
    nombre: "Fase 2: Fundamentos de Programación con Python (Semanas 3-6)",
    tareas: [
      {
        nombre: "Playlist Curso de Python desde cero (Soy Dalto) - Lunes-Jueves",
        recurso: "Curso de Python desde cero (Soy Dalto)",
        url: "https://www.youtube.com/results?search_query=Curso+Python+desde+cero+Soy+Dalto",
      },
      {
        nombre: "Fundamentos de Python (DataCamp) - Viernes",
        recurso: "Fundamentos de Python (DataCamp)",
        url: "https://www.datacamp.com/es/courses",
      },
      {
        nombre: "Programación desde cero con IA - Sábado",
        recurso: "Programación desde cero con IA",
        url: "https://www.youtube.com/watch?v=8b6KecIzcQA",
      },
      {
        nombre: "Descanso - Domingo",
        recurso: "Descanso",
        url: "#",
      },
    ],
  },
  {
    nombre: "Fase 3: Matemáticas para IA (Semanas 7-10)",
    tareas: [
        {
            nombre: "Videos de Fundamentos de Estadística - Lunes-Jueves",
            recurso: "Fundamentos de Estadística con Python",
            url: "https://www.datacamp.com/es/tracks/statistics-fundamentals-with-python"
        },
        {
            nombre: "Práctica visual con 3Blue1Brown Esencia del Álgebra Lineal - Viernes",
            recurso: "Esencia del Álgebra Lineal",
            url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
        },
        {
            nombre: "Curso de Matemáticas para IA (Dot CSV) - Sábado",
            recurso: "Curso de Matemáticas para IA (Dot CSV)",
            url: "https://www.youtube.com/c/DotCSV"
        },
        {
            nombre: "Descanso - Domingo",
            recurso: "Descanso",
            url: "#"
        }
    ]
  },
  {
    nombre: "Fase 4: Aprendizaje Automático (Semanas 11-18)",
    tareas: [
        {
            nombre: "Machine Learning Crash Course - Lunes-Jueves",
            recurso: "Machine Learning Crash Course (Google)",
            url: "https://developers.google.com/machine-learning/crash-course?hl=es-419"
        },
        {
            nombre: "Evaluación de modelos Científico de Aprendizaje Automático con Python - Viernes",
            recurso: "Científico de Aprendizaje Automático con Python",
            url: "https://www.datacamp.com/es/courses"
        },
        {
            nombre: "Curso de Inteligencia Artificial con Python (Udemy) - Sábado",
            recurso: "Curso de Inteligencia Artificial con Python (Udemy)",
            url: "https://www.udemy.com/course/inteligencia-artificial-gratis-python/"
        },
        {
            nombre: "Descanso - Domingo",
            recurso: "Descanso",
            url: "#"
        }
    ]
  },
  {
    nombre: "Fase 5: Aprendizaje Profundo y IA Generativa (Semanas 19-26)",
    tareas: [
        {
            nombre: "Deep Learning Specialization - Lunes-Jueves",
            recurso: "Deep Learning Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/deep-learning"
        },
        {
            nombre: " Introducción a ChatGPT (DataCamp) - Viernes",
            recurso: "Introducción a ChatGPT (DataCamp)",
            url: "https://www.datacamp.com/es/courses/introduction-to-chatgpt"
        },
        {
            nombre: "Curso de Inteligencia Artificial Gratis 2025 (YouTube) - Sábado",
            recurso: "Curso de Inteligencia Artificial Gratis 2025",
            url: "https://www.youtube.com/watch?v=ZnQKdhUhNeI"
        },
        {
            nombre: "Descanso - Domingo",
            recurso: "Descanso",
            url: "#"
        }
    ]
  },
  {
    nombre: "Fase 6: Proyectos y Temas Avanzados (Semanas 27-36)",
    tareas: [
        {
            nombre: "Proyectos de YouTube - Lunes-Jueves",
            recurso: "Proyectos en YouTube (SALVAJE o Xavier Mitjana)",
            url: "https://www.youtube.com/results?search_query=proyectos+IA+Python+tutorial"
        },
        {
            nombre: "Videos de ética - Viernes",
            recurso: "Artificial Intelligence: Ethics & Societal Challenges",
            url: "https://www.coursera.org/learn/ai-ethics"
        },
        {
            nombre: "Comunidad y certificación - Sábado",
            recurso: "Ideas de proyectos (DataCamp)",
            url: "https://www.datacamp.com/es/courses"
        },
        {
            nombre: "Avance personal Canales: Dot CSV, Javi Manzano - Domingo",
            recurso: "Canales: Dot CSV, Javi Manzano",
            url: "https://www.youtube.com/c/DotCSV"
        }
    ]
  }
];

const cronogramaDiv = document.getElementById("cronograma");
let totalTareas = 0;
let totalCompletadas = 0;

fases.forEach((fase, faseIndex) => {
  const faseDiv = document.createElement("div");
  faseDiv.classList.add("fase");

  const header = document.createElement("div");
  header.classList.add("fase-header");
  header.innerHTML = `<h3>${fase.nombre}</h3>`;

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  const fill = document.createElement("div");
  fill.classList.add("progress-fill");
  progressBar.appendChild(fill);

  const progressText = document.createElement("div");
  progressText.classList.add("progress-text");
  progressText.textContent = "Avance: 0%";

  const tareasDiv = document.createElement("div");
  tareasDiv.classList.add("tareas");

  let completadas = 0;
  totalTareas += fase.tareas.length;

  fase.tareas.forEach((tarea, tareaIndex) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const tareaInfo = document.createElement("div");
    tareaInfo.classList.add("tarea-info");

    const checkboxId = `checkbox_${faseIndex}_${tareaIndex}`;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxId;

    const label = document.createElement("label");
    label.textContent = tarea.nombre;
    label.setAttribute("for", checkboxId);

    tareaInfo.appendChild(checkbox);
    tareaInfo.appendChild(label);

    const savedState = localStorage.getItem(checkboxId);
    if (savedState === "true") {
      checkbox.checked = true;
      completadas++;
      totalCompletadas++;
    }

    checkbox.addEventListener("change", () => {
      localStorage.setItem(checkboxId, checkbox.checked);

      if (checkbox.checked) {
        completadas++;
        totalCompletadas++;
      } else {
        completadas--;
        totalCompletadas--;
      }
      const porcentajeFase = (completadas / fase.tareas.length) * 100;
      fill.style.width = `${porcentajeFase}%`;
      progressText.textContent = `Avance: ${Math.round(porcentajeFase)}%`;

      const porcentajeTotal = (totalCompletadas / totalTareas) * 100;
      document.getElementById("total-fill").style.width = `${porcentajeTotal}%`;
      document.getElementById(
        "total-text"
      ).textContent = `Avance Total: ${Math.round(porcentajeTotal)}%`;
    });
    
    const btn = document.createElement("a");
    btn.href = tarea.url;
    btn.textContent = "Ver Recurso";
    btn.target = "_blank";
    btn.classList.add("btn");

    if(tarea.url === "#") {
        btn.classList.add("disabled");
    }


    card.appendChild(tareaInfo);
    card.appendChild(btn);
    tareasDiv.appendChild(card);
  });

  const porcentajeFaseInicial = (completadas / fase.tareas.length) * 100;
  fill.style.width = `${porcentajeFaseInicial}%`;
  progressText.textContent = `Avance: ${Math.round(porcentajeFaseInicial)}%`;

  faseDiv.appendChild(header);
  faseDiv.appendChild(progressBar);
  faseDiv.appendChild(progressText);
  faseDiv.appendChild(tareasDiv);
  cronogramaDiv.appendChild(faseDiv);
});

const porcentajeTotalInicial = (totalCompletadas / totalTareas) * 100;
document.getElementById(
  "total-fill"
).style.width = `${porcentajeTotalInicial}%`;
document.getElementById("total-text").textContent = `Avance Total: ${Math.round(
  porcentajeTotalInicial
)}%`;