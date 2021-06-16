'use strict';
/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */
const titleClickHandler = function(event){

  event.preventDefault();

  const clickedElement = this;

  console.log('Link was clicked!');

  console.log(event);
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);

  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  console.log(articleSelector);
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
    
  targetArticle.classList.add('active');

  console.log(targetArticle);

  /* add class 'active' to the correct article */
};

  
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags.list';

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
    
  titleList.innerHTML = '';
  /* for each article */
  let html = '';

  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
    console.log(article);
    
    /* get the article id */
    const articleId = article.getAttribute('id');
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* get the title from the title element */

    /* create HTML of the link */
    const linkHTML = '"<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>"';
  
    console.log(linkHTML);
    /* insert link into titleList */
    titleList.insertAdjacentHTML('afterbegin', linkHTML);
    
    html = html +linkHTML;
    console.log(html);
  }
  titleList.innerHTML = html;
    
  /*Debbuging active and cliced article links */
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

   
}


generateTitleLinks();

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
    
  /* START LOOP: for every article: */
  for(let article of articles){
    console.log(article);
    /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    
    /* make html variable with empty string */
    //titleList.innerHTML = '';
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = clickedElement.getAttribute('data-tags');
    console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log(articleTagsArray);
      /* generate HTML of the link */
      const linkHTML = '"<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>"';
      console.log(linkHTML);
      articleTags.insertAdjacentHTML('afterbegin', linkHTML);
      
      html = html +linkHTML;
      console.log(html);
    
    articleTags.innerHTML = html;
      /* add generated code to html variable */

    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
    }
}

generateTags();