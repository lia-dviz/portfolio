const posts = [
    {
        title: "ELT Pipeline Automating Weather Data Ingestion with dlt, DuckDB, dbt, and GitHub Actions",
        excerpt: `
            <p>For this project, I built an automated end-to-end ELT data pipeline designed to ingest real-time weather metrics from the Open-Meteo API for multiple cities including Sao Paulo, Rio de Janeiro, and Curitiba. The core motivation was to create a lightweight yet robust data architecture using modern stack tools.</p>
            
            <blockquote>
                <div class="post-quote-container">
                    <div class="post-quote-text">
                        <p>Python plays a fundamental role across the entire backend architecture. Beyond basic scripting, I used Python to write custom data generators, handle API request exceptions, manage environment configurations, and seamlessly integrate the <strong>dlt</strong> package to stream structured records straight into the local <strong>DuckDB</strong> columnar database without complex boilerplate setup.</p>
                    </div>
                    <div class="post-img-quote">
                        <img src="assets/images/python_book.jpeg" alt="Python in a Nutshell">
                    </div>
                </div>
            </blockquote>

            <div class="post-split-container">
                <div class="post-tx-img-left">
                    <img src="assets/images/dlt-duckdb.png" alt="Pipeline Architecture">
                </div>
                <div class="post-tx-img-right">
                    <p>The data flow starts by extracting live JSON payloads from public endpoints. By structuring the extraction logic cleanly, the pipeline captures weather attributes like temperature, humidity, wind speed, and weather codes along with precise UTC ingestion timestamps before loading them into the database.</p>
                </div>
            </div>

            <h4>Automation and Orchestration</h4>
            <p>To ensure the pipeline runs without manual intervention, everything is orchestrated via <strong>GitHub Actions</strong>. The workflow configuration triggers automatically on a scheduled cron job every ten minutes, setting up a clean Python environment, installing dependencies, and executing the ingestion script.</p>
            
            <div class='post-image-container'><img src='assets/images/github-workflow.png' alt='GitHub Actions Workflow Execution'></div>

            <h4>Transformations and Data Quality</h4>
            <p>Once the raw data lands in DuckDB, <strong>dbt</strong> takes over to model and structure the information. Utilizing the configured project structure inside the transform directory, dbt runs models materialized as tables and executes automated data quality tests to validate the integrity of the data on every single run.</p>
        `,
        image: "", 
        repoUrl: "https://github.com/lia-dviz/dlt-duckdb-weather-pipeline",
        tags: ["Python", "dlt", "DuckDB", "dbt", "GitHub Actions"]
    },
    {
        title: "ELT Pipeline for Ingesting, Modeling, and Visualizing Top Characters Data from the AniList API",
        excerpt: `
            <p>For this project, I built an end-to-end data pipeline focused on extracting popular character statistics from the public AniList GraphQL API, storing the raw payloads in a PostgreSQL Data Warehouse, transforming the attributes using dbt, and serving the final analytical dataset through a custom interactive web dashboard. Project structure:</p>
            
            <div class="project-tree">
                <ul>
                    <li><i class="fa-solid fa-folder"></i> <strong>dbt_project/</strong> <span style="color: #666; font-size: 0.85rem;"># SQL models, dbt configs, and data lineage</span>
                        <ul>
                            <li><i class="fa-solid fa-file-code"></i> dbt_project.yml</li>
                            <li><i class="fa-solid fa-file-code"></i> models/</li>
                        </ul>
                    </li>
                    <li><i class="fa-solid fa-folder"></i> <strong>extract/</strong> <span style="color: #666; font-size: 0.85rem;"># ELT orchestration (Prefect flows)</span>
                        <ul>
                            <li><i class="fa-solid fa-file-code"></i> main_flow.py</li>
                        </ul>
                    </li>
                    <li><i class="fa-solid fa-folder"></i> <strong>viz/</strong> <span style="color: #666; font-size: 0.85rem;"># Web application for data visualization (Dash)</span>
                        <ul>
                            <li><i class="fa-solid fa-file-code"></i> app.py</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <h4>Extraction and Orchestration</h4>
            <p>The extraction layer is built using Python alongside <strong>Prefect</strong> for workflow orchestration and error retry management. The script queries the AniList GraphQL endpoint to fetch top character details including ratings, native/full names, large avatar URLs, favorite counts, and their top associated anime and manga media.</p>
            
            <p>The extracted records are then loaded directly into a relational PostgreSQL database table named <code class="code-label">raw_characters</code>, setting up the raw staging layer for downstream modeling.</p>

            <div class='post-image-container'><img src='assets/images/elt_anilist.png' alt='AniList Pipeline Execution'></div>

            <h4>Modeling with dbt</h4>
            <p>Once raw data is available in the data warehouse, <strong>dbt</strong> takes over the transformation phase. Using structured SQL models configured as tables, the pipeline cleans and ranks characters based on their favorite counts, processes string concatenation for native names, and prepares clean dimensions ready for analytics consumption.</p>

            <h4>Data Visualization</h4>
            <p>To present the insights clearly, I developed a web application using <strong>Plotly Dash</strong>. It queries the modeled tables from PostgreSQL, parses the anime and mangaographies, and renders a responsive, styled interface featuring custom cards, avatars, and metrics.</p>
            
            <div class='post-image-container'>
                <img src='assets/images/anilist-plotly.gif' alt='AniList Dash Application'>
                <div class="image-caption">Built with Plotly Dash</div>
            </div>
        `,
        image: "", 
        repoUrl: "https://github.com/lia-dviz/Anilist-Pipeline",
        tags: ["PostgreSQL", "dbt", "Prefect", "Python"]
    },
    {
        title: "A FastAPI Security Gateway for AI Applications",
        excerpt: `
            <div class="post-side-img-container">
                <div class="post-side-text">
                    <p>I built this FastAPI security gateway to practice API development. It serves to protect AI models by intercepting and filtering malicious inputs or prompt injections before they reach downstream processing pipelines. The application features a dedicated <code>POST /v1/execute</code> endpoint that validates user IDs and prompts in real-time, alongside a simple health check route at <code>GET /</code> to monitor operational status. Everything is containerized using a Dockerfile to ensure fast and secure deployments.</p>
                </div>
                <div class="post-side-img-small">
                    <img src="assets/images/fapi.jpeg" alt="FastAPI Project Preview">
                </div>
            </div>
            
            <div class="post-split-container">
                <div class="post-tx-img-left">
                    <img src="assets/images/api.png" alt="SafePrompt API Structure">
                </div>
                <div class="post-tx-img-right">
                    <p>The core logic uses a security guard module that scans incoming requests against a strict blacklist of forbidden keywords like ignore, delete, admin, password, or drop table. If any malicious pattern is detected, the API immediately blocks the payload and returns an HTTP 403 Forbidden status code.</p>
                </div>
            </div>

            <p></p>
        `,
        image: "", 
        repoUrl: "https://github.com/lia-dviz/Safe-Prompt-API",
        tags: ["Python", "FastAPI", "Docker", "Security"]
    },
    {
        title: "Web Data Visualization Samples Built with D3.js and React",
        excerpt: `
            <blockquote>
                <div class="post-quote-container">
                    <div class="post-quote-text">
                        <p>While my day-to-day workflow relies heavily on standard business intelligence tools, JavaScript and D3.js remain my absolute favorites for creative freedom. I love building interactive data visualizations from scratch for personal projects and freelance work, escaping the rigid limits of traditional reporting to craft truly custom web experiences.</p>
                    </div>
                    <div class="post-img-quote">
                        <img src="assets/images/js.png" alt="JavaScript and D3.js passion">
                    </div>
                </div>
            </blockquote>

            <h3>Cereal Yield vs. Fertilizer Use Interactive Visualization</h3>
            <p>The first sample is an interactive D3.js motion scatter plot exploring global food productivity versus fertilizer inputs over six decades. Features log-scaled axes, an animated timeline, interactive sidebar filters, and dual chart/table views.</p>
            <p>Press play, hover over the chart, or search a country to explore.</p>

            <div class="post-media-container">
                <div class="desktop-embed">
                    <iframe src="https://lia-dviz.github.io/Cereal-Yield-vs-Fertilizer-Use-Dataviz/" loading="lazy"></iframe>
                </div>
                <div class="mobile-gif">
                    <img src="assets/images/cereal.gif" alt="Cereal Yield vs Fertilizer Use">
                </div>
            </div>

            <div class="post-btn-container">
                <a href="https://lia-dviz.github.io/Cereal-Yield-vs-Fertilizer-Use-Dataviz/" target="_blank" class="post-repo-btn">
                    <i class="fa-brands fa-github"></i> See on Github
                </a>
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eaeaea;">
            <h3>Interactive Data Visualization Gallery</h3>
            <p>I have been building a variety of other interactive data visualizations and web projects, all of which are freely available to explore on my <strong><a href="https://github.com/lia-dviz" target="_blank">data viz gallery</a></strong>.</p>
            <div class="post-three-gifs-container">
                <div class="gif-item">
                    <img src="assets/images/age.gif" alt="GIF 1">
                    <span class="image-caption">Median Age by Region</span>
                </div>
                <div class="gif-item">
                    <img src="assets/images/map.gif" alt="GIF 2">
                    <span class="image-caption">Brazil Trade Flow Map</span>
                </div>
                <div class="gif-item">
                    <img src="assets/images/read.gif" alt="GIF 3">
                    <span class="image-caption">Reading Analytics Dashboard</span>
                </div>
                <div class="gif-item">
                    <img src="assets/images/housing.gif" alt="GIF 4">
                    <span class="image-caption">Global Housing Index</span>
                </div>
                <div class="gif-item">
                    <img src="assets/images/prospects.gif" alt="GIF 5">
                    <span class="image-caption">World Population Prospects</span>
                </div>
                <div class="gif-item">
                    <img src="assets/images/graph.gif" alt="GIF 6">
                    <span class="image-caption">Knowledge Graph</span>
                </div>
            </div>

            <div class="post-btn-container">
                <a href="https://lia-dviz.github.io/data-viz-gallery/" target="_blank" class="post-repo-btn">
                    <i class="fa-solid fa-diagram-project"></i> See on Data Viz Gallery
                </a>
            </div>
        `,
        image: "",
        repoUrl: "", 
        tags: ["JavaScript", "D3.js", "React", "Data Visualization"]
    }
];

function renderPosts() {
    const feedContainer = document.getElementById('recent-posts');
    feedContainer.innerHTML = '';

    posts.forEach((post, index) => {
        let contentMediaHtml = '';
        
        if (post.image) {
            contentMediaHtml += `
                <div class="post-image-container">
                    <img src="${post.image}" alt="${post.title}">
                </div>
            `;
        }

        if (post.embedUrl && post.mobileGif) {
            const extraClass = post.embedClass ? post.embedClass : '';
            contentMediaHtml += `
                <div class="post-media-container ${extraClass}">
                    <div class="desktop-embed">
                        <iframe src="${post.embedUrl}" loading="lazy"></iframe>
                    </div>
                    <div class="mobile-gif">
                        <img src="${post.mobileGif}" alt="${post.title}">
                    </div>
                </div>
            `;
        }

        let tagsHtml = '';
        if (post.tags && post.tags.length > 0) {
            const tagsList = post.tags.map(t => `<a class="post-tag"><i class="fa-solid fa-tag"></i> ${t}</a>`).join(' ');
            tagsHtml = `<div class="recent-post-tags">${tagsList}</div>`;
        }

        let repoBtnHtml = '';
        if (post.repoUrl) {
            repoBtnHtml = `
                <div class="post-btn-container">
                    <a href="${post.repoUrl}" target="_blank" class="post-repo-btn">
                        <i class="fa-brands fa-github"></i> See on Github
                    </a>
                </div>
            `;
        }

        const postLink = post.repoUrl || post.embedUrl || '#';
        const dividerHtml = index < posts.length - 1 ? '<hr class="post-divider">' : '';

        const postElement = document.createElement('article');
        postElement.className = 'recent-post-item';
        postElement.innerHTML = `
            <div class="post-title"><a href="${postLink}" target="_blank">${post.title}</a></div>
            <div class="recent-post-content">
                <p class="recent-post-abstract">${post.excerpt}</p>
                ${contentMediaHtml}
            </div>
            ${tagsHtml}
            ${repoBtnHtml}
            ${dividerHtml}
        `;
        feedContainer.appendChild(postElement);
    });
}

function showSection(sectionName) {
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');

    if (sectionName === 'about') {
        homeSection.style.display = 'none';
        aboutSection.style.display = 'block';
    } else {
        homeSection.style.display = 'block';
        aboutSection.style.display = 'none';
    }

    if (window.twemoji) {
        twemoji.parse(document.body);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderPosts();

    if (window.twemoji) {
        twemoji.parse(document.body);
    }

    window.addEventListener('scroll', () => {
        const navBar = document.getElementById('cxo-intro-nav');
        const profileAvatar = document.querySelector('.profile-avatar');
        
        if (window.scrollY > 50) {
            if (navBar) {
                navBar.classList.add('scrolled');
                navBar.classList.add('nav-style-two');
            }
            if (profileAvatar) {
                profileAvatar.classList.add('scrolled');
            }
        } else {
            if (navBar) {
                navBar.classList.remove('scrolled');
                navBar.classList.remove('nav-style-two');
            }
            if (profileAvatar) {
                profileAvatar.classList.remove('scrolled');
            }
        }
    });
});