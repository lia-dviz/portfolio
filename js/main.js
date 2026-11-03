const posts = [
    {
        title: "My Gallery of Web Data Visualization Samples Built with D3.js and React",
        excerpt: `
            <p>The first sample is an interactive D3.js motion scatter plot exploring global food productivity versus fertilizer inputs over six decades. Features log-scaled axes, an animated timeline, interactive sidebar filters, and dual chart/table views.</p>
            <p>Press play button, hover over the chart, or search a country to explore 🗺️.</p>

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
        tags: ["JavaScript", "D3.js", "React"]
    },
    {
        title: "Python + Rust: Building a RAG Text Chunker",
        excerpt: `
            <p>I tested combining Python and Rust to build a text chunker for RAG pipelines. Slicing massive files in pure Python is painfully slow, so I used PyO3 and Rayon to let Rust handle all the heavy string processing across all CPU cores while Python takes care of the high-level setup.</p>

            <p>To test it out, I used Shakespeare text just to have a giant file to work with. Obviously, you wouldn't feed Shakespeare to a real-world company chatbot, but it's great for stress-testing performance. In a real project, you'd swap that out for actual heavy documents, company wikis, or server logs that need to get prepped for vector embeddings in milliseconds.</p>

            <div class='post-image-container'><img src='assets/images/rag-data.png' alt='Terminal Benchmark and Execution Report'></div>
        `,
        image: "", 
        repoUrl: "",
        tags: ["Python", "Rust", "PyO3", "Rayon", "RAG", "AI Engineering"]
    },
    {
        title: "ELT Pipeline Automating Weather Data Ingestion with dlt, DuckDB, dbt, and GitHub Actions",
        excerpt: `
            <p>For this project, I built an automated end-to-end ELT data pipeline designed to ingest real-time weather metrics from the Open-Meteo API for multiple cities including Sao Paulo, Rio de Janeiro, and Curitiba. The core motivation was to create a data architecture using modern stack tools.</p>
            
            <p>Python plays a fundamental role across the entire backend architecture. I used Python to write custom data generators, handle API request exceptions, manage environment configurations, and integrate the <strong>dlt</strong> package to stream structured records straight into the local <strong>DuckDB</strong> columnar database without complex boilerplate setup.</p>

            <p>The data flow starts by extracting live JSON payloads from public endpoints. By structuring the extraction logic cleanly, the pipeline captures weather attributes like temperature, humidity, wind speed, and weather codes along with precise UTC ingestion timestamps before loading them into the database.</p>

            <div class='post-image-container'>
                <img src='assets/images/dlt-duckdb.png' alt='Pipeline Architecture'>
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
                    <li><i class="fa-solid fa-folder"></i> <strong>dbt_project/</strong> 
                        <ul>
                            <li><i class="fa-solid fa-file-code"></i> dbt_project.yml</li>
                            <li><i class="fa-solid fa-file-code"></i> models/</li>
                        </ul>
                    </li>
                    <li><i class="fa-solid fa-folder"></i> <strong>extract/</strong> 
                        <ul>
                            <li><i class="fa-solid fa-file-code"></i> main_flow.py</li>
                        </ul>
                    </li>
                    <li><i class="fa-solid fa-folder"></i> <strong>viz/</strong> 
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
            <p>I built this FastAPI security gateway to practice API development. It serves to protect AI models by intercepting and filtering malicious inputs or prompt injections before they reach downstream processing pipelines. The application features a dedicated <code>POST /v1/execute</code> endpoint that validates user IDs and prompts in real-time, alongside a simple health check route at <code>GET /</code> to monitor operational status. Everything is containerized using a Dockerfile.</p>

            <p>The core logic uses a security guard module that scans incoming requests against a strict blacklist of forbidden keywords like ignore, delete, admin, password, or drop table. If any malicious pattern is detected, the API immediately blocks the payload and returns an HTTP 403 Forbidden status code.</p>

            <div class='post-image-container'>
                <img src='assets/images/api.png' alt='SafePrompt API Structure'>
            </div>
        `,
        image: "", 
        repoUrl: "https://github.com/lia-dviz/Safe-Prompt-API",
        tags: ["Python", "FastAPI", "Docker", "Security"]
    }
];

let activeSelectedTag = null;
let searchQuery = "";

function renderPosts() {
    const feedContainer = document.getElementById('recent-posts');
    if (!feedContainer) return;
    feedContainer.innerHTML = '';

    const query = searchQuery.trim().toLowerCase();

    const filteredPosts = posts.filter(post => {
        const matchesTag = activeSelectedTag ? (post.tags && post.tags.includes(activeSelectedTag)) : true;
        
        const matchesQuery = query === "" || 
            post.title.toLowerCase().includes(query) || 
            (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)));

        return matchesTag && matchesQuery;
    });

    if (filteredPosts.length === 0) {
        feedContainer.innerHTML = `<p style="color: #888; text-align: center; padding: 2rem 0;">No posts found.</p>`;
        return;
    }

    filteredPosts.forEach((post, index) => {
        let tagsHtml = '';
        if (post.tags && post.tags.length > 0) {
            const tagsList = post.tags.map(t => `<a class="post-tag" onclick="filterByTag('${t}')"><i class="fa-solid fa-tag"></i> ${t}</a>`).join(' ');
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

        let postTitleHtml = '';
        if (index === 1) {
            postTitleHtml = `<div class="post-title" style="color: #467093; font-size: 2.1rem; font-weight: 400;">${post.title}</div>`;
        } else {
            const postLink = post.repoUrl || '#';
            postTitleHtml = `<div class="post-title"><a href="${postLink}" target="_blank">${post.title}</a></div>`;
        }

        const dividerHtml = index < filteredPosts.length - 1 ? '<hr class="post-divider">' : '';

        const postElement = document.createElement('article');
        postElement.className = 'recent-post-item';
        postElement.innerHTML = `
            ${postTitleHtml}
            <div class="recent-post-content">
                <div>${post.excerpt}</div>
            </div>
            ${tagsHtml}
            ${repoBtnHtml}
            ${dividerHtml}
        `;
        feedContainer.appendChild(postElement);
    });

    if (window.twemoji) {
        twemoji.parse(feedContainer);
    }
}

function handleSearch(value) {
    showSection('home');
    searchQuery = value;
    renderPosts();
}

function filterByTag(tagName) {
    showSection('home');
    if (activeSelectedTag === tagName) {
        activeSelectedTag = null;
    } else {
        activeSelectedTag = tagName;
    }
    renderPosts();
    renderSidebarTags();
}

function renderSidebarTags() {
    const tagCounts = {};
    posts.forEach(post => {
        if (post.tags) {
            post.tags.forEach(tag => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        }
    });

    const sidebarTagList = document.getElementById('sidebar-tag-list');
    if (!sidebarTagList) return;

    sidebarTagList.innerHTML = '';
    Object.keys(tagCounts).forEach(tag => {
        const item = document.createElement('div');
        const isActive = activeSelectedTag === tag ? 'active' : '';
        item.className = `sidebar-tag-item ${isActive}`;
        item.onclick = () => filterByTag(tag);
        item.innerHTML = `<span>${tag}</span><span class="tag-count">${tagCounts[tag]}</span>`;
        sidebarTagList.appendChild(item);
    });
}

function showSection(sectionName) {
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about-section');

    if (sectionName === 'about') {
        if (homeSection) homeSection.style.display = 'none';
        if (aboutSection) aboutSection.style.display = 'block';
    } else {
        if (homeSection) homeSection.style.display = 'block';
        if (aboutSection) aboutSection.style.display = 'none';
    }

    if (window.twemoji) {
        twemoji.parse(document.body);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderSidebarTags();

    if (typeof L2Dwidget !== 'undefined') {
        L2Dwidget.init({
            model: {
                jsonPath: "assets/live2d/model.json"
            },
            display: {
                position: "left",
                width: 250,
                height: 350,
                hOffset: -40,
                vOffset: 0
            },
            mobile: {
                show: false,
                scale: 0.5
            },
            react: {
                opacity: 1
            }
        });
    }

    if (window.twemoji) {
        twemoji.parse(document.body);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderSidebarTags();
    initLive2D();

    if (window.twemoji) {
        twemoji.parse(document.body);
    }
});