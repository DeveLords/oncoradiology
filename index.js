document.addEventListener("DOMContentLoaded", function () {
	const articles = [
		{
			title: "Лучевая диагностика в современной клинической практике",
			text: "Обзор подходов к применению методов визуализации в диагностике и планировании лечения.",
			image: "https://static.tildacdn.com/tild3865-3333-4566-a364-346566373034/photo.jpg",
			link: "/article-1",
			meta: "Статья • 12 марта 2026",
		},
		{
			title: "Роль МРТ в оценке онкологических процессов",
			text: "Разбираем, в каких клинических случаях МРТ особенно полезна и какие ограничения важно учитывать.",
			image: "https://static.tildacdn.com/tild3432-3632-4466-b239-313537343763/photo.jpg",
			link: "/article-2",
			meta: "Статья • 10 марта 2026",
		},
		{
			title: "Подготовка пациента к лучевым исследованиям",
			text: "Практические рекомендации для специалистов и пациентов перед проведением диагностических процедур.",
			image: "https://static.tildacdn.com/tild3538-3832-4430-a531-343133643261/photo.jpg",
			link: "/article-3",
			meta: "Статья • 8 марта 2026",
		},
		{
			title: "Как структурировать базу знаний медицинского сообщества",
			text: "Подход к организации материалов, статей, рекомендаций и образовательных документов.",
			image: "https://static.tildacdn.com/tild6538-3030-4532-a437-653532356164/photo.jpg",
			link: "/article-4",
			meta: "Статья • 5 марта 2026",
		},
		{
			title: "Ключевые принципы оформления экспертных материалов",
			text: "Как сделать научный и профессиональный контент удобным для чтения и восприятия на сайте.",
			image: "https://static.tildacdn.com/tild3238-6463-4133-a335-373938353562/photo.jpg",
			link: "/article-5",
			meta: "Статья • 2 марта 2026",
		},
		{
			title: "Ошибки при проектировании раздела «Материалы»",
			text: "Типичные проблемы при создании разделов со статьями и способы их решения.",
			image: "https://static.tildacdn.com/tild3236-3437-4639-a165-313232626639/photo.jpg",
			link: "/article-6",
			meta: "Статья • 28 февраля 2026",
		},
		{
			title: "Как улучшить навигацию внутри экспертной базы знаний",
			text: "Сетка карточек, фильтрация, поиск и логика переходов между разделами и материалами.",
			image: "https://static.tildacdn.com/tild3030-3235-4330-a531-323837626133/photo.jpg",
			link: "/article-7",
			meta: "Статья • 25 февраля 2026",
		},
		{
			title: "Карточки статей: композиция, иерархия, акценты",
			text: "Подбираем удачную структуру карточки: изображение, дата, категория, заголовок и краткое описание.",
			image: "https://static.tildacdn.com/tild3935-3130-4662-a230-366265626564/photo.jpg",
			link: "/article-8",
			meta: "Статья • 21 февраля 2026",
		},
		{
			title: "Когда использовать кнопку «Показать еще» вместо пагинации",
			text: "Сравнение подходов для списков материалов и сценарии, в которых динамическая загрузка удобнее.",
			image: "https://static.tildacdn.com/tild6138-3930-4538-b732-353663376239/photo.jpg",
			link: "/article-9",
			meta: "Статья • 18 февраля 2026",
		},
	];

	const grid = document.getElementById("articlesGrid");
	const button = document.getElementById("loadMoreBtn");

	if (!grid || !button) return;

	const initialCount = 6;
	const step = 3;
	let renderedCount = 0;

	function escapeHtml(str) {
		return String(str)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	function createCard(article) {
		return `
        <article class="article-card">
          <a class="article-card__image-wrap" href="${escapeHtml(article.link)}">
            <img
              class="article-card__image"
              src="${escapeHtml(article.image)}"
              alt="${escapeHtml(article.title)}"
              loading="lazy"
            >
          </a>
          <div class="article-card__content">
            <div class="article-card__meta">${escapeHtml(article.meta || "")}</div>
            <h3 class="article-card__title">${escapeHtml(article.title)}</h3>
            <p class="article-card__text">${escapeHtml(article.text)}</p>
            <a class="article-card__link" href="${escapeHtml(article.link)}">
              Читать статью
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      `;
	}

	function revealNewCards() {
		const hiddenCards = grid.querySelectorAll(
			".article-card:not(.is-visible)",
		);
		hiddenCards.forEach((card, index) => {
			setTimeout(() => {
				card.classList.add("is-visible");
			}, index * 80);
		});
	}

	function renderCards(count) {
		const items = articles.slice(renderedCount, renderedCount + count);

		items.forEach((article) => {
			grid.insertAdjacentHTML("beforeend", createCard(article));
		});

		renderedCount += items.length;
		revealNewCards();

		if (renderedCount >= articles.length) {
			button.classList.add("is-hidden");
		}
	}

	button.addEventListener("click", function () {
		renderCards(step);
	});

	renderCards(initialCount);
});
