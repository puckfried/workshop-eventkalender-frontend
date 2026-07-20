(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{title:`Sommer auf dem Dach`,date:`Mo, 18. Aug`,time:`19:00 Uhr`,place:`Klunkerkranich`,category:`Musik`,description:`Live-Sets über den Dächern von Neukölln.`,icon:`✺`,accent:`#f36b4b`},{title:`Poster & Pizza`,date:`Di, 19. Aug`,time:`18:30 Uhr`,place:`B-Lage, Kreuzberg`,category:`Workshop`,description:`Ein Abend mit Siebdruck, Farben und einer großen Pizza.`,icon:`✳`,accent:`#8964e8`},{title:`Kiezkino im Hof`,date:`Mi, 20. Aug`,time:`21:00 Uhr`,place:`Haus der Statistik`,category:`Film`,description:`Kurzfilme, Popcorn und ein lauer Abend unter freiem Himmel.`,icon:`◒`,accent:`#2c8c86`},{title:`Open Studio`,date:`Fr, 22. Aug`,time:`17:00 Uhr`,place:`Uferstudios`,category:`Kunst`,description:`Schau Künstler:innen bei der Arbeit zu und komm ins Gespräch.`,icon:`●`,accent:`#e7a52c`},{title:`Vinyl Listening Bar`,date:`Sa, 23. Aug`,time:`20:00 Uhr`,place:`Oona Bar, Wedding`,category:`Musik`,description:`Gute Platten, kleine Snacks und Musik ohne Eile.`,icon:`◉`,accent:`#3266b1`},{title:`Sonntag auf dem Markt`,date:`So, 24. Aug`,time:`11:00 Uhr`,place:`Maybachufer`,category:`Community`,description:`Kaffee, lokale Labels und Zeit für einen langen Spaziergang.`,icon:`✿`,accent:`#ca4d81`}],t=document.querySelector(`#app`);function n(){t&&(t.innerHTML=e.map(e=>`
        <article class="event-card" style="--accent: ${e.accent}">
          <div class="event-card__poster" aria-hidden="true">
            <span>${e.icon}</span>
            <p>${e.category}</p>
          </div>

          <div class="event-card__content">
            <p class="event-card__date">${e.date} · ${e.time}</p>
            <h3>${e.title}</h3>
            <p>${e.description}</p>
            <p class="event-card__place">${e.place}</p>
            <a href="#kontakt">Mehr erfahren <span aria-hidden="true">→</span></a>
          </div>
        </article>
      `).join(``))}n();