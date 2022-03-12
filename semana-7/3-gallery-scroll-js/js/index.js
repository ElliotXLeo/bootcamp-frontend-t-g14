'use strict';
const documentReady = () => {

  const root = document.getElementById('root');
  let i = 1;
  let page = 1;
  const limit = 6;
  let cardTheme = '';

  const getLoremPicsum = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
      const data = response.data;
      data.forEach((element) => {
        const { id, author, download_url, url, width, height } = element;
        if (i % 2 === 0) {
          cardTheme = 'text-light bg-dark';
        } else {
          cardTheme = '';
        }

        root.innerHTML += `
          <article class="col-md-4">
            <div class="card ${cardTheme} text-center">
              <div class="card-header">
                #${i}
              </div>
              <div class="card-body">
                <img
                  src="${download_url}"
                  class="card-img-top mb-3" alt="${author}">
                <h5 class="card-title">
                  ${author}
                </h5>
                <p class="card-text">
                  Resolución: ${width} x ${height}
                </p>
                <a href="${url}" class="btn btn-danger">
                  Ver Imagen
                </a>
              </div>
              <div class="card-footer">
                Id image: ${id}
              </div>
            </div>
          </article>
        `;
        i++;
      });
      page++;
      setObserver();
    } catch (error) {
      console.error(error);
    }
  }

  const setObserver = () => {
    const options = {
      threshold: 0.5
    }

    const callBack = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          getLoremPicsum();
        }
      });
    }

    const intersectionObserver = new IntersectionObserver(callBack, options);
    intersectionObserver.observe(root.lastElementChild);
  }

  getLoremPicsum();
};

document.addEventListener('DOMContentLoaded', documentReady);