'use strict';
(() => {
   console.log("DOM Queries")
   /*
   * 1. getElementById
   * 2. getElementByClassName
   * 3. querySelector
   * 4. querySelectorAll 
   * 
   */

   const header = document.getElementById('pageHeader');
   header.style.color = 'red';

   const activeLink = document.getElementsByClassName('active');
   console.log(activeLink); // HTMLCollection
   Array.from(activeLink).forEach(link => link.style.color = 'red');

    const contentHeader = document.querySelector('main h2');
    contentHeader.style.color = 'red';

    const articleHeaders = document.querySelectorAll('article h3');
    console.log(articleHeaders)// NodeList handled like array
    articleHeaders.forEach(header => header.style.color = 'red');
    
})()