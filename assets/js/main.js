const navToggle = document.querySelector('.nav-toggle');
const navigation = document.getElementById('navigation');
const yearEl = document.getElementById('year');

if (navToggle && navigation) {
    navToggle.addEventListener('click', () => {
        const open = navigation.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
    });

    navigation.querySelectorAll('a').forEach((link) =>
        link.addEventListener('click', () => {
            navigation.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        })
    );
}

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const repoGrid = document.getElementById('repo-grid');

if (repoGrid) {
    const username = repoGrid.dataset.githubUser;
    const featuredRepos = (repoGrid.dataset.featuredRepos ?? '')
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);

    if (username) {
        fetchRepos(username, featuredRepos);
    } else {
        renderFallback();
    }
}

async function fetchRepos(username, featuredRepos) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
            headers: { Accept: 'application/vnd.github+json' },
        });

        if (!response.ok) {
            throw new Error(`GitHub request failed: ${response.status}`);
        }

        const repos = await response.json();

        const curated = featuredRepos
            .map((name) => repos.find((repo) => repo.name.toLowerCase() === name.toLowerCase()))
            .filter(Boolean);

        const fallback = repos
            .filter((repo) => !repo.fork)
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 3);

        renderRepos(curated.length ? curated : fallback);
    } catch (error) {
        console.error(error);
        renderFallback();
    }
}

function renderRepos(repos) {
    if (!repoGrid) return;

    repoGrid.innerHTML = '';

    if (!repos.length) {
        renderFallback();
        return;
    }

    repos.forEach((repo) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${repo.name.replace(/-/g, ' ')}</h3>
            <p>${repo.description ?? 'Open-source project combining human-centered UX with production-grade engineering.'}</p>
            <div class="meta">
                <span>${repo.language ?? 'TypeScript'}</span>
                <span>Updated ${new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(repo.updated_at))}</span>
            </div>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Explore repository</a>
        `;
        repoGrid.appendChild(card);
    });
}

function renderFallback() {
    if (!repoGrid) return;

    repoGrid.innerHTML = '';

    const projects = [
        {
            title: 'CoolBeerGames',
            description: 'Real-time social gaming platform with cross-game presence, dynamic lobbies, and synchronized state.',
            language: 'TypeScript',
            link: 'https://coolbeergames.app',
            cta: 'View product overview',
        },
        {
            title: 'SceneIt',
            description: 'AI-powered movie discovery experience pairing Gemini-driven insights with interactive filtering.',
            language: 'JavaScript',
            link: 'mailto:nicholas.td@gmail.com',
            cta: 'Request demo',
        },
        {
            title: 'Study-Hub',
            description: 'Modular study workspace generating notes, flashcards, quizzes, and games from JSON configuration.',
            language: 'React',
            link: 'mailto:nicholas.td@gmail.com',
            cta: 'See case study',
        },
    ];

    projects.forEach((project) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="meta">
                <span>${project.language}</span>
                <span>Case study coming soon</span>
            </div>
            <a href="${project.link}">${project.cta}</a>
        `;
        repoGrid.appendChild(card);
    });
}
